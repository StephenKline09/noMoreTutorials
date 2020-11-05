import { SpringPageComponent } from './spring-page/spring-page.component';
import { WinterPageComponent } from './winter-page/winter-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'app-test-page', component: TestPageComponent},
  {path: 'app-winter-page', component: WinterPageComponent},
  {path: 'app-spring-page', component: SpringPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
