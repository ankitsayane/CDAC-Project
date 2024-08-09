package com.backend.Model;

public class Plan {
	private String placeName;
	private String placeDetails;
	private String placeImageUrl;
	private String geoCoordinates;
	private String ticketPricing;
	private String rating;
	private String timeTravel;
	private String bestTimeToVisit;
	
	public Plan() {
		
	}

	public Plan(String placeName, String placeDetails, String placeImageUrl, String geoCoordinates,
			String ticketPricing, String rating, String timeTravel, String bestTimeToVisit) {
		super();
		this.placeName = placeName;
		this.placeDetails = placeDetails;
		this.placeImageUrl = placeImageUrl;
		this.geoCoordinates = geoCoordinates;
		this.ticketPricing = ticketPricing;
		this.rating = rating;
		this.timeTravel = timeTravel;
		this.bestTimeToVisit = bestTimeToVisit;
	}

	public String getPlaceName() {
		return placeName;
	}

	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}

	public String getPlaceDetails() {
		return placeDetails;
	}

	public void setPlaceDetails(String placeDetails) {
		this.placeDetails = placeDetails;
	}

	public String getPlaceImageUrl() {
		return placeImageUrl;
	}

	public void setPlaceImageUrl(String placeImageUrl) {
		this.placeImageUrl = placeImageUrl;
	}

	public String getGeoCoordinates() {
		return geoCoordinates;
	}

	public void setGeoCoordinates(String geoCoordinates) {
		this.geoCoordinates = geoCoordinates;
	}

	public String getTicketPricing() {
		return ticketPricing;
	}

	public void setTicketPricing(String ticketPricing) {
		this.ticketPricing = ticketPricing;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getTimeTravel() {
		return timeTravel;
	}

	public void setTimeTravel(String timeTravel) {
		this.timeTravel = timeTravel;
	}

	public String getBestTimeToVisit() {
		return bestTimeToVisit;
	}

	public void setBestTimeToVisit(String bestTimeToVisit) {
		this.bestTimeToVisit = bestTimeToVisit;
	}
	
	
	
}