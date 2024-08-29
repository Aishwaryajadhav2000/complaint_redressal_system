import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormBuilder, FormsModule } from '@angular/forms';
import { CustHeadingComponent } from '../cust-heading/cust-heading.component';
import { Complaints } from '../../class/complaints';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cust-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CustHeadingComponent, FormsModule, CommonModule],
  templateUrl: './cust-dashboard.component.html',
  styleUrl: './cust-dashboard.component.css'
})
export class CustDashboardComponent implements OnInit {
  usernames = localStorage.getItem('username');

  complaint: Complaints = {
    username: this.usernames,
    complainttitle: '',
    complainttype: '',
    complaintdescription: '',
    complaintpriority: ''
  }
status : any;
  complaints:any

  // complaintform: FormGroup;
  username = localStorage.getItem("username");
  constructor(
    public auth: AuthService,
    public route:Router
  ) { }

  ngOnInit(): void {

    console.log("username", this.usernames);

    this.auth.getcomplaint(this.username).subscribe((response: any) => {
      console.log("response", response);
      this.complaints = response;
      this.status = this.complaints['complaintstatus'];
     
    })

  }

  submit() {
    console.log("data", this.complaint);

    this.auth.makecomplaints(this.complaint).subscribe((response: any) => {
      console.log("response", response);
    })
    window.location.reload();
  }

  submitfeedback(complaintid:number){
    this.route.navigate(['/viewcomplaintcust', complaintid]);
  }

}
