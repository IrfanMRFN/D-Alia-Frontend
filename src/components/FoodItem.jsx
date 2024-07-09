import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, formatRupiah } =
    useContext(StoreContext);

  return (
    <div className="flex flex-col justify-between w-full h-full rounded-lg shadow-lg bg-acadia-2 overflow-hidden">
      <div className="w-full aspect-w-1 aspect-h-1 flex items-center justify-center relative">
        <img
          src={url + "/images/" + image}
          alt="food image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-center items-start h-auto p-2 md:p-3">
        <p className="font-bold text-base md:text-lg mb-1 text-center">
          {name}
        </p>
      </div>
      <div className="flex justify-center items-center h-full p-2 md:p-3">
        <p className="text-offwhite text-xs md:text-sm font-light">
          {description}
        </p>
      </div>
      <div className="p-2 md:p-3 pb-2 flex flex-col items-center justify-between bg-acadia-3 text-center">
        <p className="text-offwhite text-sm md:text-base font-bold pb-1">
          {formatRupiah(price)}
        </p>
        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className="px-4 py-2 text-xs sm:text-sm md:text-base bg-finch text-offwhite rounded-lg transition duration-200 hover:bg-kelp"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex items-center justify-center w-full">
            <div className="h-8 sm:h-9 md:h-10 w-1/6 bg-red-800 text-offwhite flex justify-center rounded-l-lg transition duration-200 hover:bg-red-900">
              <button onClick={() => removeFromCart(id)}>
                <img className="h-5" src={assets.minus_icon} alt="minus" />
              </button>
            </div>
            <p className="text-xs sm:text-sm md:text-base bg-offwhite text-acadia flex h-8 sm:h-9 md:h-10 justify-center items-center w-1/4">
              {cartItems[id]}
            </p>
            <div className="h-8 sm:h-9 md:h-10 w-1/6 bg-finch text-offwhite flex justify-center rounded-r-lg transition duration-200 hover:bg-kelp">
              <button onClick={() => addToCart(id)}>
                <img className="h-5" src={assets.plus_icon} alt="plus" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
