import React from "react";
import { Link } from "react-router-dom";

function PlaceCardItem({ place, location }) {
  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        place?.placeName +
        "," +
        location
      }
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-4 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img src="/dummy.jpg" className="w-[120px] h-[120px] rounded-xl" />
        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
          <h2 className="mt-2">🕘 {place.timeTravel}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
