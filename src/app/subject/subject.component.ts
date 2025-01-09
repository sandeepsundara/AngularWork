import { Component,OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random());

    // })

    //let obs = new Subject();

    let obs1 = new BehaviorSubject<number>(10);  // initial value
    

   const data = ajax('https://randomuser.me/api/');
   data.subscribe((res) => console.log(res));
   data.subscribe((res) => console.log(res));
   data.subscribe((res) => console.log(res));
   //obs1.next(100);
   obs1.subscribe((res1) => console.log(res1));
   //data.subscribe(obs1);

  //   obs.subscribe((data) => {

  //   console.log(data)

  //   })

  //   obs.subscribe((data) => {

  //     console.log(data)
  
  //     }),

  //     obs.next(Math.random());

      
  }



}
