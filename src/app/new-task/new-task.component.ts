import { Component, inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  newTask: String = '';
  taskService:TaskService = inject(TaskService);

  onCreateTask(){
   console.log(this.newTask);
   this.taskService.onCreateTask(this.newTask);
  }

}
