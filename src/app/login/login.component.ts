import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  email: String = 'email';
  password: String = '';
  invalidEmail: Boolean = false;
  invalidPassword: Boolean = false;
  isLoading: Boolean = false;

  login(): void {
    if (this.validate()) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/Home']);
      }, 3000);
    }
  }

  validate(): Boolean {
    var validEmail = true;
    var validPassword = true;
    if (!this.validateEmail(this.email)) {
      this.invalidEmail = true;
      validEmail = false;
      setTimeout(() => {
        this.invalidEmail = false;
      }, 2000);
    }
    if (this.password.length < 8) {
      this.invalidPassword = true;
      validPassword = true;
      setTimeout(() => {
        this.invalidPassword = false;
      }, 2000);
    }

    if (validPassword == true && validEmail == true) {
      return true;
    } else {
      return false;
    }
  }

  validateEmail(inputText: String) {
    if (inputText.length < 7) {
      return false;
    }

    if (!inputText.includes('@') || !inputText.includes('.')) {
      return false;
    }

    return true;
  }
}
