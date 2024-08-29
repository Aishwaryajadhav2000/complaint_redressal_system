package com.simplilearn.complaintredressalsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.complaintredressalsystem.entity.AllUsers;

@Repository
public interface AllusersInterf extends JpaRepository<AllUsers, Long>{
	
	AllUsers findByusername(String username);

	List<AllUsers> findByrole(String role);


}
