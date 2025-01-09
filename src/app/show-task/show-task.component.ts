import { Component,OnInit,inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {

  taskService:TaskService = inject(TaskService);
  tasks: string[] = ['task1','task2','task3'] ;
  
ngOnInit(){
  this.taskService.createTask.subscribe((value) => {
     this.tasks.push(value);
  })
}




}
