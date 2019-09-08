import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewItemComponent } from './components/new-item/new-item.component';



const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'add', component: NewItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
