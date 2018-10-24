import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Category} from '../../shared/models/category.model';


@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor() { }

  @Input() categories:Category[]=[];
  @Output() onCategoryEdit=new EventEmitter<Category>();
  currentCategoryId=34;
  currentCategory:Category;
  ngOnInit() {
	this.onCategoryChange();	
  }

  onSubmit(form:NgForm){
	}
 
  onCategoryChange(){
	console.log(this.currentCategoryId);
	this.currentCategory=this.categories
	.find(c=>c.id===+this.currentCategoryId);
		}

}
