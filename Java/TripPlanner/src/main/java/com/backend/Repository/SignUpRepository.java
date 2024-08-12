package com.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.backend.Model.SignUp;

public interface SignUpRepository extends MongoRepository<SignUp,String> {
	
	public SignUp findByUsernameAndPassword(String username , String password);
	
	public SignUp findByUsername(String username);
	
	public SignUp findByEmail(String email);
}
