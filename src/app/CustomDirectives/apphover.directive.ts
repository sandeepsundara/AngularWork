import { Directive, ElementRef, HostBinding, Renderer2,HostListener } from "@angular/core";

@Directive({
    selector: '[appHover]'
  })

  export class AppHover{

    @HostBinding('value') valueInp:string = "Hello vamsi Sandeep"

    constructor(private element:ElementRef,private renderer:Renderer2){



    }

    @HostBinding('style.backgroundColor') backgroundColor:string = 'red';
    @HostBinding('style.border') border:string = 'red 2px solid';
    @HostBinding('style.color') textColor:string = 'blue';

     @HostListener('mouseenter') onMouseEnter(){
    
    this.renderer.addClass(this.element.nativeElement,'highlet');
    
      }
    
      @HostListener('mouseout') onMouseOut(){
    
        this.renderer.removeClass(this.element.nativeElement,'highlet');
    
      }



  }