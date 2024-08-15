import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTravelPlansByEmailId } from "@/Service/TravelPlanServices";
import UserTripComponent from "./components/UserTripComponent";

function TravelPlanPage() {
  const { email } = useParams();
  const [travelplans, setTravelPlans] = useState([]);

  useEffect(() => {
    if (email) {
      OnGetTravelPlans();
    }
  }, [email]);

  const OnGetTravelPlans = async () => {
    const showData = await getTravelPlansByEmailId(email);
    if (showData) {
      setTravelPlans(showData);
    }
  };

  const handleDelete = (id) => {
    setTravelPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mb-4">Trip History</h2>
      </div>

      <div className="grid grid-cols-2 mt-2 md:grid-cols-3 gap-5">
        {travelplans.length > 0 ? (
          travelplans.map((plan, index) => (
            <UserTripComponent
              key={index}
              trip={plan}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center">
            <img
              src="/history.png"
              className="h-[360px] object-cover rounded-xl"
            />
            <p className="text-center mt-4">Currently, no Trip Details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelPlanPage;
