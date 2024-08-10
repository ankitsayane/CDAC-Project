// import { Button } from "@/components/ui/button";
// import {
//   getTravelPlans,
//   getTripDetailById,
// } from "@/Service/TravelPlanServices";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function TripDetails() {
//   const { tripid } = useParams();
//   const [trip, setTrip] = useState([]);

//   useEffect(() => {
//     tripid && OnGetData();
//   }, [tripid]);

//   const OnGetData = async () => {
//     console.log("button clicked");
//     const showData = await getTripDetailById(tripid);
//     if (showData) {
//       console.log(showData);
//     }
//     console.log("End function");
//   };
//   return (
//     <div>
//       <h1>
//         Hello This is trip details which are generated from GEMINI AI MODEL
//       </h1>
//       {/*   */}
//     </div>
//   );
// }

// export default TripDetails;

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
    console.log("button clicked");
    const showData = await getTripDetailById(tripid);
    if (showData) {
      setTrip(showData);
      console.log(showData);
    }
    console.log("End function");
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information Section */}
      <InfoSection trip={trip} />
      {/* Recommended Hotels */}
      <Hotels trip={trip} />
      {/* Daily Plan */}
      <Itinery trip={trip} />
      {/* Footer */}
    </div>
    // <div>
    //   <h1>
    //     Hello, this is trip details which are generated from GEMINI AI MODEL
    //   </h1>
    //   {/* Display trip details if available */}
    //   {trip && (
    //     <div>
    //       <h2>Trip ID: {trip.id}</h2>
    //       <h3>Email: {trip.email}</h3>
    //       <h4>Location: {trip.travelplan.location}</h4>
    //       <h4>Budget: {trip.travelplan.budget}</h4>
    //       <h4>Duration: {trip.travelplan.duration}</h4>
    //       <h4>Travelers: {trip.travelplan.travelers}</h4>

    //       <h4>Hotels:</h4>
    //       <ul>
    //         {trip.travelplan.hotels.map((hotel, index) => (
    //           <li key={index}>
    //             <strong>{hotel.hotelName}</strong>
    //             <p>Address: {hotel.hotelAddress}</p>
    //             <p>Price: {hotel.price}</p>
    //             <img
    //               src={hotel.hotelImageUrl}
    //               alt={hotel.hotelName}
    //               width="100"
    //             />
    //             <p>Coordinates: {hotel.geoCoordinates}</p>
    //           </li>
    //         ))}
    //       </ul>

    //       <h4>Itinerary:</h4>
    //       <ul>
    //         {trip.travelplan.itinerary.map((item, index) => (
    //           <li key={index}>
    //             <p>
    //               {item.day}: {item.activity}
    //             </p>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
  );
}

export default TripDetails;
