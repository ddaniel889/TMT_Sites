import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'regionSelected'
})
export class RegionSelectedPipe implements PipeTransform {

  transform (value: string) {
    let setRegion;

    switch (value) {

      case '16':
        setRegion = 'Estados Unidos e Canada'
        break

      case '9':
        setRegion = 'Asia'
        break

      case '10':
        setRegion = 'Europa'
        break

      case '17':
        setRegion = 'Resto del Mundo'
        break
      case '5':
        setRegion = 'Sudámerica y Caribe'
        break
      case '2':
        setRegion = 'Oceanía'
        break
       case '9':
        setRegion = 'África'
        break
    }

    return setRegion
  }

}