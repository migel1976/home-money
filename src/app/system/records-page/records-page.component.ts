import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoryService} from '../shared/services/category.service';

@Component({
  selector: 'wfm-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor(private categoryService:CategoryService) {

 }

  categories:Category[]=[];
  ngOnInit() {
	this.categoryService.getCategories()
	.subscribe((categories:Category[])=>
		{
			this.categories=categories;
		})
  }

  newCategoryAdd(category:Category){
   console.log(category);
  }

}
