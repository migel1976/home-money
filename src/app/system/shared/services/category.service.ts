import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseApi} from '../../../shared/core/base-api';
import {Category} from '../models/category.model';

@Injectable()
export class CategoryService extends BaseApi{

	constructor(public http:Http)
	{
	 super(http);
	}	


	addCategory(category:Category){
		return this.post('categories',category)}


} 

