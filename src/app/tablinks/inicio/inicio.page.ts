import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  multiMedia: any = [];
  id: any;
  permisoss: boolean;
  searchedUsuario: any;
  usuario: any = [];

  constructor(private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log('holaaaaaaaaaaaaaaaaaaaa');
    this.getMultiMedias().subscribe(res =>{
      console.log('Res',res);
      this.multiMedia = res;
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id',this.id);
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

  getMultiMedias() {
    return this.http
    .get('assets/files2/inicios.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }

}
