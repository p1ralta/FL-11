import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SourseNameComponent } from './components/sourse-name/sourse-name.component';
import { HeaderPanelComponent } from './components/header-panel/header-panel.component';
import { SelectComponent } from './components/select/select.component';
import { FormComponent } from './components/form/form.component';
import { AddComponent } from './components/add/add.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
    apiKey: "AIzaSyDQL5VnLJjnDqYDOz0TVvDTXF8sLiyihHk",
    authDomain: "homework-22.firebaseapp.com",
    databaseURL: "https://homework-22.firebaseio.com",
    projectId: "homework-22",
    storageBucket: "",
    messagingSenderId: "148691835930",
    appId: "1:148691835930:web:acacb996e9f7b9d01d05a3"
};



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SourseNameComponent,
    HeaderPanelComponent,
    SelectComponent,
    FormComponent,
    AddComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
