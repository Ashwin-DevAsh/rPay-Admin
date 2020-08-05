import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/alluser/UserService';
import { MerchantService } from '../MerchantService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmerchants',
  templateUrl: './listmerchants.component.html',
  styleUrls: ['./listmerchants.component.scss'],
})
export class ListmerchantsComponent implements OnInit {
  constructor(
    public userService: UserService,
    public merchantService: MerchantService,
    public router: Router
  ) {}

  isLoading = true;
  merchants = [
    {
      storeName: 'hut cafe',
      name: 'Akilan',
      imageURL: '',
      email: '2017ashwin@gmail.com',
      index: 0,
      status: 'InActive',
      number: '919551574355',
    },
    {
      storeName: 'Tamil Cafe',
      name: 'Ashwin',
      imageURL: '',
      email: '2017ashwin@gmail.com',
      index: 2,
      status: 'Active',
      number: '919551574355',
    },
  ];
  colors = this.userService.colors;
  pageStatus = 'Showing 0 to 0 of 0';

  async ngOnInit() {
    // await this.merchantService.getMerchants();
    // this.merchants = this.merchantService.getNext(false);
    this.pageStatus = `Showing ${this.merchants[0].index} to ${
      this.merchants[this.merchants.length - 1].index
    } of ${this.merchantService.allMerchants.length}`;
    this.isLoading = false;
  }

  filter(query: String) {
    this.isLoading = true;
    this.merchantService.filter(query);
    this.merchants = this.merchantService.getNext();
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  nav(next = true) {
    if (next) {
      this.merchants = this.merchantService.getNext(true);
    } else {
      this.merchants = this.merchantService.getPrev();
    }
    this.pageStatus = `Showing ${this.merchants[0].index} to ${
      this.merchants[this.merchants.length - 1].index
    } of ${this.merchantService.allMerchants.length}`;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  async openMerchantProfile(item: Object) {
    this.merchantService.selectedMerchant = item;
    localStorage.setItem('selectedMerchant', JSON.stringify(item));
    this.router.navigate(['/Home/AllMerchants/MerchantProfile']);
  }
}