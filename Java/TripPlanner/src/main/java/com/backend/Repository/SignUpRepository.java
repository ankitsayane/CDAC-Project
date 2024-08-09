package com.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.backend.Model.SignUp;

public interface SignUpRepository extends MongoRepository<SignUp,String> {
	public SignUp findByUsernameAndPassword(String username , String password);
}
