import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({

  selector: 'app-notificaciones',
  templateUrl: './Notificaciones.page.html',
  styleUrls: ['./Notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  token= localStorage.getItem('token');
  permisoss: boolean;
  searchedNotificaciones: any;
  notificacion: any = [];

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit() {
    console.log('token', this.token);
    this.permisoss = true;
    this.getNotificaciones().subscribe(res =>{
      console.log('Res',res);
      this.notificacion = res;
      this.searchedNotificaciones = this.notificacion;
    });
  }
  getNotificaciones() {
    return this.http
    .get('assets/files2/notificaciones-prub.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.getNotificaciones();
      event.target.complete();
    }, 2000);
  }
/*
  searchBuscador(event){
    const text = event.target.value;
    this.searchedNotificaciones = this.notificacion;

    if(text && text.trim() !== '' ){
      this.searchedNotificaciones = this.searchedNotificaciones.filter(
        (user: any)=>(user.name.toLowerCase().indexOf(text.toLowerCase()) > -1));
      }
    }
*/
}
