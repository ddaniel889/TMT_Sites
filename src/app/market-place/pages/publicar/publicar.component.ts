import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'praia-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.scss']
})
export class PublicarComponent implements OnInit {
  image: string;
  newsForm: FormGroup;
  files: Array<string> = [];
  noticia: Array<string> = [];
  
  constructor(private fb: FormBuilder,   private router: Router) { }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      titulo: [''],
      descripcion: [''],
      file: ['']
    });
  }

  public onFile(event) {
    for  (var i =  0; i < event.target.files.length; i++)  {  
      this.files.push(event.target.files[i]);
    }
    this.image = this.files[0];
    console.log(this.image);
   }

   guardar():void{
    const object: any = {
    titulo : this.newsForm.value.titulo,
    imagen : this.image,
    descripcion:  this.newsForm.value.descripcion,

   }
   
   this.noticia.push(object);
   console.log(this.noticia);
   this.router.navigate(['/noticias']);
  }
}
