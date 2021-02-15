import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientControllerService } from 'src/app/core/api/services';
import { CLientClass } from 'src/app/core/models/Client';
import { LoginService } from 'src/app/core/services/auth/login/login.service';

@Component( {
  selector: 'app-my-account-edit',
  templateUrl: './my-account-edit.component.html',
  styleUrls: [ './my-account-edit.component.sass' ]
} )
export class MyAccountEditComponent implements OnInit {

  user: CLientClass = new CLientClass();
  constructor(
    private loginService: LoginService,
    private service: ClientControllerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarUser();
  }

  cargarUser(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.user = this.loginService.getUser()!;
  }

  updateUser() {
    this.service.updateUsingPUT1( this.user ).subscribe( ( client ) => {
      this.router.navigate( [ '/my-account' ] );
      // this.loginService.();
      this.loginService.saveUser( this.user );
    } );
  }

}