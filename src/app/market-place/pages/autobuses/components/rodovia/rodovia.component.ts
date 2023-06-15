import { Component, OnInit,ViewChild,Renderer2,ElementRef,AfterViewInit,Input } from '@angular/core'; 
import { Plugins } from 'src/app/services/funciones';


@Component({
  selector: 'praia-rodovia',
  templateUrl: './rodovia.component.html',
  styleUrls: ['./rodovia.component.scss']
})
export class RodoviaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.plugins('#exampleModal');
  }

 
  public plugins = (a:string): void => {
   
      Plugins.modalSimple(a);
    
  }
}
