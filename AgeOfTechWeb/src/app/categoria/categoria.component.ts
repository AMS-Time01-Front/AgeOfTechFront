import { Component, OnInit } from '@angular/core';
import {HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categories: any;
  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.http.get('http://localhost:5000/api/Categoria')
    .subscribe(response => {
      this.categories = response
      console.log(this.categories)
    });
  }

  novo(template : any){
    this.openModal(template);
    console.log('CLIQUEI NO BOTÃO')
  }

  openModal(template: any){
    template.show();
  }
}
