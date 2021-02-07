import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../../../core/services/auth/login/login.service';
import { TooltipPosition } from '@angular/material/tooltip';
import { Client } from 'src/app/core/api/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent {

  position: TooltipPosition = 'right';
  user: Client;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private loginService: LoginService
  ) {
    this.user = this.loginService.getUser()!;
  }

  loguout(): void {
    this.loginService.removeJWT();
    this.router.navigate(['/login']);
  }
}
