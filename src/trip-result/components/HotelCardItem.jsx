import { Button } from "@/components/ui/button";
import { GetPlacesDetails, PHOTO_URL } from "@/Service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {
  const [photoUrl, SetPhotoUrl] = useState();

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName,
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
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel?.hotelName +
          "," +
          hotel?.hotelAddress
        }
        target="_blank"
      >
        <div className="hover:scale-105 transition-all cursor-pointer">
          <img
            src={photoUrl ? photoUrl : "/dummy.jpg"}
            className="rounded-xl h-[180px] w-full object-cover"
          />
          <div className="my-2 flex flex-col gap-2">
            <h2 className="font-medium">{hotel?.hotelName}</h2>
            <h2 className="text-sm text-gray-500">📍 {hotel?.hotelAddress}</h2>
            <h2 className="text-sm">💰 {hotel?.price}</h2>
            <h2 className="text-sm">⭐ {hotel?.rating}</h2>
            <Link to={hotel?.hotelBookingUrl} target="_blank">
              <Button>Check Out</Button>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HotelCardItem;
