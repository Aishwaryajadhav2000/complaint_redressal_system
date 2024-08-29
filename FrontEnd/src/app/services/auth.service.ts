import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public baseURL = "http://localhost:8080/simplilearn/complaintredressalsystem";

  constructor(
    public http: HttpClient
  ) { }

 // registration for all
register(data: any){
return this.http.post(this.baseURL+ "/register" , data);
}

//get all
allusers(){
  return this.http.get(this.baseURL + "/allusers");
}
//login
login(username:any){
  return this.http.get(this.baseURL + "/login" + "/" + username)
}

//make complaints
makecomplaints(data:any){
  return this.http.post(this.baseURL + "/makecompliants" , data);
}

//get all complaints 
allcomplaints(){
  return this.http.get(this.baseURL + "/getallcomplaints");
}

//get complaint for customers username
getcomplaint(username:any){
  return this.http.get(this.baseURL + "/complaint" + "/" + username);
}

//get complaints by engineers username
getcomplainteng(username:any){
  return this.http.get(this.baseURL + "/engcomplaints" + "/" + username);
}


//get users list by role
getuserbyrole(role:string){
  return this.http.get(this.baseURL + "/getuserbyrole" + "/" + role);
}

//assigncomplaint by manager
assigncomplaint(complaintid:number,username){
  return this.http.post(this.baseURL + "/assign" + "/" + complaintid, username);
}

//get complaint by id for customer
getcomplaintbyid(complaintid){
  return this.http.get(this.baseURL + "/complaintbyid" + "/" + complaintid)
}

//give feedback by customers
feedback(complaintid:number, feedback){
  return this.http.post(this.baseURL + "/feedback" + "/" + complaintid, feedback);
}

//submit complaint status by engineer
// complaintstatus(complaintid:number,status){
//   return this.http.post(this.baseURL + "/submitstatus" + "/" + complaintid , status);
// }

complaintstatus(complaintid:number,username){
  return this.http.post(this.baseURL + "/statuseng" + "/" + complaintid, username);
}


}
