import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService:UsersService) { }


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
			{}
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
