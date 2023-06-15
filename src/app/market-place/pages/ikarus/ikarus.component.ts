import { Component, OnInit } from '@angular/core';
import { IkarusService } from './services/ikarus.service';
import { Viajes } from './interfaces/viajes';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,ValidationErrors, AbstractControl } from '@angular/forms';


type InputControl = {

  programa: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  tipo: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  aeroS: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  aeroL: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  aerosDos: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  aerolDos: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  fechaDos: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  programaDos: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  fechaI: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  fechaV: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  adultos: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  ninos: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  bebes: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  cabina: (string | ((control: AbstractControl) => ValidationErrors)[])[];
};


@Component({
  selector: 'praia-ikarus',
  templateUrl: './ikarus.component.html',
  styleUrls: ['./ikarus.component.scss']
})
export class IkarusComponent implements OnInit {
  
  private input: InputControl = {
  
    programa: ['',[Validators.required]],
    tipo: ['',[Validators.required]],
    aeroS: ['', [Validators.required]],
    aeroL: ['', [Validators.required]],
    aerosDos: [''],
    aerolDos: [''],
    fechaDos: [''],
    programaDos: [''],
    fechaI: ['', [Validators.required]],
    fechaV: [''] ,
    adultos: [null, [Validators.required]],
    ninos: [0],
    bebes: [0],
    cabina: ['',[Validators.required]],
  };
  
  public loading: boolean;
  public ikarusForm: FormGroup;
  public respError:boolean;
  public noVuelos: boolean
  public finbError:boolean;
  public buscar:boolean;
  public foutError:boolean;
  public errorSecond:boolean;
  public flighto:boolean;
  public flighti:boolean;
  public flightSecond:boolean;
  public dataFlight : string;
  public repetir:boolean;
  public flightsInb : string[]  = [];
  public flightsOut : string[]  = [];
  public flightTrip : string[]  = [];
  public flightKeyOut : string[]  =  [];
  public flightKeyIn : string[]   =  [];
  public arrayFlightOut : string[]  = [];
  public arrayFlightIn : string[]  = [];
  public arrayTrip : string[]  = [];
  public producto:boolean = false;
  public type:string;
  public two:boolean = false;
  public multipl:boolean;
  public ciudades : string[]  = [];
  public iataCiudades : string[]  = [];
  public responseData1: any;
  public responseData2: any;
 

  constructor( public fb: FormBuilder, private ikarus:IkarusService, public router: Router) { }

  ngOnInit(): void {
    this.run();
    //Obtener lista de destino y código IATA
    this.ikarus.getFlight("/assets/airports.json").subscribe( data => {
     let ciudades  = data; 
     this.iataCiudades = ciudades[0].data;
    });
  }

   //Inicializa formulario para búsqueda de vuelos
  private run = (): void => {
    this.createForm();
  }

    //Crea formulario de búsqueda de vuelos
  public createForm = (): void => {
    this.ikarusForm = this.fb.group(this.input);
  
  }

  // Obtener vuelos disponibles según búsqueda de destino por aerolínea y tipo de vuelo
  public postVuelos = (): void => {
    this.loading = true;
    this.repetir = false;
    this.buscar = true; 
    const object:Viajes = {
     "searches":[this.programa.value],
     "type":"award_flight_money",
     "includes":"none",
     "from_airports":[this.aeroS.value],
     "to_airports":[this.aeroL.value],
     "go_date":this.fechaI.value,
     "go_date_flexibility":"0",
     "back_date":this.fechaV.value,
     "back_date_flexibility":"",
     "adults":this.adultos.value,
     "children":this.ninos.value,
     "babies":this.bebes.value,
     "cabin":this.cabina.value
    };

   if( this.type == 'multiple'){
     const objectTrip:Viajes = {
     "searches":[ this.programaDos.value],
     "type":"award_flight_money",
     "includes":"none",
     "from_airports":[this.aerosDos.value],
     "to_airports":[this.aerolDos.value],
     "go_date":this.fechaDos.value,
     "go_date_flexibility":"0",
     "back_date":this.fechaV.value,
     "back_date_flexibility":"",
     "adults":this.adultos.value,
     "children":this.ninos.value,
     "babies":this.bebes.value,
     "cabin":this.cabina.value
  };

   //Obtener vuelos disponibles para dos trayectos de 1 viaje
    this.ikarus.requestDataTrip(object,objectTrip).subscribe(responseList => {
    this.responseData1 = responseList[0];
    let dataDecrypt =  this.responseData1.urls;
    const multiplus = dataDecrypt.multiplus;
    const smiles = dataDecrypt.smiles;
    const azul = dataDecrypt.tudo_azul;
    //comprueba resultados de cada programa de fidelidad para luego obtener los vuelos
    if(smiles !== undefined){
      this.getResults(smiles);
     }else if(multiplus !== undefined){
     this.getResults(multiplus);
    }else{
      this.getResults(azul);
   }
    this.responseData2 = responseList[1];
    let dataresponse2 =  this.responseData1.urls;
    const multiplus2 = dataresponse2.multiplus;
    const smiles2 = dataresponse2.smiles;
    const azul2 = dataresponse2.tudo_azul;
    if(smiles2 !== undefined){
    this.getTrip(smiles2);
     }else if(multiplus2 !== undefined){
    this.getTrip(multiplus2);
   }else{
    this.getTrip(azul2);
  }
},
error => {
  console.log(error);
});

 }else{  
 //Buscar vuelos según destino por aerolínea,tipo y programa de fidelidad para obtener url de vuelos disponibles
 this.ikarus.postFlight(object).subscribe( data => { 
  this.respError = (data===undefined)?true:false;
  this.noVuelos = (data.urls.length === 0)?true:false;
  this.buscar = false;
  let error = data.messages;
  console.log(error);
  let dataDecrypt = data.urls;
  const multiplus = dataDecrypt.multiplus;
  const smiles = dataDecrypt.smiles;
  const azul = dataDecrypt.tudo_azul;
  if(smiles !== undefined){
    //vuelos para smiles
    this.getResults(smiles);
  }else if(multiplus !== undefined){
    //vuelos para multiplus
    this.getResults(multiplus);
  }else{
    //vuelos para azul
    this.getResults(azul);
   }
  },
   error => {
    console.log(error);
  });
}
}

