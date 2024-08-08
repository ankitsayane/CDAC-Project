package com.SignUp.Mongo.SignUpMongo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.SignUp.Mongo.SignUpMongo.Model.SignUp;

public interface SignUpRepository extends MongoRepository<SignUp,String> {
	public SignUp findByUsernameAndPassword(String username , String password);
}
