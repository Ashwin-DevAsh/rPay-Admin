import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/LoginService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  drawerOpen: Boolean = false;
  currentPageIndex: Number = 0;
  userName:String


  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
    console.log(this.drawerOpen);
  }

  isCurrentPage(myIndex: Number) {
    return myIndex == this.currentPageIndex;
  }

  selectPage(index: Number) {
    this.currentPageIndex = index;
    localStorage.setItem('currentPageIndex', index.toString());
  }

  constructor(private router: Router,private loginService:LoginService) {}

  async ngOnInit() {
    if(!this.loginService.isSessionExist()){
      this.router.navigate(['Login'], { replaceUrl: true });
      return
    }
  
    this.currentPageIndex = Number.parseInt(localStorage.getItem('currentPageIndex')) || 0;
    this.userName = this.loginService.userName
  }
}
