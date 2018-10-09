import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form:FormGroup;
  constructor() { }

  ngOnInit() {
	this.form=new FormGroup(
		{'email':new FormControl([Validators.required, Validators.email]),
		 'password':new FormControl([Validators.required, Validators.minLength(6)]),
		 'name':new FormControl([Validators.required]),
		 'agree':new FormControl([Validators.required])});
  }


  onSubmit(){
	console.log(this.form);
  }
}
