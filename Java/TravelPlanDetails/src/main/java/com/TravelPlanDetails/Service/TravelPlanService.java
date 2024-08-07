package com.TravelPlanDetails.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TravelPlanDetails.Model.TravelPlan;
import com.TravelPlanDetails.Repository.TravelPlanRepository;

@Service
public class TravelPlanService {
	
	@Autowired
	private TravelPlanRepository travelplanrepo;
	
	public TravelPlan createTravelPlan(TravelPlan travelplans) {
		
		return  travelplanrepo.save(travelplans);
	}

	public List<TravelPlan> showdetails() {
		return travelplanrepo.findAll();
	}
	
}
