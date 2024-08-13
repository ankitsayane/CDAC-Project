import { Button } from "@/components/ui/button";
import { GetPlacesDetails, PHOTO_URL } from "@/Service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  const [photoUrl, SetPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.travelplan?.location,
    };
    const result = await GetPlacesDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[2].name
      );
      SetPhotoUrl(PhotoUrl);
    });
  };

  if (!trip || !trip.travelplan) {
    return <div>Loading or no travel plan data available...</div>;
  }

  return (
    <div>
      <img
        src={photoUrl ? photoUrl : "/plan.jpeg"}
        className="h-[320px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{trip?.travelplan?.location}</h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅 {trip?.travelplan?.duration}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              💵 {trip?.travelplan?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🥂 {trip?.travelplan?.travelers} Travlers
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
