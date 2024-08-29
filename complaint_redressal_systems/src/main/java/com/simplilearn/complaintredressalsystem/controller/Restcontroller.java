package com.simplilearn.complaintredressalsystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.complaintredressalsystem.dto.Complaintsdto;
import com.simplilearn.complaintredressalsystem.entity.AllUsers;
import com.simplilearn.complaintredressalsystem.entity.CustomersComplaints;
import com.simplilearn.complaintredressalsystem.repository.AllusersInterf;
import com.simplilearn.complaintredressalsystem.repository.CusomersComplaints;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/simplilearn/complaintredressalsystem")
public class Restcontroller {
	
	@Autowired(required=true)
	AllusersInterf allusersrepo;
	
	@Autowired(required = true)
	CusomersComplaints custcomplaintsrepo;
	
	Complaintsdto complaintdto;
	
	// registration
	@PostMapping("/register")
	public AllUsers addAll(@RequestBody AllUsers alluser) {
		return allusersrepo.save(alluser);
	}
	
	      // Login
	@GetMapping("/login/{username}")
	public ResponseEntity <AllUsers> login(@PathVariable String username) {
	AllUsers user = allusersrepo.findByusername(username);
			return ResponseEntity.ok(user);
	}
	
	//get all users
	@GetMapping("/allusers")
	public List<AllUsers> all(){
		return (List<AllUsers>) allusersrepo.findAll();
	}
	
	// make complaints for customers
	@PostMapping("/makecompliants")
	public CustomersComplaints makecomplaint(@RequestBody CustomersComplaints custcomplaint) {
		return custcomplaintsrepo.save(custcomplaint);
	}
	
	//get complaint by username
//	@GetMapping("/complaints/{username}")
//	public ResponseEntity <CustomersComplaints> makecomplaint(@PathVariable String username){
//		CustomersComplaints complaints = custcomplaintsrepo.findByusername(username);
//		return ResponseEntity.ok(complaints);
//	}
	
	//get complaint by username second
		@GetMapping("/complaint/{username}")
		public ResponseEntity <List<CustomersComplaints>> usercomplaint(@PathVariable String username){
			 List<CustomersComplaints> usercomplaint = custcomplaintsrepo.findByusername(username);
			 return ResponseEntity.ok(usercomplaint);
		}
		
		//get complaint by complaintid
		@GetMapping("/complaintbyid/{complaintid}")
		public Optional<CustomersComplaints> usercomplaintbyid(@PathVariable Long complaintid){
			 return custcomplaintsrepo.findById(complaintid);
			
		}
		
		
		//get complaints for engineer
		@GetMapping("/engcomplaints/{complaintassign}")
		public ResponseEntity <List<CustomersComplaints>> engcomplaints(@PathVariable String complaintassign){
			List<CustomersComplaints> engcomplaints = custcomplaintsrepo.findBycomplaintassign(complaintassign);
			return ResponseEntity.ok(engcomplaints);
		}
  
	//get all complaints
	@GetMapping("/getallcomplaints")
	public List<CustomersComplaints> allcomplaints(){
		return (List<CustomersComplaints>) custcomplaintsrepo.findAll();
	}
	
	//get user by role
	@GetMapping("/getuserbyrole/{role}")
	public ResponseEntity <List<AllUsers>> finduserbyrole(@PathVariable String role){
		List<AllUsers> finduserbyrole = allusersrepo.findByrole(role);
		return ResponseEntity.ok(finduserbyrole);
	}
	
		//assign complaint to engineers
	@PostMapping("/assign/{complaintid}")
	public ResponseEntity<CustomersComplaints> assign(@PathVariable Long complaintid,@RequestBody CustomersComplaints complaints) {
		
		CustomersComplaints complaint =  custcomplaintsrepo.findById(complaintid).orElseThrow();
		
		complaint.setComplaintassign(complaints.getComplaintassign());
		
		CustomersComplaints assign = custcomplaintsrepo.save(complaint);
		return ResponseEntity.ok(assign);	
		
	}
	
	//submit status
	@PostMapping("/statuseng/{complaintid}")
	public ResponseEntity<CustomersComplaints> statuseng(@PathVariable Long complaintid,@RequestBody CustomersComplaints complaints) {
		
		CustomersComplaints complaint =  custcomplaintsrepo.findById(complaintid).orElseThrow();
		
		complaint.setComplaintstatus(complaints.getComplaintstatus());
		
		CustomersComplaints statuseng = custcomplaintsrepo.save(complaint);
		return ResponseEntity.ok(statuseng);	
		
	}
	
	//submit status by engineer
	@PostMapping("/submitstatus/{complaintid}")
	public ResponseEntity<CustomersComplaints> complaintstatus(@PathVariable Long complaintid, @RequestBody CustomersComplaints complaints){
		CustomersComplaints complaint = custcomplaintsrepo.findById(complaintid).orElseThrow();
		complaint.setComplaintstatus(complaints.getComplaintstatus());
		CustomersComplaints complaintstatus = custcomplaintsrepo.save(complaint);
		return ResponseEntity.ok(complaintstatus);
	}
	
	
//	// give feedback by customer
//	@PostMapping("/feedback/{complaintid}")
//	public ResponseEntity<CustomersComplaints> feedback(@PathVariable Long complaintid, @RequestBody CustomersComplaints complaints){
//		CustomersComplaints complaint = custcomplaintsrepo.findById(complaintid).orElseThrow();
//		complaint.setCustomerfeedback(complaintdto.getCustomerfeedback());
//		CustomersComplaints feedback = custcomplaintsrepo.save(complaint);
//		return ResponseEntity.ok(feedback);
//	}
	
	// give feedback by customer
	@PostMapping("/feedback/{complaintid}")
	public ResponseEntity<CustomersComplaints> feedback(@PathVariable Long complaintid, @RequestBody CustomersComplaints complaints){
		CustomersComplaints complaint = custcomplaintsrepo.findBycomplaintid(complaintid);
		
		complaint.setUsername(complaints.getUsername());
		complaint.setComplainttitle(complaints.getComplainttitle());
		complaint.setComplainttype(complaints.getComplainttype());
		complaint.setComplaintdescription(complaints.getComplaintdescription());
		complaint.setComplaintpriority(complaints.getComplaintpriority());
		complaint.setComplaintassign(complaints.getComplaintassign());
		complaint.setComplaintstatus(complaints.getComplaintstatus());
		complaint.setCustomerfeedback(complaints.getCustomerfeedback());
		CustomersComplaints feedback = custcomplaintsrepo.save(complaint);
		return ResponseEntity.ok(feedback);
	}
	

	
	
	
	
}
