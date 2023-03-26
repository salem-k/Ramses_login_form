import { Component, OnInit } from '@angular/core';
import { WindowService } from './services/window.service';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


// This interface is optional, showing how you can add strong typings for custom globals.
// Just use "Window" as the type if you don't have custom global stuff
export interface ICustomWindow extends Window {
    __custom_global_stuff: string;
}

function getWindow (): any {
    return window;
}

@Injectable()
export class WindowRefService {
    get nativeWindow (): ICustomWindow {
        return getWindow();
    }
}

declare global {
  interface Window {
    gotoHome:any;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private _window: ICustomWindow;

  title = 'loginByPhone';
  windowRef:any
  phone_number:any
  verif_code:any
  login1:any=true
  login2:any=false
  constructor(
    public win:WindowService,
    private angularFireAuth: AngularFireAuth,
    windowRef: WindowRefService,
    private router:Router

  ) {
    this._window = windowRef.nativeWindow;
  }
  ngOnInit(): void {
    localStorage.clear()
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container',{
      'size': 'invisible'
      },
      auth.getAuth()
    );
    this.windowRef.recaptchaVerifier.render()

  }

  async signup() {


    this.angularFireAuth.signInWithPhoneNumber( this.phone_number,this.windowRef.recaptchaVerifier).then((result:any)=>{
      this.windowRef.confirmationResult = result;
      
      this.login1=false
      this.login2=true
    }).catch((error:any)=>{
      alert("too manny connexion")
      console.log(error);
      
    })
  }

  async verifyLoginCode() {
    
    this.windowRef.confirmationResult.confirm(this.verif_code).then( (result:any) => {
      localStorage.setItem("result",JSON.stringify(result))
      
    }).catch( (error:any) => console.log(error, "Incorrect code entered?"));
  }
}
