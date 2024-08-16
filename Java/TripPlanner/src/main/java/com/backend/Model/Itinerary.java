package com.backend.Model;

import java.util.List;

public class Itinerary {
	private String day;
	private List<Plan> plan;

	public Itinerary(String day, List<Plan> plan) {
		super();
		this.day = day;
		this.plan = plan;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public List<Plan> getPlan() {
		return plan;
	}

	public void setPlan(List<Plan> plan) {
		this.plan = plan;
	}

}
