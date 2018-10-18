import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){

	let { name, capacity } = form.value;
	if (capacity<0) capacity*=-1;
 	console.log(form.value);
	console.log('capacity :', capacity);


	}

}
