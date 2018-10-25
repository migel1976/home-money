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
  isLoaded=false;
 
  ngOnInit() {
	this.categoryService.getCategories()
	.subscribe((categories:Category[])=>
		{
			console.log('records-page.component', categories);
			this.categories=categories;
			this.isLoaded=true;
		})
  }

  newCategoryAdd(category:Category){
	this.categories.push(category);  
}


 categoryWasEdited(category:Category){
	

}
