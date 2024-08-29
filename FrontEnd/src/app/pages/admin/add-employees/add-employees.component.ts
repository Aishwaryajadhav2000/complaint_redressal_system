import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-add-employees',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-employees.component.html',
  styleUrl: './add-employees.component.css'
})
export class AddEmployeesComponent implements OnInit {
  register!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public route: Router,
    public auth:AuthService
  ) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      role: new FormControl(''),
      fullname: new FormControl(''),
      contactno: new FormControl(''),
      useremailid: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  submit() {
    console.log("value", this.register.value);
    this.auth.register(this.register.value).subscribe((response:any) =>{
      console.log("response", response);
      this.route.navigate(['/adminhome']);
    })
   }

}
