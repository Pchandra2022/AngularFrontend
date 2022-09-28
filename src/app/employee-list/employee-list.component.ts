import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
image:string='assets/profile.png';
employee:Employee[]=[];

  constructor( private employeeService: EmployeeService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  // private getEmployees(){
  //   this.employeeService.getEmployeesList().subscribe((data:any) => {
  //     console.log("dtata",data)
  //     this.employee = data;
  //   })
  // }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res:any)=>{
      this.employee = res;
    }
    // ,(err:any)=>{
    //   console.log("error while fetching data")
    // }
  )
  }


  // updateEmployee(id: number){
  //    this.router.navigate(['update-employee', id]);
  // }

  updateEmployeee (value:Employee){
     this.router.navigate(['update-employee', value.id]);    
  }

  deleteEmployee(value:Employee){
    this.employeeService.deleteEmployee(value.id).subscribe((data:any)=>{
      console.log(data.id,"data deleted successfully...")
      this.getAllEmployee();
    });
  }

  employeeDetails(value:Employee){
    this.router.navigate(['employee-details', value.id]);    
    
  }





}
