import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items : Array<any> = [];
  nombre:String = "";
  pass:String = "";
  constructor(public navCtrl: NavController,  public http   : HttpClient) {


  }
  ionViewWillEnter() : void
  {
     this.load();
  }
  load() : void
  {
     this.http
     .get('http://localhost/formaeduca/retrieve-data.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;
     },
     (error : any) =>
     {
        console.dir(error);
     });
  }
  acceder() : void{
    for (let item in this.items){
      if(this.items[item].Usuario === this.nombre && this.items[item].Password === this.pass){
        console.log("acceso")
      }
    }
    
  }
}
