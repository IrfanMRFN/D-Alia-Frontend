import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = import.meta.env.VITE_API_URL;
  const [token, setToken] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  let timeoutId;

  // Fungsi reset waktu timeout
  const resetTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      localStorage.removeItem("token");
      setLoggedIn(false);
      setToken("");
    }, 1800000);
  };

  // Memuat token dari localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setLoggedIn(true);
      resetTimeout();
    }
  }, []);

  // Event listener untuk mereset timeout saat ada aktivitas dari pengguna
  useEffect(() => {
    const events = ["mousedown", "keydown", "touchstart"];
    const resetTimer = () => {
      resetTimeout();
    };
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);

  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = {
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
      };
      return updatedCartItems;
    });

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/add",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        toast.error("Gagal menambahkan menu ke keranjang");
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
      return updatedCartItems;
    });

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/remove",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        toast.error("Gagal menghapus menu dari keranjang");
      }
    }
  };

  // Menghitung total harga item di keranjang
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodList.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Mengambil daftar menu dari API
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data);
    } catch (error) {
      toast.error("Gagal memuat daftar menu");
    }
  };

  // Memuat data keranjang dari API
  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token } }
      );
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error(error);
    }
  };

  // Memformat angka ke dalam format Rupiah
  const formatRupiah = (number) => {
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  // Memformat tanggal
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    formatRupiah,
    formatDate,
    loggedIn,
    setLoggedIn,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
