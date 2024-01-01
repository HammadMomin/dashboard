import { Component } from '@angular/core';
import { faLocation, faShop, faBoxes, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

}
