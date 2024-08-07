
import axios from "axios";


export const addTravelPlan = async (travelPlan) => {
    try{
        const response = await axios.post("http://localhost:8080/travelplans/add",travelPlan);
        return response.data;
      }
      catch(error){
        console.error("There was an error adding the travel plan !",error);
      }
    
};

export const getTravelPlans = async () => {
    try{
        const response = await axios.get("http://localhost:8080/travelplans/");
        return response.data;
      }
      catch(error){
        console.error('There was an error fetching the travel plans!', error);
    
      }
};

