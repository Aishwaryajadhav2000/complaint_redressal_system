import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-cust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-cust.component.html',
  styleUrl: './emp-cust.component.css'
})
export class EmpCustComponent implements OnInit{

  allusers:any
constructor(
  public auth:AuthService
){}
  ngOnInit(): void {
    this.auth.allusers().subscribe((response:any)=>{
      console.log("response", response);
      this.allusers=response;
      console.log("allusers", this.allusers);
    })
  }
}
