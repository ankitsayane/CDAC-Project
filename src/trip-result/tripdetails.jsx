import { Button } from "@/components/ui/button";
import { getTravelPlans } from "@/Service/TravelPlanServices";
import React from "react";

function TripDetails() {
  const OnGetData = async () => {
    console.log("button clicked");
    const showData = await getTravelPlans();
    if (showData) {
      console.log(showData);
    }
    console.log("End function");
  };
  return (
    <div>
      <h1>
        Hello This is trip details which are generated from GEMINI AI MODEL
      </h1>
      <Button onClick={OnGetData}>Get Trip Details</Button>
    </div>
  );
}

export default TripDetails;
