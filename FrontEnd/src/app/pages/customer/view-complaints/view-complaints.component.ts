import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Editcomplaintfeedback } from '../../class/editcomplaintfeedback';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-complaints',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './view-complaints.component.html',
  styleUrl: './view-complaints.component.css'
})
export class ViewComplaintsComponent implements OnInit {

  username = localStorage.getItem("username");
  complaint: any
  feedbackform: FormGroup
  complaintid: number;

  complaintfeed: Editcomplaintfeedback = {
    username: '',
    complainttitle: '',
    complainttype: '',
    complaintdescription: '',
    complaintpriority: '',
    complaintassign: ' ',
    complaintstatus: '',
    customerfeedback: ''
  }

  constructor(
    public auth: AuthService,
    public fb: FormBuilder,
    public router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.complaintid = this.router.snapshot.params['complaintid'];
    console.log("complaintid", this.complaintid);

    this.auth.getcomplaintbyid(this.complaintid).subscribe((response: any) => {
      console.log("responses", response);
      this.complaint = response;
      console.log("complaint", this.complaint);
      this.complaintfeed = response
      console.log("complaintfeed", this.complaintfeed);
    })

    this.feedbackform = this.fb.group({
      customer_feedback: new FormControl('')
    })

    //  this.feedback= document.getElementById("feedback")
  }

  submit() {
    console.log("complaintfeed.customerfeedback", this.complaintfeed.customerfeedback)
    console.log(this.complaintid, this.complaintfeed);
    this.auth.feedback(this.complaintid, this.complaintfeed).subscribe((response: any) => {
      console.log("res", response);
    })
  }

}
