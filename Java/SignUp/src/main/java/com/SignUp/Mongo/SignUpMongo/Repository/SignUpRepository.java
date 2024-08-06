package com.SignUp.Mongo.SignUpMongo.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.SignUp.Mongo.SignUpMongo.Model.SignUp;

public interface SignUpRepository extends MongoRepository<SignUp,String> {
	
//	public SignUp findByUsername(String Username);
	public List<SignUp> findByUsernameAndPassword(String username , String password);
}
