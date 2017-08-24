import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';

const routes : Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
