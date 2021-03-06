import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { Bill } from '../shared/models/bill.model';
import { Subscription } from 'rxjs/Subscription';
//import { combineLatest } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
//import 'rxjs/add/operator/combineLatest';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  constructor(private billService:BillService) { }

  currency:any;
  bill:Bill;

  isLoaded=false;
  onRefresh(){
	this.isLoaded=false;
	this.billService.getBill()
	.delay(2000)
	.subscribe((bill:Bill)=>{
		this.bill=bill;
		this.isLoaded=true;
		console.log(this.bill);
	 });
	}


  subscription:Subscription;
  ngOnInit() {
	this.billService.getBill()
		.subscribe((bill:Bill)=>{
				console.log(bill);
				this.bill=bill;
				//this.isLoaded=true;
				});

	this.billService.getCurrency()
		.subscribe((money:any)=>{
				console.log(money)
				this.currency=money;	
				this.isLoaded=true;
				});
	
//	this.subscription=
//Observable.combineLatest(
//		this.billService.getBill(),
//		this.billService.getCurrency()
//		).subscribe((data:[any,any])=>{
//			console.log(data)});
  }

  ngOnDestroy(){
//	this.subscription.unsubscribe();
	}

}
