import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';




@Injectable()

export class BillService{

	constructor(private http:Http){}
/*
	getBill():Observable<Bill>{
		return this.http.get('http://localhost:3000/bill')
			.map((response:Response)=>response.json());
	}

	getCurrency(base:string='RUB'):Observable<any>{

		return this.http.get(`http://api.fixer.io/latest?base=${base}`)
			.map((response:Response)=>response.json());
	
	 }
*/
	getBill(): Observable<Bill> {
		    return this.http.get('http://localhost:3000/bill')
			.map((response:any) => response.json());
	  }

	getCurrency(base: string = 'RUB'): Observable<any> {
		    return this.http.get(`http://data.fixer.io/lates?base=${base}`)
			.map((response: any) => response.json());
	  }
}
