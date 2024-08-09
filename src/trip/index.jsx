import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AI_PROMPT, BudgetOptions, TravlersList } from "@/constants/options";
import { chatSession } from "@/Service/AImodel";
import { addTravelPlan, getTravelPlans } from "@/Service/TravelPlanServices";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function CreateTrip() {
  const navigate = useNavigate();
  const [place, setPlace] = useState();
  const [travelData, setTravelData] = useState({});
  const [otherTraveler, setOtherTraveler] = useState("");

  const handlePlanChange = (name, value) => {
    setTravelData({
      ...travelData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(travelData);
  }, [travelData]);

  const OnCreateTrip = async () => {
    console.log("Button clicked");

    if (
      !travelData.place ||
      !travelData.days ||
      !travelData.budget ||
      !travelData.travlers
    ) {
      toast("Please fill all details properly");
      console.log("Form validation failed");
      return;
    }
    console.log(travelData);
    const FINAL_PROMPT = AI_PROMPT.replace("{place}", travelData?.place)
      .replace("{days}", travelData?.days)
      .replace("{travlers}", travelData?.travlers)
      .replace("{budget}", travelData?.budget)
      .replace("{totaldays}", travelData?.days);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    const responseText = result?.response?.text();
    const parsedResponse = JSON.parse(responseText);

    const user = JSON.parse(sessionStorage.getItem("user"));

    const finalResponse = {
      email: user.email,
      travelplan: parsedResponse,
    };

    const insertedTravelPlan = await addTravelPlan(finalResponse);
    if (insertedTravelPlan) {
      // navigate("/trip-plans");
      console.log(insertedTravelPlan);
    }
  };

  const handleOtherPlanChange = (e) => {
    setOtherTraveler(e.target.value);
    setTravelData({
      ...travelData,
      travlers: e.target.value,
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-4xl text-center ">
        Please share your travel preferences with us🧳🗺️
      </h2>
      <p className="mt-3 text-gray-500 text-xl text-center">
        Simply provide some basic details, and our trip planner will create a
        personalized itinerary tailored to your preferences.
      </p>

      <div className="mt-20 space-y-10">
        <div>
          <h2 className="text-xl font-medium">
            Which destination would you like to choose?
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: (x) => {
                  setPlace(x);
                  handlePlanChange("place", x.label);
                },
              }}
            />
          </h2>
        </div>

        <div>
          <h2 className="text-xl font-medium">
            How many days do you plan to spend on your trip?
          </h2>
          <Input
            placeholder={"Ex-10"}
            type="number"
            className="mt-2 w-full"
            onChange={(e) => handlePlanChange("days", e.target.value)}
          />
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
              onClick={() => handlePlanChange("budget", item.title)}
              className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                travelData?.budget === item.title && "shadow-lg border-black"
              }`}
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
              onClick={() => handlePlanChange("travlers", item.people)}
              className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                travelData?.travlers === item.people && "shadow-lg border-black"
              }`}
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
        {travelData?.travlers === "Any Number" && (
          <div className="mt-5">
            <Input
              placeholder="Please specify the number of travel companions"
              value={otherTraveler}
              onChange={handleOtherPlanChange}
            />
          </div>
        )}
      </div>

      <div className="my-10 flex justify-end">
        <Button onClick={OnCreateTrip}>Plan Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
