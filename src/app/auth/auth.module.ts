import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPageComponent,
    RegisterPagesComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
