import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { DataCompComponent } from './data-comp/data-comp.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
    { path: 'data', component:DataCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
