import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {
  @Input() users : any[] = [];
  filteredUsers:any[] = [];
  sortKey:string = '';
  sortDirection:string = 'asc';

ngOnChanges(changes: SimpleChanges): void {
  if(changes['users'] && changes['users'].currentValue){

    this.filteredUsers = [...this.users];

  }

 
}

applyFilter(event:Event):void {
const inputElement = event.target as HTMLInputElement;
const filterValue = inputElement.value;
this.filteredUsers = this.users.filter((user)=> 
user.name.toLowerCase().includes(filterValue.toLowerCase)
);

this.sortData();


}

sortBy(key:string):void {
if(this.sortKey === key) {
this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
}
else {

  this.sortKey = key;
  this.sortDirection = 'asc';
}
  this.sortData();
}

sortData():void {
this.filteredUsers.sort((a,b):any => {
if(a[this.sortKey] < b[this.sortKey]) {
  return this.sortDirection === 'asc' ? -1 : 1;
} else if (a[this.sortKey] > b[this.sortKey]){
  return this.sortDirection === 'asc' ? 1 : -1;
}
return 0;

});



}



}
