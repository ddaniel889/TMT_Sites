import { Component, OnInit, ViewChild, ElementRef, Renderer2,AfterViewInit } from '@angular/core';

@Component({
  selector: 'praia-autobuses',
  templateUrl: './autobuses.component.html',
  styleUrls: ['./autobuses.component.scss']
})
export class AutobusesComponent implements OnInit,AfterViewInit {

  @ViewChild('iframe') iframe: ElementRef;
  

  constructor(
    private rendered: Renderer2
  ) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() { 
    // TODO: ? Con esto aqui tiene todo el iframe Object
    // ? y puedes modificarlo agregando o quitando
    console.log('iframee', this.iframe.nativeElement);
  
  
  }

}
