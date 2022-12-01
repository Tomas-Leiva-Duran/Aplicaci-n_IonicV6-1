import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  searchedUser: any;
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
      this.searchedUser = this.contactos;
    });
  }

  getUsers() {
    return this.http
    .get('assets/files2/contactos.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }
 /*.pipe(map((res: any) => res.data));

 */
 searchBuscador(event){
  const text = event.target.value;
  this.searchedUser = this.contactos;
  // eslint-disable-next-line eqeqeq
  if(text && text.trim() != '' ){
    // eslint-disable-next-line arrow-body-style
    this.searchedUser = this.searchedUser.filter((user: any)=>{
      return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      // eslint-disable-next-line @typescript-eslint/semi
      })
    }
  }

}

