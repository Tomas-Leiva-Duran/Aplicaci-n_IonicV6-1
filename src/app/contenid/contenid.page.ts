import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenid',
  templateUrl: './contenid.page.html',
  styleUrls: ['./contenid.page.scss'],
})
export class ContenidPage implements OnInit {

  id: any;
  finalid: number;
  multiMedia: any = [];
  name: string;
  image: string;
  description: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }


  ngOnInit() {
    console.log('holaaaaaaaaaaaaaaaaaaaa');
    this.getMultiMedias().subscribe(res =>{
      console.log('Res',res);
      this.multiMedia = res;

      this.name = this.multiMedia[this.finalid].name;
      this.image = this.multiMedia[this.finalid].Image;
      this.description = this.multiMedia[this.finalid].description;
      console.log('name',this.name);
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.finalid = this.id - 1;
    console.log('id',this.id);
  }

  getMultiMedias() {
    return this.http
    .get('assets/files2/inicios.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }

  gotoHome(){
    this.router.navigate(['/tablinks']);
  }
}
