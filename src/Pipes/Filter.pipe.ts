import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
name:'filterPipe'
})


export class FilterPipe implements PipeTransform {
    transform(value: any,key:string="") {
        return value.filter(item=>item[key]==="Female")
    }









}