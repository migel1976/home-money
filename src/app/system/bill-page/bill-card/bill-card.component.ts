import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  constructor() { }
  
  @Input() billInput:Bill;
  @Input() currencyInput:any;


  dollar:number; 
  euro:number;
  rub=1;
 

  ngOnInit() {

	console.log('bill-card.component',this.currencyInput);
//	const {quotes}=this.currencyInput.quotes;
	const {quotes}=this.currencyInput;
	console.log('bill-card.component: quotes',quotes);
        this.dollar=this.rub/quotes['USDRUB']*this.billInput.value;
	this.euro=this.rub/(quotes['USDEUR']*quotes['USDRUB'])*this.billInput.value;
	console.log('dollar',this.dollar);
	console.log('euro',this.euro);

  }

}
