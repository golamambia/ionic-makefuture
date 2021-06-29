import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.page.html',
  styleUrls: ['./our-service.page.scss'],
})
export class OurServicePage implements OnInit {
page:any;
 userDetails: any;
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private menu: MenuController,
    private navCtrl: NavController,
    public storage: Storage,
    private location: Location
  )  {
 
   }

  ngOnInit() {
  }
 back(){
  	this.storage.get("goTo").then(val=>{
      if(val){
        this.page = val;
        this.navCtrl.navigateForward(''+this.page);
    }else{
    	this.navCtrl.navigateForward('/');
    }
        });
  
      
       //this.location.back();
  }
}
