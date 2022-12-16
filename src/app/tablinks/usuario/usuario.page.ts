import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  permisoss: boolean;
  searchedUsuario: any;
  usuario: any = [];

  constructor(private router: Router,
    private http: HttpClient
    ) { }

  gotoHome(){
    this.router.navigate(['/tablinks']);
  }

  ngOnInit() {

    this.permisoss = true;
    this.getUsuarios().subscribe(res =>{
      console.log('Res',res);
      this.usuario = res;
      this.searchedUsuario = this.usuario;
    });
  }

  getUsuarios() {
    return this.http
    .get('assets/files2/pruebaDeUsuario.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }

  setUser(user: any) {
    //obtener usuarios para ingresar

  }

}
