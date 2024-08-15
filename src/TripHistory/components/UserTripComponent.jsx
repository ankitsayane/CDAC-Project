import React, { useEffect, useState } from "react";
import { GetPlacesDetails, PHOTO_URL } from "@/Service/GlobalAPI";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { deleteTravelDetailsById } from "@/Service/TravelPlanServices";
import { toast } from "sonner";

function UserTripComponent({ trip, onDelete }) {
  const [photoUrl, SetPhotoUrl] = useState();

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
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

  const handleDelete = async () => {
    try {
      await deleteTravelDetailsById(trip.id);
      toast.info("Trip Deleted Successfully");
      onDelete(trip.id); // Notify the parent component to remove this trip
    } catch (error) {
      console.error("Failed to delete trip:", error);
    }
  };

  if (!trip || !trip.travelplan) {
    return null;
  }

  return (
    <div
      id="main"
      className="relative rounded-lg shadow-md p-4 mb-6 w-full h-auto max-w-xs mx-auto flex flex-col min-h-[350px] overflow-hidden hover:scale-105 transition-all cursor-pointer hover:shadow-lg"
    >
      <div className="relative w-full h-48 overflow-hidden mb-4">
        <img
          src={photoUrl ? photoUrl : "/dummy.jpg"}
          alt="Trip"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-150 hover:z-10"
        />
      </div>
      <div className="flex-grow z-20">
        <h2 className="font-bold text-lg mb-2 truncate">
          {trip?.travelplan?.location}
        </h2>
        <h3 className="text-sm text-gray-600 mb-4 truncate">
          {trip?.travelplan?.duration} trip with {trip?.travelplan?.budget}{" "}
          budget
        </h3>
        <div className="flex gap-2">
          <Link to={"/trip-plans/" + trip.id}>
            <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900">
              View Trip
            </Button>
          </Link>

          <Button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserTripComponent;
