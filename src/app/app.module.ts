import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NodesComponent } from './nodes/nodes.component';
import { BlocksComponent } from './blocks/blocks.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddmerchantsComponent } from './addmerchants/addmerchants.component';
import { AddadminsComponent } from './addadmins/addadmins.component';
import { AlladminsComponent } from './alladmins/alladmins.component';
import { AllmerchantsComponent } from './allmerchants/allmerchants.component';
import { AlluserComponent } from './alluser/alluser.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OverviewComponent,
    TransactionsComponent,
    NodesComponent,
    BlocksComponent,
    AdduserComponent,
    AddmerchantsComponent,
    AddadminsComponent,
    AlladminsComponent,
    AllmerchantsComponent,
    AlluserComponent,
    MyaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}