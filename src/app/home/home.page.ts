import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  extra_data:any;
  top_college:any;
  image_path=image_path;
  top_colg_title:any;
  all_data:any;

  constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) {
   }

  ngOnInit() {
   // console.log(host);
   this.getHomedata();
  }
openMenu() {
   //this.menu.open();
   this.navCtrl.navigateForward('sidebar');
 }
storePage(page){
  this.storage.set("goTo", page);
     
  }
 async getHomedata(){
     const loading = await this.loadingController.create({
    message: ''
  });
    let data={
    
    "user_id": '',
       
  }
    //await loading.present();
   this.http.get(host+'home')
  .subscribe((res:any) => {
    
    res = res.json();
    //console.log(res);
   
     if(res.status){
       this.all_data=res;
       this.top_college=res.colleges;
       this.extra_data=res.extra_data;
       for (let extra of res.extra_data) {
        if(extra.type==4){
          if(extra.image==null && extra.image2==null){
            this.top_colg_title=extra.title;

          }

        }
       }
        loading.dismiss();
    // this.userData =this.res;
    // this.phone_number = this.userData.response_data.phone_number;
    // this.f_name = this.userData.response_data.first_name;
    //   this.l_name = this.userData.response_data.last_name;
    //   this.address = this.userData.response_data.address;
    //   this.user_img=this.userData.response_data.avatar;
    
    }else{
    alert("Server error");
     loading.dismiss();
    }
  }, (err) => {
    console.log(err);
     loading.dismiss();
  });
  }
}
