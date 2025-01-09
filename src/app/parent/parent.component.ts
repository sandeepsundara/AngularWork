import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  users: any[] = [];


  constructor(private userService : UserService){}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
   this.users = data;
  
    })

  

 
  



  }



   
  }



  

