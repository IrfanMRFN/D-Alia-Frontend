import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    newPassword: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Menangani login, registrasi atau ubah password
  const onLogin = async (event) => {
    event.preventDefault();
    let endpoint = "";

    switch (currState) {
      case "Login":
        endpoint = "/api/user/login";
        break;
      case "Sign up":
        endpoint = "/api/user/register";
        break;
      case "Change password":
        endpoint = "/api/user/change-password";
        break;
      default:
        return;
    }

    try {
      const response = await axios.post(`${url}${endpoint}`, data);

      if (response.data.success) {
        if (currState === "Change password") {
          setCurrState("Login");
          toast.success(response.data.message);
          return;
        }
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-acadia p-6 sm:p-8 rounded-xl shadow-lg z-10 w-11/12 max-w-md mx-4">
        <form onSubmit={onLogin}>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-offwhite font-bold">
              {currState}
            </h2>
            <div className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer">
              <img
                onClick={() => setShowLogin(false)}
                src={assets.cross_icon}
                alt="close"
              />
            </div>
          </div>
          <div className="mb-4">
            {currState === "Sign up" && (
              <>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Nama
                  </label>
                  <input
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                    type="name"
                    placeholder="Nama anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Email
                  </label>
                  <input
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    placeholder="Email anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Nomor Telepon
                  </label>
                  <input
                    name="phoneNumber"
                    onChange={onChangeHandler}
                    value={data.phoneNumber}
                    type="tel"
                    placeholder="Nomor telepon anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={onChangeHandler}
                    value={data.password}
                    type="password"
                    placeholder="Password anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
              </>
            )}
            {currState === "Login" && (
              <>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Email
                  </label>
                  <input
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    placeholder="Email anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label className="text-offwhite text-base md:text-lg">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={onChangeHandler}
                    value={data.password}
                    type="password"
                    placeholder="Password anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
                <span
                  onClick={() => setCurrState("Change password")}
                  className="text-sm md:text-base text-finch transition duration-200 hover:text-kelp cursor-pointer"
                >
                  Change password
                </span>
              </>
            )}
            {currState === "Change password" && (
              <>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Email
                  </label>
                  <input
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    placeholder="Email anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Nomor Telepon
                  </label>
                  <input
                    name="phoneNumber"
                    onChange={onChangeHandler}
                    value={data.phoneNumber}
                    type="tel"
                    placeholder="Nomor telepon anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-offwhite text-base md:text-lg">
                    Password Baru
                  </label>
                  <input
                    name="newPassword"
                    onChange={onChangeHandler}
                    value={data.newPassword}
                    type="password"
                    placeholder="Password baru anda"
                    className="text-sm md:text-base mt-1 p-1 md:p-2 border bg-gainsboro text-acadia rounded w-full"
                    required
                  />
                </div>
              </>
            )}
          </div>
          <button
            type="submit"
            className="bg-finch transition duration-200 hover:bg-kelp text-offwhite p-1 md:p-2 rounded w-full"
          >
            {currState}
          </button>
          <div className="mt-4 text-offwhite text-center">
            {currState === "Login" ? (
              <>
                <p className="text-sm md:text-base">Buat akun baru?</p>
                <span
                  onClick={() => setCurrState("Sign up")}
                  className="text-sm md:text-base text-finch transition duration-200 hover:text-kelp cursor-pointer"
                >
                  Sign up
                </span>
              </>
            ) : currState === "Sign up" ? (
              <>
                <p className="text-sm md:text-base">Sudah punya akun?</p>
                <span
                  onClick={() => setCurrState("Login")}
                  className="text-sm md:text-base text-finch transition duration-200 hover:text-kelp cursor-pointer"
                >
                  Login
                </span>
              </>
            ) : (
              <div className="flex flex-row justify-center items-center gap-1">
                <span
                  onClick={() => setCurrState("Sign up")}
                  className="text-sm md:text-base text-finch transition duration-200 hover:text-kelp cursor-pointer"
                >
                  Sign up
                </span>
                <p> | </p>
                <span
                  onClick={() => setCurrState("Login")}
                  className="text-sm md:text-base text-finch transition duration-200 hover:text-kelp cursor-pointer"
                >
                  Login
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
