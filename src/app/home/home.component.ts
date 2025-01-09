import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  onFormSubmit(form : NgForm){
  console.log(form);
  console.log(form.value.sandeep);
  console.log(form.value.sandeep1);
  console.log(form.controls['sandeep'].value);
  }

}

