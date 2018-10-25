import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Category} from '../../shared/models/category.model';
import {CategoryService} from '../../shared/services/category.service';


@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  @Input() categories:Category[]=[];
  @Output() onCategoryEdit=new EventEmitter<Category>();
  currentCategoryId=4;
  currentCategory:Category;
  ngOnInit() {
	this.onCategoryChange();	
  }



  onSubmit(form:NgForm){
	let {capacity,name}=form.value;
	if(capacity<0) capacity*=-1;

  	const category = new Category(name,capacity,+this.currentCategoryId);

	this.categoryService.updateCategory(category)
	.subscribe((category:Category)=>{
			console.log(category);
			this.onCategoryEdit.emit(category);
		}
	)
	}
 
  onCategoryChange(){
	console.log(this.currentCategoryId);
	this.currentCategory=this.categories
	.find(c=>c.id===+this.currentCategoryId);
		}

}
