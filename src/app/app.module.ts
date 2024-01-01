import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { DashboardPanelComponent } from './components/dashboard-panel/dashboard-panel.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { SalesGraphComponent } from './components/sales-graph/sales-graph.component';
import { SalesCategoryComponent } from './components/sales-category/sales-category.component';
import { LastTransactionComponent } from './components/last-transaction/last-transaction.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationComponent,
    DashboardPanelComponent,
    WidgetsComponent,
    SalesGraphComponent,
    SalesCategoryComponent,
    LastTransactionComponent,
    TopProductsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
