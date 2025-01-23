import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive(
{

selector: '[setBackGround]'


}



) 
export class SetBackGround implements OnInit{
// private element:ElementRef
constructor( private element:ElementRef,private renderer:Renderer2){
//    this.element = element;

    // element.nativeElement.style.backgroundColor = 'red';
    // element.nativeElement.style.color = 'brown';
//    this.renderer.setStyle('this.element.nativeElement','backgroundColor','brown');
//    this.renderer.setStyle('this.element.nativeElement','color','red');



}

ngOnInit(){

    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','brown');
    this.renderer.setStyle(this.element.nativeElement,'color','red');
   // this.renderer.setAttribute(this.element.nativeElement,'title','sandeep');
    //this.renderer.addClass()
}



}