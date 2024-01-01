import { Component } from '@angular/core';
import { faDashboard, faLocation, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {

  
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

}
