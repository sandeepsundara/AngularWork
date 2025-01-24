import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidators{

static noSpaceAllowed(control:FormControl){
  if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed:true}
  }
  return null;
}


static checkUserName(control:AbstractControl):Promise<any>{

return usernameAllowed(control.value);

}







}

function usernameAllowed(userName:string){
    const tokenNames = ['johnsmith','sandeep'];
    
    return new Promise((resolve,reject) => {
    
    setTimeout(() => {
    
        if(tokenNames.includes(userName)){
         resolve({checkUserName:true})

        } else {

            resolve(null)
        }
    },5000)
    
    
    })
    
    
    
    }