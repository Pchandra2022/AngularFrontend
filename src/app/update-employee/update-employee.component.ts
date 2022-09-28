import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  id: number=0;
  employee: Employee = new Employee();

  constructor(private employeesevice: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeesevice.getEmployeeById(this.id).subscribe((data: any) => {
      this.employee = data;
    });
  }


updateEmployee(){
  this.employeesevice.updateEmployeeById(this.id, this.employee).subscribe((data:any)=>{
    console.log(data);
    this.employee = new Employee();
    this.gotoList();
  });
}

  gotoList() {
    this.router.navigate(['employees'])
  }

  onSubmit(){
    this.updateEmployee();
  }

}
