import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';
import {BaseApi} from '../../../shared/core/base-api';


@Injectable()
export class BillService extends BaseApi{

	constructor(public http:Http){
		super(http);
	}

	getBill():Observable<Bill>{
		return this.get('bill');
	}



/*	
	getBill(): Observable<Bill> {
		    return this.http.get('http://localhost:3000/bill')
			.map((response:any) => response.json());
	  }

*/
	getCurrency(base: string = 'RUB'): Observable<any> {
//		    return this.http.get(`http://data.fixer.io/lates?access_key=9e0efcac42c9a4baef2f283b98357f6b&base=${base}`)
///		    return this.http.get(`http://apilayer.net/api/live?access_key=9e0efcac42c9a4baef2f283b98357f6b&source=${base}`)
		    return this.http.get(`http://apilayer.net/api/live?access_key=9e0efcac42c9a4baef2f283b98357f6b`)
			.map((response: any) => response.json());
	  }

}
