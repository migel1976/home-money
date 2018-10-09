import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';


@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form:FormGroup;
  constructor(private usersService:UsersService, private router:Router) {}

  ngOnInit() {
	this.form=new FormGroup(
		{'email':new FormControl(null,[Validators.required, Validators.email],this.forbiddenEmails.bind(this)),
		 'password':new FormControl(null,[Validators.required, Validators.minLength(6)]),
		 'name':new FormControl(null,[Validators.required]),
		 'agree':new FormControl(false,[Validators.required])});
  }


  onSubmit(){
	const {email,password,name}=this.form.value;
	const user=new User(email,password,name);

	this.usersService.createNewUser(user)
		.subscribe((user:User)=>{
			console.log(user);
			this.router.navigate(['/login'],{
				queryParams:{
					nowCanLogin:true
					}
				});
		});
  }

  forbiddenEmails(controls:FormControl):Promise<any>{
		return new Promise((resolve,reject)=>{
			this.usersService.getUserByEmail(controls.value)
				.subscribe((user:User)=>{
					if(user){
						resolve({forbiddenemail:true})
					}
					else{
						resolve(null);
					}
				});
	});
     }

}
