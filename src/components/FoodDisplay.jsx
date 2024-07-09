import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../components/FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  return (
    <div
      id="menu"
      className="flex flex-col bg-acadia text-offwhite justify-center items-center pb-8 md:pb-12 overflow-hidden"
    >
      <hr className="border-gainsboro-2 border w-full mb-4 md:mb-10" />
      <div className="w-11/12 flex justify-center">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-center">
          {foodList.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <div key={index} className="w-full h-full">
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
