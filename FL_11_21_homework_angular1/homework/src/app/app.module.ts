import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { SourseNameComponent } from './components/sourse-name/sourse-name.component';
import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
import { MainComponent } from './components/main/main.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SelectComponent } from './components/select/select.component';
import { FormComponent } from './components/form/form.component';
import { AddComponent } from './components/add/add.component';
import { NewItemComponent } from './components/new-item/new-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    SourseNameComponent,
    HeaderPanelComponent,
    MainComponent,
    ListItemComponent,
    SelectComponent,
    FormComponent,
    AddComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
