package com.TravelPlanDetails.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.TravelPlanDetails.Model.TravelPlan;


public interface TravelPlanRepository extends MongoRepository<TravelPlan , String > {

}
