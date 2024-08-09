package com.backend.Model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


public class TravelData {
	@Id
	private String id;
	private String email;
	private TravelPlan travelplan;
	
	
	
	public TravelData() {
		
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public TravelPlan getTravelplan() {
		return travelplan;
	}
	public void setTravelplan(TravelPlan travelplan) {
		this.travelplan = travelplan;
	}
	
	
}
