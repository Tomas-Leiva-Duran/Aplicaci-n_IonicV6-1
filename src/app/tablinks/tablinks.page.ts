import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  contactos: any = [];
  permisoss: boolean;

  constructor(
    private router: Router,
    private http: HttpClient) { }


    gotoHome(){
    this.router.navigate(['/tablinks']);
  }

  ngOnInit() {
    this.permisoss = true;
    console.log('holaaaaaaaaaaaaaaaaaaaa');
    this.getUsers().subscribe(res =>{
      console.log('Res',res);
      this.contactos = res;
    });
  }

  getUsers() {
    return this.http
    .get('assets/files2/contactos.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }


}
