import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'praia-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {

  @Input('image') image: string;
  @Input('title') title: string;
  

  constructor(public router: Router) { }

  ngOnInit(): void {
    
  }

  public goTo(): void {
    this.router.navigateByUrl('/affinity');
  }

}
