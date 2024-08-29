package com.simplilearn.complaintredressalsystem.dto;

public class Complaintsdto {
	
    public Long complaintid;
	public String username;
	public String complainttitle;
	public String complainttype;
	public String complaintdescription;
	public String complaintpriority;
	public String complaintassign;
	public String customerfeedback;
	public String complaintstatus;
	
	public Complaintsdto() {
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

	public String getCustomerfeedback() {
		return customerfeedback;
	}

	public void setCustomerfeedback(String customerfeedback) {
		this.customerfeedback = customerfeedback;
	}

	public String getComplaintstatus() {
		return complaintstatus;
	}

	public void setComplaintstatus(String complaintstatus) {
		this.complaintstatus = complaintstatus;
	}

	

	public Complaintsdto(String username, String complainttitle, String complainttype, String complaintdescription,
			String complaintpriority, String complaintassign, String customerfeedback, String complaintstatus) {
		super();
		this.username = username;
		this.complainttitle = complainttitle;
		this.complainttype = complainttype;
		this.complaintdescription = complaintdescription;
		this.complaintpriority = complaintpriority;
		this.complaintassign = complaintassign;
		this.customerfeedback = customerfeedback;
		this.complaintstatus = complaintstatus;
	}

	@Override
	public String toString() {
		return "Complaintsdto [complaintid=" + complaintid + ", username=" + username + ", complainttitle="
				+ complainttitle + ", complainttype=" + complainttype + ", complaintdescription=" + complaintdescription
				+ ", complaintpriority=" + complaintpriority + ", complaintassign=" + complaintassign
				+ ", customerfeedback=" + customerfeedback + ", complaintstatus=" + complaintstatus + "]";
	}
		
}
