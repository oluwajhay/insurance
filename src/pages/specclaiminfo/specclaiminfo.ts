import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SpecclaiminfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specclaiminfo',
  templateUrl: 'specclaiminfo.html',
})
export class SpecclaiminfoPage {
  result: any;
  constructor( public loadingCtrl: LoadingController,private http: HttpClient, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecclaiminfoPage');
    }
    submit(){
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
      });
      loader.present();
  
    const URL = "http://104.199.122.248/iesdemo_genbiz/gen_api/ies_connect.php?process=users&opmode=EBGetSpecClaimInfo&cliamnum=HH/10001/HO/2018";
   let header = new HttpHeaders ({'Authorization':'Bearer 39109f7df56e1051c399e685066bb852'});
   this.http.get(URL,{headers:header}).subscribe((res:any)=> {
    alert(JSON.stringify(res))
    loader.dismiss();

  },(err:any)=>{
    alert(JSON.stringify(err))
    loader.dismiss();
  })
}
}