package com.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Document(collection = "SignUpDetails")
public class SignUp {

	@NotBlank(message = "Name cannnot be blank")
	@Size(min = 3, message = "Name should have at least 2 characters")
	private String name;

	@Id
	@NotBlank(message = "Email is Required")
	@Email(message = "Email should be valid")
	private String email;

	@Indexed(unique = true)
	@NotBlank(message = "User name is required")
	@Size(min = 3, message = "Username should have at least 3 characters")
	private String username;

	@NotBlank(message = "Phone cannot be null")
	@Pattern(regexp = "^[0-9]{10}$", message = "Phone number should be 10 digits")
	private String phone;

	@NotBlank(message = "Password is required")
	@Size(min = 6, message = "Password should be at least 6 character long")
	private String password;

	public SignUp() {

	}

	public SignUp(String name, String email, String username, String phone, String password) {
		super();
		this.name = name;
		this.email = email;
		this.username = username;
		this.phone = phone;
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}