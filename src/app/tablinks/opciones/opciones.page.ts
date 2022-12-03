import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  constructor(private router: Router) { }

  gotoHome(){
    this.router.navigate(['/tablinks']);
  }

  ngOnInit() {
  }

}
