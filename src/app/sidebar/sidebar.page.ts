import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {
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
   ionViewWillEnter(){
    // this.storage.remove("userCart");
    this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
      }
    })
  }
logout(){

    this.storage.remove("userDetails");
    this.userDetails = null;
    this.navCtrl.navigateForward('home');
     //this.menu.close();

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
  storePage(page){
  this.storage.set("goTo", page);
     
  }

}
