import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment15';
  constructor(public fbobj : FormBuilder){}

  MyForm=this.fbobj.group(
    {
      firstName :['',[Validators.required,Validators.pattern("^[a-zA-Z._]+$")]],
      lastName: ['',[Validators.required,Validators.pattern("^[a-zA-Z._]+$")]],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone: ['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      city: ['',[Validators.required,Validators.minLength(4)]],
      state: ['',],
      zip:['',[Validators.required,Validators.pattern("[0-9]{5}")]],
      comment: ['',Validators.maxLength(30)]

    }
  )
}
