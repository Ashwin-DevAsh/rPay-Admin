import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  drawerOpen: Boolean = false;
  currentPageIndex: Number = 0;

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPageIndex =
      Number.parseInt(localStorage.getItem('currentPageIndex')) || 0;
    // this.router.navigate(['Login'], { replaceUrl: true });
  }
}
