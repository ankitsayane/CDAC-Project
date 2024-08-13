import { GetPlacesDetails, PHOTO_URL } from "@/Service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PlaceCardItem({ place, location }) {
  const [photoUrl, SetPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };
    const result = await GetPlacesDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[0].name
      );
      SetPhotoUrl(PhotoUrl);
    });
  };

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
        <img
          src={photoUrl ? photoUrl : "/dummy.jpg"}
          className="w-[120px] h-[120px] rounded-xl object-cover"
        />
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
