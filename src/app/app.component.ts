import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 page:any;
 userDetails: any;
 response_data:any;
 constructor(
    private menu: MenuController,
     private navCtrl: NavController,
    public storage: Storage,
    public platform: Platform
  )  {
   

   }


ngOnInit() {
     this.storage.create();
     this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        this.response_data = val.response_data;
        //console.log(val);
      }
    })
  }
  ngAfterViewInit(){
     //console.log(1212);
    // this.storage.remove("userCart");
    this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        this.response_data = val.response_data;
        
      }
    })
  }
logout(){

    this.storage.remove("userDetails");
    this.userDetails = null;
    this.navCtrl.navigateForward('home');
     this.menu.close();

  }
  back(){
    this.storage.get("goTo").then(val=>{
      if(val){
        this.page = val;
        if(val=='sidebar'){
          this.menu.open();
        }else{
        this.navCtrl.navigateForward(''+this.page);
      }
    }else{
      this.navCtrl.navigateForward('/');
    }
        });
  
      
       //this.location.back();
  }
storePage(page){

  this.storage.set("goTo", page);
     this.menu.close();
  }

}
