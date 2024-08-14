import React from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
function Flyout() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="w-80 top-16 right-3 bg-zinc-100 absolute rounded-md overflow-hidden, border-2 , shadow-xl z-40">
      <div className="flex flex-col items-center mb-4 py-2">
        <img
          src="/profile.svg"
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <h2 className="text-lg font-bold text-gray-900">{user.username}</h2>
      </div>

      <div className="w-full px-4 py-3">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center">
            <span className="w-16 font-semibold text-gray-700">Name</span>
            <span className="text-gray-900">{user.name}</span>
          </div>
          <div className="flex items-center">
            <span className="w-16 font-semibold text-gray-700">E-mail</span>
            <span className="text-gray-900">{user.email}</span>
          </div>
        </div>
      </div>

      <div className="px-3 py-2">
        <Link to={"/travelplans/" + user.email}>
          <Button className="w-full py-2 text-sm ,ml-2">Trip History</Button>
        </Link>
      </div>

      <div className="px-3 py-2">
        <Button onClick={handleLogout} className="w-full py-2 text-sm">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Flyout;
