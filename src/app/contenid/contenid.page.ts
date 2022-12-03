import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contenid',
  templateUrl: './contenid.page.html',
  styleUrls: ['./contenid.page.scss'],
})
export class ContenidPage implements OnInit {

  id: any;
  multiMedia: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }


  ngOnInit() {
    console.log('holaaaaaaaaaaaaaaaaaaaa');
    this.getMultiMedias().subscribe(res =>{
      console.log('Res',res);
      this.multiMedia = res;
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id',this.id);
  }

  getMultiMedias() {
    return this.http
    .get('assets/files2/inicios.json')
    .pipe(
      map((res: any) =>res.data)
    );
  }
}
