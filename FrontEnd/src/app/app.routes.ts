import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { CustDashboardComponent } from './pages/customer/cust-dashboard/cust-dashboard.component';
import { CustRegistrationComponent } from './pages/customer/cust-registration/cust-registration.component';
import { CustHeadingComponent } from './pages/customer/cust-heading/cust-heading.component';
import { CustProfileComponent } from './pages/customer/cust-profile/cust-profile.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AddEmployeesComponent } from './pages/admin/add-employees/add-employees.component';
import { EmpCustComponent } from './pages/admin/emp-cust/emp-cust.component';
import { AllComplaintsComponent } from './pages/admin/all-complaints/all-complaints.component';
import { ViewComplaintsComponent } from './pages/customer/view-complaints/view-complaints.component';
import { EngDashboardComponent } from './pages/Engineer/eng-dashboard/eng-dashboard.component';
import { ManagerDashboardComponent } from './pages/Manager/manager-dashboard/manager-dashboard.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path: 'custregistration', component:CustRegistrationComponent},
    {path: 'custdashboard', component:CustDashboardComponent},
    {path: 'customerprofile', component:CustProfileComponent},
    {path: 'viewcomplaintcust/:complaintid', component:ViewComplaintsComponent},
    {path: 'adminhome', component:AdminDashboardComponent},
    {path: 'addemp', component:AddEmployeesComponent},
    {path: 'allemployees', component:EmpCustComponent},
    {path: 'allcomplaints', component:AllComplaintsComponent},
    {path: 'engdash', component:EngDashboardComponent},
    {path: 'managerhome', component:ManagerDashboardComponent},

];
