package com.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.Dto.LoginRequest;
import com.backend.Model.SignUp;
import com.backend.Service.SignUpService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/registration")
public class SignUpController {

	@Autowired
	private SignUpService signupservice;

	@PostMapping("/")
	public ResponseEntity<?> registerNewUser(@RequestBody SignUp signup) {
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
			SignUp user = signupservice.findByUsernameAndPassword(loginRequest.getUsername(),
					loginRequest.getPassword());
			if (user != null) {
				return ResponseEntity.ok(user);
			} else {
				return ResponseEntity.status(401).body("Invalid credentials");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("An error Ocuured");
		}
	}

}
