package com.SignUp.Mongo.SignUpMongo.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "SignUpDetails")
public class SignUp {
	private String name;
	
	@Id
	private String email;
    
	@Indexed(unique = true)
    private String username;
	
	private String phone;
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