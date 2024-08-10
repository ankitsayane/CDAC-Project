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
        {/* <ul>
          {trip.travelplan.itinerary.map((item, index) => (
            <li key={index}>
              <h5>{item.day}</h5>
              <ul>
                {item.plan.map((place, pIndex) => (
                  <li key={pIndex}>
                    <strong>{place.placeName}</strong>
                    <p>Details: {place.placeDetails}</p>
                    <p>Ticket Pricing: {place.ticketPricing}</p>
                    <img
                      src={place.placeImageUrl}
                      alt={place.placeName}
                      width="100"
                    />
                    <p>Coordinates: {place.geoCoordinates}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Itinery;
