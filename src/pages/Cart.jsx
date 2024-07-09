import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import LoginPopup from "../components/LoginPopup";
import { toast } from "react-toastify";

const Cart = () => {
  const {
    cartItems,
    foodList,
    removeFromCart,
    getTotalCartAmount,
    url,
    formatRupiah,
    loggedIn,
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleCheckout = () => {
    if (loggedIn) {
      navigate("/order");
    } else {
      setShowLoginPopup(true);
    }
  };

  return (
    <div className="flex flex-col items-center my-6 md:my-10 lg:my-14 text-offwhite">
      <div className="flex flex-col justify-center items-center w-11/12 md:w-5/6 bg-acadia p-6 lg:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-offwhite">
          Cart
        </h2>

        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start w-full md:p-6 lg:p-8">
          <div className="w-full">
            <div className="hidden md:block">
              <div className="grid grid-cols-6 gap-1 lg:gap-4 border-b pb-2 text-center font-bold">
                <p>Item</p>
                <p>Nama</p>
                <p>Harga</p>
                <p>Kuantitas</p>
                <p>Total</p>
                <p>Hapus</p>
              </div>
              <hr className="border-offwhite" />
            </div>
            {getTotalCartAmount() > 0 ? (
              foodList.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div
                      key={item._id}
                      className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 border md:border-0 rounded-lg items-center text-center py-2 md:py-4 mb-2 md:rounded-none md:border-b"
                    >
                      <div className="flex justify-center items-center">
                        <img
                          src={url + "/images/" + item.image}
                          alt={item.name}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-sm sm:text-base">{item.name}</p>
                      <p className="hidden md:block">
                        {formatRupiah(item.price)}
                      </p>
                      <p className="text-sm md:text-base">
                        {cartItems[item._id]}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base">
                        {formatRupiah(item.price * cartItems[item._id])}
                      </p>
                      <div className="md:hidden"></div>
                      <div className="px-1 sm:px-2 py-1 bg-red-800 transition duration-200 hover:bg-red-900 font-semibold m-auto rounded-md cursor-pointer">
                        <p
                          className="text-xs sm:text-sm md:text-base"
                          onClick={() => removeFromCart(item._id)}
                        >
                          Hapus
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <div className="text-sm md:text-base flex justify-center items-center w-full py-8">
                <h2>Tidak ada item di keranjang</h2>
              </div>
            )}
          </div>
          <div className="w-5/6 sm:w-3/5 md:w-2/5 lg:max-w-sm mt-6 md:mt-10 xl:mt-20 lg:ml-10">
            <div className="border border-offwhite p-3 md:p-4 rounded-lg shadow-md">
              <h2 className="text-base md:text-lg font-bold mb-4">
                Total Keranjang
              </h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm md:text-base font-semibold">Total:</p>
                <p className="text-sm md:text-base font-bold">
                  {formatRupiah(getTotalCartAmount())}
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="text-sm md:text-base w-full bg-finch text-offwhite py-2 rounded transition duration-200 hover:bg-kelp"
              >
                Lanjutkan ke Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {showLoginPopup && <LoginPopup setShowLogin={setShowLoginPopup} />}
    </div>
  );
};

export default Cart;
