import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css'
})
export class ViewChildrenComponent {

  // @ViewChild('inputEl') inputElements : ElementRef
 @ViewChildren('inputEl') inputElements : QueryList<ElementRef>
  fullName : string = '';
  show(){
    let name = '';
    this.inputElements.forEach((el) => {

      name += el.nativeElement.value+ ' ';


    })
    
    
    this.fullName = name.trim(); 

  

  }

}
