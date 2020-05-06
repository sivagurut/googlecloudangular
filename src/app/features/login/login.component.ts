import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'test';
  password = 'test@123';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin() {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      // Redirect to Welcome Page
      this.router.navigate(['home']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
