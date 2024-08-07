package com.TravelPlanDetails.Model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "travelPlans")
public class TravelPlan {
	
	@Id
	private String id;
	private String location;
	private String duration;
	private String travelers;
	private String budget;
	//private String currency;
	
	private List<Hotel> hotels;
	private List<Itinerary> itinerary;
	
	public TravelPlan()
	{
		
	}
	
	public TravelPlan(String id, String location, String duration, String travelers, String budget, /*String currency,*/
			List<Hotel> hotels, List<Itinerary> itinerary) {
		super();
		this.id = id;
		this.location = location;
		this.duration = duration;
		this.travelers = travelers;
		this.budget = budget;
		//this.currency = currency;
		this.hotels = hotels;
		this.itinerary = itinerary;
	}
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getTravelers() {
		return travelers;
	}

	public void setTravelers(String travelers) {
		this.travelers = travelers;
	}

	public String getBudget() {
		return budget;
	}

	public void setBudget(String budget) {
		this.budget = budget;
	}

//	public String getCurrency() {
//		return currency;
//	}
//
//	public void setCurrency(String currency) {
//		this.currency = currency;
//	}

	public List<Hotel> getHotels() {
		return hotels;
	}

	public void setHotels(List<Hotel> hotels) {
		this.hotels = hotels;
	}

	public List<Itinerary> getItinerary() {
		return itinerary;
	}

	public void setItinerary(List<Itinerary> itinerary) {
		this.itinerary = itinerary;
	}
	
	
	
	
	
	
}


