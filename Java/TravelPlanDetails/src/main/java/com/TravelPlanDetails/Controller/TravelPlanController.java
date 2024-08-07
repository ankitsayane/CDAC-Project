package com.TravelPlanDetails.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TravelPlanDetails.Model.TravelPlan;
import com.TravelPlanDetails.Service.TravelPlanService;

@RestController
@RequestMapping("/travelplans")
@CrossOrigin(origins = "http://localhost:5173")
public class TravelPlanController {
	
	@Autowired
	private TravelPlanService travelplanservice;
	
	
	@PostMapping("/add")
	public TravelPlan AddTravelDetails(@RequestBody TravelPlan travelplans){
		return travelplanservice.createTravelPlan(travelplans);
	}
	
	@GetMapping("/")
	public List<TravelPlan> getTravelPlansDetails(){
		return travelplanservice.showdetails();
	}
	
}
