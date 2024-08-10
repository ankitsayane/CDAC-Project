import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function Itinery({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg mt-3">Places to Visit</h2>
      <div>
        {trip?.travelplan.itinerary.map((item, index) => (
          <div className="mt-5">
            <h2 className="font-medium text-lg">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, pIndex) => (
                <div className="">
                  <h2 className="font-medium text-sm text-orange-700">
                    {place.bestTimeToVisit}
                  </h2>
                  <PlaceCardItem
                    place={place}
                    location={trip.travelplan.location}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itinery;
