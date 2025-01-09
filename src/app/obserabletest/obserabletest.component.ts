import { Component } from '@angular/core';
import { Observable,of,from,filter,map } from 'rxjs';

@Component({
  selector: 'app-obserabletest',
  templateUrl: './obserabletest.component.html',
  styleUrl: './obserabletest.component.css'
})
export class ObserabletestComponent {
  title = 'angular-observables';
  
//   myObserable = new Observable((observer) => {
//     setTimeout(() => observer.next("Sandeep"),1000);
//     setTimeout(() => observer.next("Sandeep"),2000); 
//     setTimeout(() => observer.next("Sandeep"),3000);
//  //   setTimeout(() => {observer.error(new Error('Something went wrong! please try again later'))},3000);
//     setTimeout(() => observer.next("Sandeep"),4000);
//     setTimeout(() => observer.next("Sandeep"),5000);
//     setTimeout(() => observer.complete(),3000);



//   })

// myObserable = Observable.create((observer:any) => {

//   setTimeout(() => observer.next("Sandeep"),1000);
//      setTimeout(() => observer.next("Sandeep"),2000); 
//     setTimeout(() => observer.next("Sandeep"),3000);
//   //  //   setTimeout(() => {observer.error(new Error('Some



// })

array1 = [1,2,3,4,5,6,7,8];
array2 = ['a','b'];



// myObserable = of(this.array1,this.array2,20,79);

myObserable = from(this.array1).pipe(map((val) => {
  return val * 5;


}),filter((val)=> {
return val % 4 === 0;




}));

// transformedObserable = this.myObserable.pipe(map((val,i)=> {

// return val * 5;


// } ),filter((val,i) => {
// return val % 4 === 0;



// }))

  GetAsyncData(){
  this.myObserable.subscribe({
    next: (val: any) => {
      this.data.push(val);
      console.log(val);
    },
    error(err){
      alert(err.message);
    },
    complete(){
      alert('All the data is streamed!')
    }




  })
  }
  data: any[] = [];
}
