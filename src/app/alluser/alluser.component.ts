import { Component, OnInit } from '@angular/core';
import { UserService } from './UserService';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.scss'],
})
export class AlluserComponent implements OnInit {
  constructor(public userService: UserService) {}

  isLoading = true;
  users = [];
  colors = [
    '#8bc34a',
    '#f9a825',
    '#00b0ff',
    '#ff1744',
    '#512da8',
    '#00acc1',
    '#1a237e',
    '#5d4037',
    '#880e4f',
  ];
  pageStatus = 'Showing 0 to 0 of 0';

  async ngOnInit() {
    await this.userService.getUsers();
    this.users = this.userService.getNext(false);
    this.pageStatus = `Showing ${this.users[0].index} to ${
      this.users[this.users.length - 1].index
    } of ${this.userService.allUsers.length}`;
    this.isLoading = false;
  }

  nav(next = true) {
    if (next) {
      this.users = this.userService.getNext(true);
    } else {
      this.users = this.userService.getPrev();
    }
    this.pageStatus = `Showing ${this.users[0].index} to ${
      this.users[this.users.length - 1].index
    } of ${this.userService.allUsers.length}`;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
