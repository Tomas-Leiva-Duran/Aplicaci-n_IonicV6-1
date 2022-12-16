import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-notificaciones',
  templateUrl: './Notificaciones.page.html',
  styleUrls: ['./Notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  token= localStorage.getItem('token');
  permisoss: boolean;

  constructor() { }

  ngOnInit() {
    console.log('token', this.token);
    this.permisoss = true;
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
