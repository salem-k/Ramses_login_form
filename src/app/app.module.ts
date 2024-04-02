import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase/app';
import { AppComponent, WindowRefService } from './app.component';
firebase.initializeApp({
  apiKey: "AIzaSyCQTyA-aQz4c4a4aApygu3Cj9A4FKuCu7w",
  authDomain: "junior-quiz-67945.firebaseapp.com",
  databaseURL: "https://junior-quiz-67945-default-rtdb.firebaseio.com",
  projectId: "junior-quiz-67945",
  storageBucket: "junior-quiz-67945.appspot.com",
  messagingSenderId: "726387154905",
  appId: "1:726387154905:web:d97a2eb98a2393b97403c8",
  measurementId: "G-MRS6YBMJZ4"
})
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCQTyA-aQz4c4a4aApygu3Cj9A4FKuCu7w",
      authDomain: "junior-quiz-67945.firebaseapp.com",
      databaseURL: "https://junior-quiz-67945-default-rtdb.firebaseio.com",
      projectId: "junior-quiz-67945",
      storageBucket: "junior-quiz-67945.appspot.com",
      messagingSenderId: "726387154905",
      appId: "1:726387154905:web:d97a2eb98a2393b97403c8",
      measurementId: "G-MRS6YBMJZ4"
    }),
    AngularFireAuthModule,
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
