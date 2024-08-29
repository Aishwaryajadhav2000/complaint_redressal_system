package com.simplilearn.complaintredressalsystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="customers_complaints")
public class CustomersComplaints {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long complaintid;
	
	public String username;
	public String complainttitle;
	public String complainttype;
	public String complaintdescription;
	public String complaintpriority;
	public String complaintassign;
	public String complaintstatus;
	public String customerfeedback;
	
	
	public CustomersComplaints() {
		super();
	}


	public Long getComplaintid() {
		return complaintid;
	}


	public void setComplaintid(Long complaintid) {
		this.complaintid = complaintid;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getComplainttitle() {
		return complainttitle;
	}


	public void setComplainttitle(String complainttitle) {
		this.complainttitle = complainttitle;
	}


	public String getComplainttype() {
		return complainttype;
	}


	public void setComplainttype(String complainttype) {
		this.complainttype = complainttype;
	}


	public String getComplaintdescription() {
		return complaintdescription;
	}


	public void setComplaintdescription(String complaintdescription) {
		this.complaintdescription = complaintdescription;
	}


	public String getComplaintpriority() {
		return complaintpriority;
	}


	public void setComplaintpriority(String complaintpriority) {
		this.complaintpriority = complaintpriority;
	}


	public String getComplaintassign() {
		return complaintassign;
	}


	public void setComplaintassign(String complaintassign) {
		this.complaintassign = complaintassign;
	}


	public String getComplaintstatus() {
		return complaintstatus;
	}


	public void setComplaintstatus(String complaintstatus) {
		this.complaintstatus = complaintstatus;
	}


	public String getCustomerfeedback() {
		return customerfeedback;
	}


	public void setCustomerfeedback(String customerfeedback) {
		this.customerfeedback = customerfeedback;
	}


	public CustomersComplaints(String username, String complainttitle, String complainttype,
			String complaintdescription, String complaintpriority, String complaintassign, String complaintstatus,
			String customerfeedback) {
		super();
		this.username = username;
		this.complainttitle = complainttitle;
		this.complainttype = complainttype;
		this.complaintdescription = complaintdescription;
		this.complaintpriority = complaintpriority;
		this.complaintassign = complaintassign;
		this.complaintstatus = complaintstatus;
		this.customerfeedback = customerfeedback;
	}


	@Override
	public String toString() {
		return "CustomersComplaints [complaintid=" + complaintid + ", username=" + username + ", complainttitle="
				+ complainttitle + ", complainttype=" + complainttype + ", complaintdescription=" + complaintdescription
				+ ", complaintpriority=" + complaintpriority + ", complaintassign=" + complaintassign
				+ ", complaintstatus=" + complaintstatus + ", customerfeedback=" + customerfeedback + "]";
	}


	


}
