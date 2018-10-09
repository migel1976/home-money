import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
		private authService:AuthService, 
		private usersService:UsersService,
		private router:Router) { }


  form:FormGroup; 
  message:Message;

  ngOnInit() {
	this.message=new Message('danger','');
	this.form=new FormGroup({
		'email':new FormControl(null, [Validators.required, Validators.email]),
		'password':new FormControl(null, [Validators.required, Validators.minLength(6)])
	})
  }

  showMessage(text:string, type:string='danger'){
	this.message=new Message(type,text);
	window.setTimeout(()=>{
		this.message.text='';
		},5000);
	}

  onSubmit(){
//	console.log(this.form);
	const formData=this.form.value;
	console.log(formData.email);
	this.usersService.getUserByEmail(formData.email)
	.subscribe((user:User)=>{
//		console.log(user);
		if(user){
			if(user.password===formData.password)
			{
				this.message.text='';
				window.localStorage.setItem('user',JSON.stringify(user));
				this.authService.login();
//				this.router.navigate(['']);
			}
			else{
				this.showMessage('Пароль введен неправильно');
			}
		}
		else{
			this.showMessage('Такого пользователя не существует');
		}

	});
   }   
}
