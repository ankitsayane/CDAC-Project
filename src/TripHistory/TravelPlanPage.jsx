import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getTravelPlansByEmailId } from "@/Service/TravelPlanServices";

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
    <div className="p-6">
        {travelplans.length > 0 ? (
            travelplans.map((plan, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Travel Plan for {plan?.travelplan?.location || 'N/A'}</h2>
                    
                    <h3 className="text-lg font-semibold mb-2">Hotels</h3>
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="py-2 px-4 border-b">Hotel Name</th>
                                <th className="py-2 px-4 border-b">Address</th>
                                <th className="py-2 px-4 border-b">Price</th>
                                <th className="py-2 px-4 border-b">Rating</th>
                                <th className="py-2 px-4 border-b">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plan?.travelplan?.hotels?.length ? (
                                plan.travelplan.hotels.map((hotel, i) => (
                                    <tr key={i} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">{hotel.hotelName}</td>
                                        <td className="py-2 px-4 border-b">{hotel.hotelAddress}</td>
                                        <td className="py-2 px-4 border-b">{hotel.price}</td>
                                        <td className="py-2 px-4 border-b">{hotel.rating}</td>
                                        <td className="py-2 px-4 border-b">{hotel.description}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="py-2 px-4 border-b text-center">No hotels available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <h3 className="text-lg font-semibold mb-2">Itinerary</h3>
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="py-2 px-4 border-b">Day</th>
                                <th className="py-2 px-4 border-b">Place Name</th>
                                <th className="py-2 px-4 border-b">Details</th>
                                <th className="py-2 px-4 border-b">Time Travel</th>
                                <th className="py-2 px-4 border-b">Best Time to Visit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plan?.travelplan?.itinerary?.length ? (
                                plan.travelplan.itinerary.map((day, i) => (
                                    day.plan ? (
                                        day.plan.map((planItem, j) => (
                                            <tr key={`${i}-${j}`} className="hover:bg-gray-100">
                                                <td className="py-2 px-4 border-b">{day.day}</td>
                                                <td className="py-2 px-4 border-b">{planItem.placeName}</td>
                                                <td className="py-2 px-4 border-b">{planItem.placeDetails}</td>
                                                <td className="py-2 px-4 border-b">{planItem.timeTravel}</td>
                                                <td className="py-2 px-4 border-b">{planItem.bestTimeToVisit}</td>
                                            </tr>
                                        ))
                                    ) : null
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="py-2 px-4 border-b text-center">No itinerary available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            ))
        ) : (
            <p className="text-center">No travel plans found for this email.</p>
        )}
    </div>
);
}



export default TravelPlanPage;




