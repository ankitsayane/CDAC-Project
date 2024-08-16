package com.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.Exception.EmailAlreadyExistsException;
import com.backend.Exception.UsernameAlreadyExistsException;
import com.backend.Model.SignUp;
import com.backend.Repository.SignUpRepository;

@Service
public class SignUpService {

	@Autowired
	private SignUpRepository signuprepo;

	public void saveUser(SignUp signup) {

		if (signuprepo.findByEmail(signup.getEmail()) != null) {
			throw new EmailAlreadyExistsException("Email Address already exists");
		}

		if (signuprepo.findByUsername(signup.getUsername()) != null) {
			throw new UsernameAlreadyExistsException("UserName  Already Taken");
		}

		signuprepo.save(signup);
	}

	public List<SignUp> getUser() {

		return signuprepo.findAll();
	}

	public SignUp findByUsernameAndPassword(String username, String password) {

		return signuprepo.findByUsernameAndPassword(username, password);

	}

}
