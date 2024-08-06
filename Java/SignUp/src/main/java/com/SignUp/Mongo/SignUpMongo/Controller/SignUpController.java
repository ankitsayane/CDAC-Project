package com.SignUp.Mongo.SignUpMongo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SignUp.Mongo.SignUpMongo.Dto.LoginRequest;
import com.SignUp.Mongo.SignUpMongo.Model.SignUp;
import com.SignUp.Mongo.SignUpMongo.Service.SignUpService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/registration")
public class SignUpController {

	@Autowired
	private SignUpService signupservice;

	@PostMapping("/")
	public ResponseEntity<?> registerNewUser(@RequestBody SignUp signup) {
//		signupservice.saveUser(signup);
//		return ResponseEntity.ok(200);
		try {
			signupservice.saveUser(signup);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("Error saving user");
		}
	}

	@GetMapping("/get")
	public ResponseEntity<?> getRegisteredUser() {
		return ResponseEntity.ok(signupservice.getUser());
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
		try {
			List<SignUp> user = signupservice.findByUsernameAndPassword(loginRequest.getUsername(),
					loginRequest.getPassword());
			if (!user.isEmpty()) {
				return ResponseEntity.ok(user.get(0));
			} else {
				return ResponseEntity.status(401).body("Invalid credentials");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("An error Ocuured");
		}
	}

}
