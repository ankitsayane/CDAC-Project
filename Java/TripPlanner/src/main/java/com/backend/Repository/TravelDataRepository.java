package com.backend.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.backend.Model.TravelData;

public interface TravelDataRepository extends MongoRepository<TravelData, String> {
	List<TravelData> findByEmail(String email);
}
