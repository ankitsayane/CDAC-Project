import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import Flyout from "./Flyout";

function Header() {
  const isLoggedIn = !!sessionStorage.getItem("isLoggedIn");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const firstWord = user?.name.split(" ")[0];

  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);

  const toggleFlyout = () => {
    setIsFlyoutOpen(!isFlyoutOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target !== document.getElementById("profile")) {
        setIsFlyoutOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <Link to={"/"}>
          <img src="/LOGO.png" alt="" className="w-1/5 bg-cover min-w-56" />
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <span className="mr-4 font-bold text- text-[#0039a6]">
                Welcome,{" "}
                {firstWord
                  ? firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
                  : "user"}
                <img
                  id="profile"
                  src="/profile.svg"
                  className="inline-block size-10 bg-cover ml-2 cursor-pointer"
                  onClick={toggleFlyout}
                />
                {isFlyoutOpen && <Flyout />}
              </span>
            </>
          ) : (
            <>
              <Link to={"/registration"}>
                <Button className="mr-1">Sign Up</Button>
              </Link>
              <Link to={"/login"}>
                <Button>Sign In</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
