import { FallPageComponent } from './components/fall-page/fall-page.component';
import { SpringPageComponent } from './components/spring-page/spring-page.component';
import { WinterPageComponent } from './components/winter-page/winter-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'app-test-page', component: TestPageComponent},
  {path: 'app-winter-page', component: WinterPageComponent},
  {path: 'app-spring-page', component: SpringPageComponent},
  {path: 'app-fall-page', component: FallPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
