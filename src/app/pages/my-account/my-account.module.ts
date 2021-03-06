import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountShowComponent } from './subpages/my-account-show/my-account-show.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyAccountEditComponent } from './subpages/my-account-edit/my-account-edit.component';

@NgModule({
  declarations: [MyAccountShowComponent, MyAccountComponent, MyAccountEditComponent],
  imports: [CommonModule, MyAccountRoutingModule, SharedModule, FormsModule],
})
export class MyAccountModule {}
