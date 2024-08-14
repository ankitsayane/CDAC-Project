package com.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.Model.TravelData;
import com.backend.Repository.TravelDataRepository;

@Service
public class TravelDataService {
	
	@Autowired
	private TravelDataRepository travelRepo;

	public String saveTrip(TravelData traveldata) {
		TravelData td = travelRepo.save(traveldata);
		return td.getId();
	}

	public Optional<TravelData> getDetails(String id) {
		return travelRepo.findById(id);
	}

	public List<TravelData> getByEmailId(String email) {
        return travelRepo.findByEmail(email);
    }
	
	
	public boolean deleteTrip(String id) {
		if (travelRepo.existsById(id)) {
			travelRepo.deleteById(id);
			return true;
		} else {
			return false;
		}
	}
}
