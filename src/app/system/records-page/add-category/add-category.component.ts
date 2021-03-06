import { Component, OnInit, Input, EventEmitter, Output}   from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService} from '../../shared/services/category.service';
import { Category } from '../../shared/models/category.model';



@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {


  @Output() onCategoryAdd = new EventEmitter<Category>();
  

  constructor(private categoryService:CategoryService) {
			 }

  ngOnInit() {
  }

  onSubmit(form:NgForm){

	let { name, capacity } = form.value;
	if (capacity<0) capacity*=-1;
// 	console.log(form.value);
//	console.log('capacity :', capacity);
	
	const category=new Category(name, capacity);

	this.categoryService.addCategory(category)
	.subscribe((category:Category)=>{
			console.log(category);
			form.reset();
			form.value.name='aloha';
			form.form.patchValue({capacity:34});
			this.onCategoryAdd.emit(category);	
			})

	}

}
