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
    <div>
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/compassly.png" alt="" className="w-1/5 bg-cover min-w-56" />

        <div>
          {isLoggedIn ? (
            <>
              <span className="mr-6 font-bold text-[#0039a6]">
                Welcome, {name.charAt(0).toUpperCase() + name.slice(1)}
                <img src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1328.jpg?w=826" alt="" className="size-9 bg-cover absolute right-0 top-4 mr-2"/>
              </span>

              {/* <Button onClick={handleLogout}>Logout</Button> */}
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
