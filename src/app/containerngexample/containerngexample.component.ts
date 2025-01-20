import { Component } from '@angular/core';

@Component({
  selector: 'app-containerngexample',
  templateUrl: './containerngexample.component.html',
  styleUrl: './containerngexample.component.css'
})
export class ContainerngexampleComponent {


  toggle: Boolean = true;
  
  
  onToggle(){

    this.toggle = !this.toggle;


  }

}
