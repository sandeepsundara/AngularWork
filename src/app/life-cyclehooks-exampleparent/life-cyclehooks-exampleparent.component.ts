import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cyclehooks-exampleparent',
  templateUrl: './life-cyclehooks-exampleparent.component.html',
  styleUrl: './life-cyclehooks-exampleparent.component.css'
})
export class LifeCyclehooksExampleparentComponent {
title:string = "sandeep";
inputValue:string = '';
toDistroy:boolean = false;

OnBtnClicked(test:HTMLInputElement){

this.inputValue = test.value;

}

OnBtnPressed(){

console.log('button is pressed ngAfterContentinit will not run');

}

DistroyComponent(){

this.toDistroy = !this.toDistroy;

}

}
