import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/noSpaceValidators.validator';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent implements OnInit {
  title = 'react-driven-form';
  reactiveForm : FormGroup;



  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed 
      ]),
      lastName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      userName: new FormControl(null,Validators.required,CustomValidators.checkUserName),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null),
        country: new FormControl('India'),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null),
      }),
      skills: new FormArray([
      new FormControl(null,Validators.required)
      ]),

      Experience:new FormArray(
      [
      ])
    });
  }

  OnFormSubmitted(){

console.log("Hello",this.reactiveForm);


  }

  addSkill(){

(<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required))

  }

  deleteSkill(index){
  
    const controls = (<FormArray>this.reactiveForm.get('skills'))

    controls.removeAt(index);
  }
  deleteExperience(index){
   

    const controls =  (<FormArray>this.reactiveForm.get('Experience'))

    controls.removeAt(index);


  }

  addExperience(){
    console.log('here in experinece');
    const experience = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
     });

     (<FormArray>this.reactiveForm.get('Experience')).push(experience);



  }
}
