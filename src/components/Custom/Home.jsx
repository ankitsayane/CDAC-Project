import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 ">
      <h1 className="font-extrabold text-[45px] text-center mt-16">
        <span className="text-[#0039a6]">
          Compassly: Discover your next Adventure.&nbsp;
        </span>
        Personlized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Create, customize, and enhance your travel plans with our AI-powered
        trip planner.
      </p>
      <Link to={"/trip"}>
        <Button>Explore Now</Button>
      </Link>
      <img src="./home.png"/>
    </div>
  );
}

export default Home;
