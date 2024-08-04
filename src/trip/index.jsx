import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BudgetOptions, TravlersList } from "@/constants/options";
import React from "react";

function CreateTrip() {
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl text-center">
        Please share your travel preferences with us.
      </h2>
      <p className="mt-3 text-gray-500 text-xl text-center">
        Simply provide some basic details, and our trip planner will create a
        personalized itinerary tailored to your preferences.
      </p>

      <div className="mt-20 space-y-10">
        <div>
          <h2 className="text-xl font-medium">
            Which destination would you like to choose?
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-medium">
            How many days do you plan to spend on your trip?
          </h2>
          <Input placeholder={"Ex-3"} type="number" className="mt-2 w-full" />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-medium">
          What is your budget for the trip?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {BudgetOptions.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg cursor-pointer hover:shadow-lg"
            >
              <h2 className="text-4xl text-center">{item.icon}</h2>
              <h2 className="font-bold text-lg text-center mt-2">
                {item.title}
              </h2>
              <h2 className="text-sm text-gray-500 text-center mt-1">
                {item.desc}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-medium">
          Who will be your travel companions on your next adventure?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {TravlersList.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg cursor-pointer hover:shadow-lg"
            >
              <h2 className="text-4xl text-center">{item.icon}</h2>
              <h2 className="font-bold text-lg text-center mt-2">
                {item.title}
              </h2>
              <h2 className="text-sm text-gray-500 text-center mt-1">
                {item.desc}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 flex justify-end">
        <Button>Plan Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
