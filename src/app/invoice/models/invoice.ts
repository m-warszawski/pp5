import { Units } from "../enums/units";
import { Taxes } from "../enums/taxes";

export class Invoice {

  constructor(){}
  name:string = "";
  quantity:number = 0;
  units?:Units
  netto:number = 0;
  taxes:Taxes = Taxes.t23;
  brutto:number = 0;
}
