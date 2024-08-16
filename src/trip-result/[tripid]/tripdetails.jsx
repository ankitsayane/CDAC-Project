import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTripDetailById } from "@/Service/TravelPlanServices";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import Itinery from "../components/Itinery";

function TripDetails() {
  const { tripid } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (tripid) {
      OnGetData();
    }
  }, [tripid]);

  const OnGetData = async () => {
    const showData = await getTripDetailById(tripid);
    if (showData) {
      setTrip(showData);
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      
      <InfoSection trip={trip} />

      <Hotels trip={trip} />

      <Itinery trip={trip} />
    </div>
  );
}

export default TripDetails;
