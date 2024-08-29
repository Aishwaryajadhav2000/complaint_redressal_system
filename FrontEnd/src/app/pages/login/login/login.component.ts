import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RouterOutlet } from '@angular/router';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  login!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public route: Router,
    public auth: AuthService

  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('')
    })
  }

  submit() {
    console.log("click");

    if (this.login.value.role == "Admin") {
      if (this.login.value.username == "admin" && this.login.value.password == "admin123") {
        this.route.navigate(['/adminhome']);
      } else {
        alert("incorrect username or password");
      }
    } else {
      console.log("else");
      this.auth.login(this.login.value.username).subscribe((response: any) => {
        console.log("response", response);

        if(response == null){
          alert('incorrect details');
        }

        if (this.login.value.role == "Customer" && this.login.value.username == response['username'] && this.login.value.password == response['password']) {
          this.route.navigate(['/custdashboard']);
          localStorage.setItem("username" , this.login.value.username);
        } else if (this.login.value.role == "Manager" && this.login.value.username == response['username'] && this.login.value.password == response['password']) {
          this.route.navigate(['/managerhome']);
          localStorage.setItem("username" , this.login.value.username);
        } else if (this.login.value.role == "Engineer" && this.login.value.username == response['username'] && this.login.value.password == response['password']) {
          this.route.navigate(['/engdash']);
          localStorage.setItem("username" , this.login.value.username);
        } else {
          alert("incorrect username");
          console.log("incorrect username");
        }


      })


    }


    // if(this.login.value.role == 'Admin'){
    //   this.route.navigate(['/adminhome']);
    // }
    // else if(this.login.value.role == 'Customer'){
    //   this.route.navigate(['/custdashboard']);
    // }else if(this.login.value.role == 'Manager'){
    //   this.route.navigate(['/managerhome']);
    // }else if(this.login.value.role == 'Engineer'){
    //   this.route.navigate(['/engdash']);
    // }
    //  this.auth.login(this.login.value.username).subscribe((response:any)=>{
    //   console.log("response", response);
    //  })
  }

  signUp() {
    this.route.navigate(['/custregistration']);
  }


}
