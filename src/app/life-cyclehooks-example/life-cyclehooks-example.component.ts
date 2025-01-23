import { AfterContentChecked, AfterContentInit, AfterViewInit, Component,ContentChild,DoCheck,ElementRef,Input, OnChanges, OnInit, SimpleChanges, ViewChild,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-life-cyclehooks-example',
  templateUrl: './life-cyclehooks-example.component.html',
  styleUrl: './life-cyclehooks-example.component.css'
})
export class LifeCyclehooksExampleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy{
title : string  = 'Demo Component';
@Input() message:string;
@ContentChild('temp') paraContent: ElementRef;
@ViewChild('temp2') paraview:ElementRef;

constructor(){

console.log(this.title);
console.log(this.message);


}
  ngDoCheck(): void {
    console.log("This is on oninit"); // This will be called after ngOnInit and ngOnChanges
    console.log(this.paraContent);
  }
  ngOnInit(): void {
    console.log("This is on oninit");
  }

ngOnChanges(changes:SimpleChanges){

  console.log("In ngOnChanges");

  console.log(changes);

}

ngAfterContentInit(): void {
  console.log("In ngAfterContentInit");
  console.log("In ngAfterContentInit",this.paraContent.nativeElement.innerText);
  console.log("In ngAfterContentInit12341235566");
}

ngAfterContentChecked():void {

  console.log("In ngAfterContentCheck called",this.paraview);

}
ngAfterViewInit(): void {
  console.log("In ngAfterViewInit called",this.paraview);
}

ngOnDestroy(): void {
  console.log("On Distroy  called");
}
}
