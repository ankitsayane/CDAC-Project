package com.SignUp.Mongo.SignUpMongo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SignUp.Mongo.SignUpMongo.Model.SignUp;
import com.SignUp.Mongo.SignUpMongo.Repository.SignUpRepository;

@Service
public class SignUpService {
	
	@Autowired
	private SignUpRepository signuprepo;

	public void saveUser(SignUp signup) {
		signuprepo.save(signup);
	}

	public List<SignUp> getUser() {
		
		return signuprepo.findAll();
	}

    public SignUp findByUsernameAndPassword(String username, String password) {
        return signuprepo.findByUsernameAndPassword(username, password);
    }
	


}
