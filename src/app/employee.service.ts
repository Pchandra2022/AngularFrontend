import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Employee } from './employee';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // headers = new HttpHeaders()
  // .set('Content-Type','application/json')
  // .set('Accept','application/json')
  // .set('Access-Control-Allow-Origin','*');
  // httpOptions = {
  //   headers:this.headers
  // }


  private incertURL = "http://localhost:8080/employees";
  private createURL = "http://localhost:8080/employeesc";
  private byIdURL = "http://localhost:8080/employeeById";
  private updateURL = "http://localhost:8080/employeeu";
  private deleteURL = "http://localhost:8080/employeedd";

  constructor(private httpClient: HttpClient) { }


  // getEmployeesList(){
  //   return this.httpClient.get('${this.incertURL}');
  // }

  getAllEmployee(){
    return this.httpClient.get<Employee[]>(this.incertURL)
  }

  createEmployee(employee: Employee){
    return this.httpClient.post(this.createURL, employee);
  }


  getEmployeeById(id: number){
    let url = this.byIdURL+'/'+id;
    return this.httpClient.get<Employee>(url);
  }

  updateEmployeeById(id:number, employee: Employee){
    let url = this.updateURL+'/'+id;
    return this.httpClient.put<Employee>(url, employee);
  }

  deleteEmployee(id:number){
    let url = this.deleteURL+'/'+id;
    return this.httpClient.delete(url);
  }

  // deleteEmployee(id:number){
  //   return this.httpClient.delete('${this.deleteURL}/${id}');
  // }

}
