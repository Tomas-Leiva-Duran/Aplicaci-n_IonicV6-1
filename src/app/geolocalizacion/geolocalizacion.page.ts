import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit{


  latitude: any;
  longitude: any;

  constructor(private router: Router, public navCtrl: NavController, public geolocation: Geolocation){ }

gotoHome(){
    this.router.navigate(['/tablinks']);
}

ngOnInit(){
  this.geolocationNative();
}

geolocationNative(): void{
  this.geolocation.getCurrentPosition().then((geoposition: Geoposition) =>{console.log(geoposition); });
}

usarGps(){
  this.geolocation.getCurrentPosition().then((resp) => {
    console.log(resp);

   }).catch((error) => {
     console.log('Error getting location', error);
   });

   // eslint-disable-next-line prefer-const
   let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
  });

  }

}
