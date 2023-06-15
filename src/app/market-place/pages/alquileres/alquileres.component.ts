import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'praia-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.scss']
})
export class AlquileresComponent implements OnInit {
  private url = 'https://www.agentcars.com/subsite/es-es/site/index';
  public urlSafe: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
