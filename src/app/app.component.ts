import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'taskOne';
  userMessage:string=""
  popupShow:string="invisible"
  passwordType ="password"
  formValidation = new FormGroup({
    email: new FormControl('',[ Validators.required,Validators.pattern("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$")]),
    password: new FormControl('',Validators.required),
  });

  
  getFormValue(){
    this.userMessage=JSON.stringify(this.formValidation.value.email);
    this.popupShow="visible"
    this.formValidation.reset()
    setTimeout(() => {
      this.hidePopup()
    }, 2000);
  }


  showPassword(event:any){
    console.log(event.target.innerText);
    if(event.target.innerText == "visibility_off"){
      event.target.innerText="visibility"
      this.passwordType ="text"
    }else{
      event.target.innerText="visibility_off"
      this.passwordType ="password"
    }
  }

  hidePopup(){
    this.popupShow="invisible"
  }
 


}
