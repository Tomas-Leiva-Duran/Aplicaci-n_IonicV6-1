import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  multiMedia: any = [];

  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    console.log('holaaaaaaaaaaaaaaaaaaaa');
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

}
