import { Component, OnInit } from '@angular/core';
import { WindowService } from './services/window.service';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginByPhone';
  windowRef:any
  phone_number:any = "+201550426690"
  verif_code:any
  login1:any=true
  login2:any=false
  constructor(
    public win:WindowService,
    private angularFireAuth: AngularFireAuth,
  ) {

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
      localStorage.setItem("confirmation_result",JSON.stringify(result))
      this.login1=false
      this.login2=true
    }).catch((error:any)=>{
      alert("too manny connexion")
      console.log(error);
      
    })
  }

  async verifyLoginCode() {
    //this.router.navigateByUrl('/home')
    //return
    
    this.windowRef.confirmationResult.confirm(this.verif_code).then( (result:any) => {
      
      localStorage.setItem("uid",result.user._delegate.uid)
      localStorage.setItem("isNewUser",result.additionalUserInfo.isNewUser)

      if(result.additionalUserInfo.isNewUser){
        alert("new user")
      } else {
        alert("OLD user")
      }
        
      
    }).catch( (error:any) => console.log(error, "Incorrect code entered?"));
  }
}
