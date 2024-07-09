import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      id="contact"
      className="bg-acadia-3 text-offwhite flex flex-col items-center py-4 lg:py-6 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between w-11/12 my-2 lg:my-4">
        <div className="w-full lg:w-1/3 mb-1 lg:mb-0">
          <h3 className="text-2xl lg:text-4xl text-center lg:text-left font-bold mb-2">
            D'Alia Cakes, Cookies and Snacks
          </h3>
          <hr className="w-full lg:w-36 border-t-2 border-offwhite my-2" />
          <p className="text-sm lg:text-base m-1 text-center lg:text-left">
            Rasakan manisnya kebahagiaan bersama D'Alia Cakes, Cookies, and
            Snacks. Di setiap gigitan, ada cerita yang menghadirkan kelezatan
            dari rumah kami ke meja Anda. Temukan beragam pilihan kue, cookies,
            dan camilan yang dibuat dengan cinta dan bahan-bahan berkualitas.
            D'Alia Cakes, tempat di mana setiap rasa adalah kenangan manis.
          </p>
        </div>
        <div className="flex flex-col items-center lg:mr-10">
          <h3 className="font-bold text-lg lg:text-xl p-1">Information</h3>
          <hr className="w-3/5 lg:w-36 border-t-2 border-offwhite p-1 mb-1" />
          <p className="m-1 text-center">
            Terima pengiriman untuk daerah Depok, Cibinong dan sekitarnya,
            menggunakan Gosend atau Paxel.
          </p>
          <p className="font-bold text-base lg:text-lg m-1">
            Waktu Operasional:
          </p>
          <p className="m-1">
            Senin - Jumat
            <br />
            08:00 - 16:00
          </p>
          <p className="font-bold text-sm">Est. 2014</p>
        </div>
        <div className="flex flex-col items-center m-1">
          <h3 className="font-bold text-lg lg:text-xl p-1">Contacts</h3>
          <hr className="w-3/5 lg:w-36 border-t-2 border-offwhite p-1 mb-1" />
          <div className="flex flex-col sm:flex-row lg:flex-col justify-center lg:items-start items-center gap-4 lg:gap-2">
            <a
              href="https://api.whatsapp.com/send?phone=6289638073460&text=Mau%20Nanya-nanya%20dong%20Bun"
              target="_blank"
              className="flex items-center lg:mb-4"
            >
              <img
                src={assets.whatsapp_icon}
                alt="whatsapp"
                className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer"
              />
              <span className="ml-2">+6289638073460</span>
            </a>
            <a
              href="https://www.instagram.com/dapuralia_"
              target="_blank"
              className="flex items-center"
            >
              <img
                src={assets.instagram_icon}
                alt="instagram"
                className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer"
              />
              <span className="ml-2">@dapuralia_</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full border-t-2 border-acadia-2" />
      <p className="text-center mt-4 mx-4">
        Copyright 2024 &copy; AliaStore.id - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
