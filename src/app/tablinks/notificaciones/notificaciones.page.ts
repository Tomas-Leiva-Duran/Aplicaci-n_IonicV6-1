import { Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-Notificaciones',
  templateUrl: './Notificaciones.page.html',
  styleUrls: ['./Notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  token= localStorage.getItem('token');
  constructor() { }

  ngOnInit() {
    console.log('token', this.token);
  }

}
