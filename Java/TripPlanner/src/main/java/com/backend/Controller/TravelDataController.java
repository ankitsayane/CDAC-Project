package com.backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Model.TravelData;
import com.backend.Service.TravelDataService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/")
public class TravelDataController {

	@Autowired
	private TravelDataService travelService;
	
	@PostMapping("/add")
	public String AddTravelData(@RequestBody TravelData traveldata) {
		return travelService.saveTrip(traveldata);
	}
	
	@GetMapping("/get/{id}")
	public Optional<TravelData> getTravelData(@PathVariable String id) {
		return travelService.getDetails(id);
	}
	
	@GetMapping("/email/{email}")
	public List<TravelData> getByEmail(@PathVariable String email) {
	    return travelService.getByEmailId(email);
	}
	
	
	@DeleteMapping("/deletetrip/{id}")
	public String deleteById(@PathVariable String id) {
		boolean isDeleted = travelService.deleteTrip(id);
		if (isDeleted) {
			return "Trip with ID: " + id + " has been deleted successfully.";
		} else {
			return "Trip with ID: " + id + " not found.";
		}
	}
	
}
