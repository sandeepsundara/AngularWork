import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  http : HttpClient = inject(HttpClient);
  allTasks : Task[] = [];

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  ngOnInit(){

    this.fetchAllTasks();

  }

  fetchAllDatatemp(){

    this.fetchAllTasks();


  }

  
  CreateTask(data:Task){
  const headers = new HttpHeaders({'my-header':'sandeep'});
  this.http.post<{name:string}>('https://angular-582c4-default-rtdb.firebaseio.com/tasks.json',data,{headers: headers}).subscribe((response) => {

    console.log(response);
    this.fetchAllTasks();


  });// url,requestbody // post method returns observable 
  console.log(data);

  }

  private fetchAllTasks(){
  this.http.get<{[key:string]:Task}>('https://angular-582c4-default-rtdb.firebaseio.com/tasks.json')
   .pipe(map((response) => {
     // Transforms the Data

     let tasks = [];

     for(let key in response ){

       if(response.hasOwnProperty(key)){


         tasks.push({...response[key] , id: key })

       }
     }

     return tasks;

     

   }))

  .subscribe((tasks) => {
   this.allTasks = tasks;




  })


  }
}