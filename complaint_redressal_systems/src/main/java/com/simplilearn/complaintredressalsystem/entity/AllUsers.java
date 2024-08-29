package com.simplilearn.complaintredressalsystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="allusers")
public class AllUsers {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long userid;
	
	private String role;
	private String fullname;
	private Long contactno;
	private String useremailid;
	private String address;
	private String username;
	private String password;
	
	
	public AllUsers() {
		super();
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public Long getContactno() {
		return contactno;
	}
	public void setContactno(Long contactno) {
		this.contactno = contactno;
	}
	public String getUseremailid() {
		return useremailid;
	}
	public void setUseremailid(String useremailid) {
		this.useremailid = useremailid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public AllUsers(Long userid, String role, String fullname, Long contactno, String useremailid, String address,
			String username, String password) {
		super();
		this.userid = userid;
		this.role = role;
		this.fullname = fullname;
		this.contactno = contactno;
		this.useremailid = useremailid;
		this.address = address;
		this.username = username;
		this.password = password;
	}
	@Override
	public String toString() {
		return "AllUsers [userid=" + userid + ", role=" + role + ", fullname=" + fullname + ", contactno=" + contactno
				+ ", useremailid=" + useremailid + ", address=" + address + ", username=" + username + ", password="
				+ password + "]";
	}
	
	
	
	
	
}
