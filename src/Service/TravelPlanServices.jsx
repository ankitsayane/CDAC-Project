import axios from "axios";

export const addTravelPlan = async (travelPlan) => {
  try {
    const response = await axios.post("http://localhost:8080/add", travelPlan);
    return response.data;
  } catch (error) {
    console.error("There was an error adding the travel plan !", error);
  }
};

export const getTravelPlans = async () => {
  try {
    const response = await axios.get("http://localhost:8080/travelplans/");
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the travel plans!", error);
  }
};

export const getTripDetailById = async (tripid) => {
  try {
    const response = await axios.get("http://localhost:8080/get/" + tripid);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the travel plans!", error);
  }
};

export const getTravelPlansByEmailId  = async (email) => {
  try{
    const emailresponse = await axios.get("http://localhost:8080/email/" + email);
    return emailresponse.data;
  }

  catch(error){
    console.log("There was an error fetching the travel Plans!" , error);
  }
};

export const deleteTravelDetailsById = async (tripid) => {
  try {
    const idresponse = await axios.delete("http://localhost:8080/deletetrip/" + tripid);
    return idresponse.data;
  }
  catch(error){
    console.log("There was an error deleting the travel Plans!" , error);
  }
}


