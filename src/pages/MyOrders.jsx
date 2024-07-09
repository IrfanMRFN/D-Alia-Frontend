import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const MyOrders = () => {
  const { url, token, formatRupiah, formatDate } = useContext(StoreContext);
  const [data, setData] = useState([]);

  // Mengambil data pesanan pengguna dari API
  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pesanan sedang diproses":
        return "text-amber-500";
      case "Pesanan sedang dikirim":
        return "text-cyan-500";
      case "Pesanan sudah sampai":
        return "text-green-600";
      default:
        return "text-gainsboro";
    }
  };

  const getPaymentColor = (payment) => {
    switch (payment) {
      case "Belum dibayar":
        return "text-red-600";
      case "Sudah dibayar":
        return "text-green-600";
      default:
        return "text-gainsboro";
    }
  };

  return (
    <div className="flex justify-center items-center my-14 min-h-96 text-offwhite">
      <div className="flex flex-col items-center w-11/12 md:w-5/6 bg-acadia p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center">
          My Orders
        </h2>
        <div className="w-full">
          {data
            .slice()
            .reverse()
            .map((order, index) => {
              return (
                <div
                  key={index}
                  className="p-4 md:p-6 rounded-lg shadow-lg mb-4 md:mb-6 flex flex-col md:flex-row items-center justify-between w-full border-2 border-acadia-2"
                >
                  <div className="flex-1 md:mr-4 w-full">
                    <p className="text-sm md:text-base mb-1">
                      {formatDate(order.date)}
                    </p>
                    <p className="text-base md:text-lg font-semibold mb-2">
                      {order.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })}
                    </p>
                    <p className="text-sm md:text-base">
                      Total: {formatRupiah(order.amount)}
                    </p>
                    <p className="text-sm md:text-base mb-2">
                      Jumlah Barang: {order.items.length}
                    </p>
                    <p className="text-sm md:text-base">
                      <span className={`${getStatusColor(order.status)}`}>
                        &#x25cf;
                      </span>
                      <b className="ml-2">{order.status}</b>
                    </p>
                    <p className="text-sm md:text-base">
                      <span className={`${getPaymentColor(order.payment)}`}>
                        &#x25cf;
                      </span>
                      <b className="ml-2">{order.payment}</b>
                    </p>
                  </div>
                  <button
                    onClick={fetchOrders}
                    className="bg-finch py-1 md:py-2 px-2 md:px-4 text-sm md:text-base rounded transition duration-200 hover:bg-kelp mt-4 md:mt-0"
                  >
                    Lacak Pesanan
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
