import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  redirectTo:'login',
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
