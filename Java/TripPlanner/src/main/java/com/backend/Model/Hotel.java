package com.backend.Model;

public class Hotel {
	
	private String hotelName;
	private String hotelAddress;
	private String price;
	private String hotelImageUrl;
	private String geoCoordinates;
	private String rating;
	private String description;
	private String hotelBookingUrl;
	
	public Hotel() {
		
	}

	public Hotel(String hotelName, String hotelAddress, String price, String hotelImageUrl, String geoCoordinates,
			String rating, String description, String hotelBookingUrl) {
		super();
		this.hotelName = hotelName;
		this.hotelAddress = hotelAddress;
		this.price = price;
		this.hotelImageUrl = hotelImageUrl;
		this.geoCoordinates = geoCoordinates;
		this.rating = rating;
		this.description = description;
		this.hotelBookingUrl = hotelBookingUrl;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getHotelAddress() {
		return hotelAddress;
	}

	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getHotelImageUrl() {
		return hotelImageUrl;
	}

	public void setHotelImageUrl(String hotelImageUrl) {
		this.hotelImageUrl = hotelImageUrl;
	}

	public String getGeoCoordinates() {
		return geoCoordinates;
	}

	public void setGeoCoordinates(String geoCoordinates) {
		this.geoCoordinates = geoCoordinates;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getHotelBookingUrl() {
		return hotelBookingUrl;
	}

	public void setHotelBookingUrl(String hotelBookingUrl) {
		this.hotelBookingUrl = hotelBookingUrl;
	}
	
	
}
	
	