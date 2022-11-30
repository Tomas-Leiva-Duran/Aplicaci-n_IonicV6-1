import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {
  multiMedia: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
    ) { }

  loadData($event){

  }


  ngOnInit() {console.log('holaaaaaaaaaaaaaaaaaaaa');
  this.getMultiMedias().subscribe(res =>{
    console.log('Res',res);
    this.multiMedia = res;
  });
  }

  getMultiMedias() {
    return this.http
    .get('assets/files2/inicios.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Objeto selecionado' ,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: 'borrar ',
      message: 'Se a borrado correctamente',
      buttons: ['ok']
  });
  // eslint-disable-next-line @typescript-eslint/semi
  await alert.present()
  // eslint-disable-next-line prefer-const
  let result = await alert.onDidDismiss();
  console.log(result);
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'borrar ',
      message: '¿Estás Segur@? ',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log(' No cancel.')
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Objeto Eliminado.')
          }
        }
      ]
  });
  await alert.present()
  let result = await alert.onDidDismiss();
  console.log(result);
  }

}
