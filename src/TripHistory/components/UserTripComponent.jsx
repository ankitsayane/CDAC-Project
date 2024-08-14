import React, { useEffect, useState } from 'react'
import { GetPlacesDetails, PHOTO_URL } from '@/Service/GlobalAPI';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { deleteTravelDetailsById } from '@/Service/TravelPlanServices';
import { toast } from "sonner";



function UserTripComponent({ trip }) {

  const [photoUrl, SetPhotoUrl] = useState();
  const [isDeleted, setIsDeleted] = useState(false);

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

  const handleDelete = async () => {

    try {
      await deleteTravelDetailsById(trip.id);
      setIsDeleted(true);
      toast.info("Trip Deleted Successfully");
      window.location.reload();

    }
    catch (error) {
      console.log("failed to delete trip:", error);
    }


  }


  if (!trip || !trip.travelplan) {
    return null;

  }

  return (
    <div id="main" className="relative bg-gray-100 rounded-lg shadow-lg p-4 mb-6 w-full h-auto max-w-xs mx-auto flex flex-col min-h-[350px] overflow-hidden hover:scale-105 transition-all cursor-pointer">
      <div className="relative w-full h-48 overflow-hidden mb-4">
        <img
          src={
            photoUrl
              ? photoUrl
              : "https://plus.unsplash.com/premium_photo-1723533374165-124864151ed2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Trip"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-150 hover:z-10"
        />
      </div>
      <div className="flex-grow z-20">
        <h2 className="font-bold text-lg mb-2 truncate">{trip?.travelplan?.location}</h2>
        <h3 className="text-sm text-gray-600 mb-4 truncate">
          {trip?.travelplan?.duration} trip with {trip?.travelplan?.budget}
        </h3>
        <div className="flex gap-2">
          <Link to={'/trip-plans/' + trip.id}>
            <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900">
              View Trip
            </Button>
          </Link >

          {/* <Link to={'/deletetrip/' + trip.id} > */}
          <Button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Delete
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>

  )
}

export default UserTripComponent;