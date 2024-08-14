import React, { useEffect, useState } from "react";
import axios from "axios";
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

        console.log(JSON.stringify(showData));
        setTravelPlans(showData);
      }
      console.log("End function");
    };
  
  return (
    // <div className="p-6">
    //     <h2 className="text-xl font-bold mb-4">Traveling Plans</h2>

    //         <div key={index} className="grid grid-cols-2 md:grid-cols-3">  
    //             {travelplans.length > 0 ? (
    //         travelplans.map((plan, index) => ( 
    //                <UserTripComponent trip={plan}/>
    //             ))
    //         ) : (
    //             <p className="text-center">No travel plans found for this email.</p>
    //         )}

    // </div>

    <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Traveling Plans</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {travelplans.length > 0 ? (
                    travelplans.map((plan, index) => (
                        <UserTripComponent key={index} trip={plan}  />
                    ))
                ) : (
                    <p className="text-center col-span-full">No travel plans found for this email.</p>
                )}
            </div>
    </div>
       
        
    
);
}



export default TravelPlanPage;




