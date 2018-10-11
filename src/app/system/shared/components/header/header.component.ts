import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user.model';
import { AuthService} from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wfm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,
	      private router:Router) { }
	
	user:User;
	date:Date = new Date
  ngOnInit() {
	this.user=JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout(){
		this.authService.logout();
		this.router.navigate(['/login']);
	}

}
