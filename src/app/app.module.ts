import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase/app';
import { AppComponent } from './app.component';
firebase.initializeApp({
  apiKey: "AIzaSyCjmitFPMgTfJDFE3b3PrHhsN8aRJGjQv8",
  authDomain: "ramses-app-dcbaf.firebaseapp.com",
  databaseURL: "https://ramses-app-dcbaf-default-rtdb.firebaseio.com",
  projectId: "ramses-app-dcbaf",
  storageBucket: "ramses-app-dcbaf.appspot.com",
  messagingSenderId: "97452501808",
  appId: "1:97452501808:web:598535ac61edf2d55936f5"
})
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCjmitFPMgTfJDFE3b3PrHhsN8aRJGjQv8",
      authDomain: "ramses-app-dcbaf.firebaseapp.com",
      databaseURL: "https://ramses-app-dcbaf-default-rtdb.firebaseio.com",
      projectId: "ramses-app-dcbaf",
      storageBucket: "ramses-app-dcbaf.appspot.com",
      messagingSenderId: "97452501808",
      appId: "1:97452501808:web:598535ac61edf2d55936f5"
    }),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
