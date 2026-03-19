import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { compileClassMetadata } from '@angular/compiler';
import { MercadoPageComponentComponent } from './features/main-page/mercado-page-component/mercado-page-component.component';
import { ComidaPageComponentComponent } from './features/main-page/comida-page-component/comida-page-component.component';

const routes: Routes = [
  {path: "", component: MainPageComponent, children[
    {path: "mercado", component: MercadoPageComponent}
    {path: "comida", component: ComidaPageComponentComponent}
  ]},
  {path: "login", component: LoginPageComponent},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
