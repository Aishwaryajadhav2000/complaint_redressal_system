import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-complaints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-complaints.component.html',
  styleUrl: './all-complaints.component.css'
})
export class AllComplaintsComponent implements OnInit{
complaints:any;
  constructor(
    public auth:AuthService
  ){}

  ngOnInit(): void {
    this.auth.allcomplaints().subscribe((response:any)=>{
      console.log("response", response);
      this.complaints=response;
      console.log("complaints", this.complaints)
    })
  }

}
