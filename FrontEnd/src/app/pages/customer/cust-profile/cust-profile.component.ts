import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cust-profile',
  standalone: true,
  imports: [],
  templateUrl: './cust-profile.component.html',
  styleUrl: './cust-profile.component.css'
})
export class CustProfileComponent implements OnInit {
  username = localStorage.getItem('username');
  user: any
  constructor(
    public auth: AuthService,
    public route : Router
  ) { }

  ngOnInit(): void {
    console.log("username", this.username);
    this.auth.login(this.username).subscribe((response: any) => {
      console.log("response", response);
      this.user = response

    })
  }

  submit(){
this.route.navigate(['/custdashboard']);
  }

}
