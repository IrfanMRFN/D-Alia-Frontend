import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden animate-slideUp">
      <div className="bg-acadia bg-opacity-60 rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl mx-3 sm:mx-5 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-offwhite text-center">
          D'Alia Cakes, Cookies & Snacks
        </h1>
        <hr className="w-3/4 border border-offwhite mb-2 sm:mb-4 mx-auto" />
        <p className="text-sm sm:text-base md:text-xl text-offwhite text-center">
          Homemade Bakery, Cakes And Cookies. <br />
          Crafted With Love, Baked For Joy.
        </p>
      </div>
    </div>
  );
};

export default Header;
