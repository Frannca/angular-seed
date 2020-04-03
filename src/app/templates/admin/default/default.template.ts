import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.template.html',
  styleUrls: ['./default.template.scss']
})
export class DefaultTemplate implements OnInit {

  constructor(
    private authenticationServer: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationServer.logout();
    this.router.navigate(['/login']);
  }

}
