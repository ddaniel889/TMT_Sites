import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectorPaqueteService {

  public selector: EventEmitter<{ nacional: boolean; internacional: boolean; }>;

  constructor() { this.selector = new EventEmitter<{ nacional: boolean; internacional: boolean; }>(); }

}
