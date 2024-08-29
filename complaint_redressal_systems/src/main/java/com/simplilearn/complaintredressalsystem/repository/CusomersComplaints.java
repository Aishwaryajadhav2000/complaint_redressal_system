package com.simplilearn.complaintredressalsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.complaintredressalsystem.entity.CustomersComplaints;

@Repository
public interface CusomersComplaints extends JpaRepository<CustomersComplaints , Long> {
	
	List<CustomersComplaints> findByusername(String username);
	
	CustomersComplaints findBycomplaintid(Long complaintid);
	
	List<CustomersComplaints> findBycomplaintassign(String complaintassign);
	
	

}
