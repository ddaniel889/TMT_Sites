import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagina404',
  template: `
    <div class="ps-page--404">

      <div class="container">

        <div class="ps-section__content">

          <img src="./assets/img/404.jpg" alt="">

          <h3>Ohh! página no encontrada</h3>

          <p>Parece que no podemos encontrar lo que estás buscando. Tal vez la búsqueda puede ayudar o volver a<a routerLink="/"> Inicio</a></p>

          <!-- <form class="ps-form--widget-search" action="do_action" method="get">

            <input class="form-control" type="text" placeholder="Search...">

            <button><i class="icon-magnifier"></i></button>

          </form> -->

        </div>

      </div>

    </div>
  `
})
export class Pagina404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
