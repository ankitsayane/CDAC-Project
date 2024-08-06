import React from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const isLoggedIn = !!sessionStorage.getItem("isLoggedIn");
  const name = sessionStorage.getItem("name");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="sticky top-0">
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <Link to={"/"}>
          <img src="./main.svg" />
        </Link>

        <div>
          {isLoggedIn ? (
            <>
              <span className="mr-3 font-bold text-[#0039a6]">
                Welcome, {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
              <Button onClick={handleLogout}>Logout</Button>
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
