import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-eng-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eng-dashboard.component.html',
  styleUrl: './eng-dashboard.component.css'
})
export class EngDashboardComponent implements OnInit {
  statusform: FormGroup
  username = localStorage.getItem("username");
  complaint: any
  complaintid: number
  constructor(
    public auth: AuthService,
    public fb: FormBuilder,
    public router:ActivatedRoute
  ) { }

  ngOnInit(): void {

    
    this.complaintid = this.router.snapshot.params['complaintid'];
    console.log("complaintid", this.complaintid);

    this.auth.getcomplainteng(this.username).subscribe((response: any) => {
      console.log("res", response);
      this.complaint = response;
    })

    this.statusform = this.fb.group({
      selectstatus: new FormControl('')
    })

  }
  submitstatus(complaintid) {
    console.log("id", complaintid);
    console.log("status", this.statusform.value)
    this.auth.complaintstatus(complaintid, this.statusform.value).subscribe((response: any) => {
      console.log("res", response);
    })
  }
}
