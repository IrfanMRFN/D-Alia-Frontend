import React from "react";
import { menuList } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      id="menu"
      className="bg-acadia mx-auto py-2 md:py-4 lg:py-6 flex flex-col justify-center items-center"
    >
      <div className="text-center w-64 md:w-80">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-offwhite font-bold mb-2 md:mb-4">
          Our Delights
        </h2>
        <hr className="w-full border border-offwhite mb-2 md:mb-4 mx-auto" />
      </div>
      <div className="flex flex-row justify-center items-center text-offwhite text-center gap-2 md:gap-4 w-full overflow-x-auto">
        {menuList.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex flex-col items-center m-2 md:m-4"
          >
            <div
              className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full transition duration-200 ${
                category === item.menu_name
                  ? "border-2 border-gainsboro scale-110"
                  : ""
              }`}
            >
              <img
                className="object-cover w-full h-full rounded-full cursor-pointer"
                src={item.menu_image}
                alt="Menu"
              />
            </div>
            <p className="text-center mt-1 md:mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
