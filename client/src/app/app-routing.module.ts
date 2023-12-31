import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  redirectTo:'login',
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'loginForm',
  component:LoginFormComponent,
},
{
  path:'login',
  component: LoginComponent,
},
{
  path:'register',
 component:RegisterComponent,
},
{
  path:'**',
  component:NotFoundComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
