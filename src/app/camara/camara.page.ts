import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(private router: Router) { }

  gotoHome(){
    this.router.navigate(['/tablinks']);
  }

  ngOnInit() {
  }

}
