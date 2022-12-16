import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';

//import{ Geolocation } from ' @ionic-native/geolocation ';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      /*IonicStorageModule.forRoot(),*/AppRoutingModule,
      HttpClientModule],
  providers: [
      Geolocation, Camera,
    { provide: RouteReuseStrategy,
       useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
import { Storage } from ‘@ionic/storage';

export class MyApp {
constructor(private storage: Storage) { }

// set a key/value
storage.set(‘name’, ‘Max');

// Or to get a key/value pair
storage.get(‘age').then((val) => {
console.log( 'Your age is', val);
});
}
*/
