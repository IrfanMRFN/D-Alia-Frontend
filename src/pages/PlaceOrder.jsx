import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    token,
    foodList,
    cartItems,
    setCartItems,
    url,
    formatRupiah,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    const orderItems = foodList
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({ ...item, quantity: cartItems[item._id] }));

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount(),
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/myorders");
        setCartItems({});
      } else {
        toast.error("Terjadi kesalahan saat memproses pesanan");
      }
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat memproses pesanan");
    }
  };

  useEffect(() => {
    // Jika pengguna belum login atau keranjang kosong, akan kembali ke halaman keranjang
    if (!token || getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token, getTotalCartAmount, navigate]);

  return (
    <div className="flex justify-center items-center my-6 md:my-10 lg:my-14 text-offwhite">
      <div className="flex flex-col w-11/12 md:w-5/6 bg-acadia p-6 lg:p-8 rounded-lg shadow-lg">
        <form
          onSubmit={placeOrder}
          className="w-full flex flex-col md:flex-row justify-center items-center"
        >
          <div className="w-full m-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Informasi Pesanan
            </h2>
            <input
              required
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Nama anda"
              className="text-sm md:text-base w-full mb-2 md:mb-4 p-2 bg-gainsboro rounded text-acadia"
            />
            <input
              required
              name="phoneNumber"
              onChange={onChangeHandler}
              value={data.phoneNumber}
              type="number"
              placeholder="Nomor telepon anda"
              className="text-sm md:text-base w-full mb-2 md:mb-4 p-2 bg-gainsboro rounded text-acadia"
            />
            <textarea
              required
              name="address"
              onChange={onChangeHandler}
              value={data.address}
              placeholder="Alamat pengiriman anda"
              className="text-sm md:text-base w-full mb-2 md:mb-4 p-2 bg-gainsboro rounded text-acadia"
            />
          </div>
          <div className="w-full m-4">
            <div className="border border-offwhite p-4 rounded-lg shadow-md">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                Cart Totals
              </h2>
              <div className="flex justify-between items-center mb-2 md:mb-4">
                <p className="text-sm md:text-base font-semibold">Total:</p>
                <p className="text-sm md:text-base font-bold">
                  {formatRupiah(getTotalCartAmount())}
                </p>
              </div>
              <button
                type="submit"
                className="text-sm md:text-base w-full bg-finch text-offwhite py-2 rounded transition duration-200 hover:bg-kelp"
              >
                Proses Pesanan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
