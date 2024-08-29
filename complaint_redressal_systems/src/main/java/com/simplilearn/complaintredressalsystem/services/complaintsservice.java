package com.simplilearn.complaintredressalsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.complaintredressalsystem.repository.CusomersComplaints;

@Service
public class complaintsservice implements complaintsserviceimpl{

	@Autowired
	private CusomersComplaints custcomplaints;
}
