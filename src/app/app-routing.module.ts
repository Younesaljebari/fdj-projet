import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEquipeComponent } from './Parents/details-equipe/details-equipe.component';
import { HomeComponent } from './Parents/home/home.component';
import { Resolver } from './ResolverTeam/resolver';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'detail/:id', component: DetailsEquipeComponent, resolve:{teams : Resolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
