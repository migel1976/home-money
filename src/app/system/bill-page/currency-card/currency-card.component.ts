import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wfm-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {
  @Input() currency:any;
  currencyArray:string[]=['USDRUB','USDEUR'];

  today=new Date(); 
	
  constructor() { }

  ngOnInit() {
	const {quotes}=this.currency;
	console.log('currency-card: currency', this.currency);
	console.log('currenct-card: currency.source ',this.currency.source);
	console.log('currency-card: quotes[USDRUB]',quotes['USDRUB']);
	console.log('currency-card: currency[USDRUB]',this.currency.quotes['USDRUB']);
  }

}
