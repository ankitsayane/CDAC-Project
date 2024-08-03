import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <>
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <img src="./main.svg" />
        <div>
          <Button className="mr-1">Sign Up</Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </>
  );
}

export default Header;
