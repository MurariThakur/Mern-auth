import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(false);

  const getUserData = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(`${backendUrl}/api/user/data`, {
        credentials: "include",
      });
      if (res.data.success) {
        setUserData(res.data.data);
        return res.data.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isAuthState = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(`${backendUrl}/api/auth/is-authenticated`, {
        credentials: "include",
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        getUserData();
        return res.data.data;
      }
    } catch (err) {
      if (err.response?.status !== 401) {
        toast.error(err.response?.data?.message || "An error occurred");
      }
    }
  };

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
  };

  useEffect(() => {
    isAuthState();
  }, []);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
