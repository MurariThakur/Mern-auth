import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { userData, backendUrl, setIsLoggedIn, setUserData } =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${backendUrl}/api/auth/logout`, {
        credentials: "include",
      });
      if (res.data.success) {
        setIsLoggedIn(false);
        setUserData(null);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  const sendVerificationOtplHandler = async () => {
    try {
      setLoading(true);
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        navigate("/email-verify");
        toast.success("OTP sent to your email");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />
      {userData ? (
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
              {!userData.isAccountVerified && (
                <li onClick={sendVerificationOtplHandler} className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                  {loading ? "Sending..." : "Verify Email"}
                </li>
              )}
              <li onClick={logoutHandler} className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
        >
          login <img src={assets.arrow_icon} alt="arrow icon" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
