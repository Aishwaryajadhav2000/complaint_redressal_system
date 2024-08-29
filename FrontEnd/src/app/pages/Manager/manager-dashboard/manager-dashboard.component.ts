import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, FormGroupName } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent implements OnInit {
  engineerlist: any;
  eng: any;
  complaints: any;
  assignform: FormGroup;
  usernames = localStorage.getItem('username');
  constructor(
    public auth: AuthService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.auth.allcomplaints().subscribe((response: any) => {
      console.log("res", response);
      this.complaints = response;
    })

    //get engineers
    this.auth.getuserbyrole("Engineer").subscribe((response: any) => {
      console.log("res eng", response);
      // this.engineerlist = response.role[0][1];
      this.engineerlist = response;

      console.log('engineerlist', this.engineerlist);
    })

    this.assignform = this.fb.group({
      complaintassign: new FormControl('')
    })

  }

  assign(complaintid) {
    console.log("eng", this.assignform.value);
    this.auth.assigncomplaint(complaintid, this.assignform.value).subscribe((response: any) => {
      console.log("response", response);
    })
  }

}
