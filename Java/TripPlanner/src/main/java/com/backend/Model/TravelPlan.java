package com.backend.Model;

import java.util.List;

public class TravelPlan {
	
	private String location;
	private String duration;
	private String travelers;
	private String budget;
	
	
	private List<Hotel> hotels;
	private List<Itinerary> itinerary;
	
	public TravelPlan()
	{
		
	}
	
	public TravelPlan(String location, String duration, String travelers, String budget, 
			List<Hotel> hotels, List<Itinerary> itinerary) {
		super();
		this.location = location;
		this.duration = duration;
		this.travelers = travelers;
		this.budget = budget;
		this.hotels = hotels;
		this.itinerary = itinerary;
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


