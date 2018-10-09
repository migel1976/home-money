import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {Router, ActivatedRoute, Params}  from '@angular/router';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
		private authService:AuthService, 
		private usersService:UsersService,
		private router:Router,
		private route:ActivatedRoute
		) { }


  form:FormGroup; 
  message:Message;

  ngOnInit() {

	this.message=new Message('danger','');
	this.route.queryParams
		.subscribe((params:Params)=>{
			if(params['nowCanLogin'])
				{
					this.showMessage(
							 {text:'Теперь вы можете зайти в систему',
							  type:'success'});
				}
	});
		


	this.form=new FormGroup({
		'email':new FormControl(null, [Validators.required, Validators.email]),
		'password':new FormControl(null, [Validators.required, Validators.minLength(6)])
	})
  }

//      showMessage(text:string, type:string='danger'){
  showMessage(message:Message){	
//	this.message=new Message(type,text);
	this.message=message;
	window.setTimeout(()=>{
		this.message.text='';
		},10000);
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
				this.showMessage({text:'Пароль введен неправильно',
						  type:'danger'});
			}
		}
		else{
			this.showMessage({text:'Такого пользователя не существует',
					  type:'danger'});
		}

	});
   }   
}