 //Busca luego de 5 segundos la url de resultados de cada programa de fidelidad para extraer los vuelos de salida y llegada de un trayecto
 public getResults = (results:string):void => {
  const timeout = setTimeout(() => {
    clearTimeout(timeout) 
      this.ikarus.getFlight(results).subscribe( data => {
      console.log(data);
      this.buscar = false;
      this.repetir = false;
      this.producto = true;
      this.dataFlight = data.status;
      if(this.dataFlight == 'loading'){
        this.repetir = true
        this.loading = false;
      }
      this.flightsInb =  data.flights.inbound;
      if(this.flightsInb.length === 0){
        this.finbError = true
      }else{
        this.flighti = true;
        this.flightKeyIn = Object.keys(this.flightsInb);
        //vuelos de regreso
        for(let item in this.flightsInb){ 
         this.arrayFlightIn.push(this.flightsInb[item]);
        }
      }
      this.flightsOut =  data.flights.outbound;
      if(this.flightsOut.length === 0){
        this.foutError = true
      }else{
        this.flighto = true;
        this.flightKeyOut = Object.keys(this.flightsOut);
        //vuelos de salida
        for(let item in this.flightsOut){
          this.arrayFlightOut.push(this.flightsOut[item]);
        }
      }
    });
  },5000);
}

//Extrae  vuelos de ida o de vuelta disponibles para el segundo trayecto de la url obtenida
public getTrip = (results:string):void => {
  const timeout = setTimeout(() => {
    clearTimeout(timeout) 
    this.ikarus.getFlight(results).subscribe( data => {
     console.log(data);
      this.buscar = false;
      this.repetir = false;
      this.producto = true;
      this.dataFlight = data.status;
      if(this.dataFlight == 'loading'){
        this.repetir = true
        this.loading = false;
      }
     this.flightTrip =  data.flights.outbound;
      if( this.flightTrip.length === 0){
        this.errorSecond = true
      }else{
        this.flightSecond = true;
        for(let item in  this.flightTrip){
          this.arrayTrip.push( this.flightTrip[item]);
         }
        }
       });
  },5000);
}

//reinicia nueva búsqueda
public volver = ():void => {
  location.reload();
}

//Comprueba modalidad de viaje seleccionada
 public selectTravel = (event):void => { 
  this.type = event.target.value;
  if(this.type ==='idaVuelta'){
    this.two = true;
  }else if(this.type ==='multiple'){
    this.two = false;
    this.multipl = true;
  }
}
 
  get programa(): FormControl { return this.ikarusForm.get('programa') as FormControl; }
  get tipo(): FormControl { return this.ikarusForm.get('tipo') as FormControl; }
  get aeroS(): FormControl { return this.ikarusForm.get('aeroS') as FormControl; }
  get aeroL(): FormControl { return this.ikarusForm.get('aeroL') as FormControl; }
  get aerosDos(): FormControl { return this.ikarusForm.get('aerosDos') as FormControl; }
  get aerolDos(): FormControl { return this.ikarusForm.get('aerolDos') as FormControl; }
  get fechaDos(): FormControl { return this.ikarusForm.get('fechaDos') as FormControl; }
  get programaDos(): FormControl { return this.ikarusForm.get('programaDos') as FormControl; }
  get fechaI(): FormControl { return this.ikarusForm.get('fechaI') as FormControl; }
  get fechaV(): FormControl { return this.ikarusForm.get('fechaV') as FormControl; }
  get adultos(): FormControl { return this.ikarusForm.get('adultos') as FormControl; }
  get ninos(): FormControl { return this.ikarusForm.get('ninos') as FormControl; }
  get bebes(): FormControl { return this.ikarusForm.get('bebes') as FormControl; }
  get cabina(): FormControl { return this.ikarusForm.get('cabina') as FormControl; }

}
