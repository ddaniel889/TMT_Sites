import { Component, OnInit } from '@angular/core';
import { SELLER,ENTITY,EMIT_WITH } from './services/constants';
import { FormBuilder, FormGroup, Validators, FormControl,ValidationErrors, AbstractControl,FormArray } from '@angular/forms';
import { Country } from './interfaces/country';
import { Products } from './interfaces/products';
import { Voucher } from './interfaces/voucher';
import {  HttpParams } from '@angular/common/http';
import { Assist365Service } from './services/assist365.service';


/*  coberturas */
type InputControl = {
  region_id: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  country_id: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  days: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  to_year: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  insured: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  age: (any | ((control: AbstractControl) => ValidationErrors)[])[];
  provider: (number | ((control: AbstractControl) => ValidationErrors)[])[];
};


/*  InputControl Poliza   */

type InputControlPasajero = {
  regionId: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  countryId: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  fechaS: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  fechaL: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  nombreB: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  apellidoB: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  diaNacB: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  mesNacB: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  aNacB: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  tipoDoc: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  numDoc: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  countryB: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  residenciaB: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  phoneB: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  emailB: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  nomContactE: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  phoneContactE: (number | ((control: AbstractControl) => ValidationErrors)[])[];
};



@Component({
  selector: 'praia-assist365',
  templateUrl: './assist365.component.html',
  styleUrls: ['./assist365.component.scss']
})
export class Assist365Component implements OnInit {

  public control = new FormControl(['some', 'value']); //aplicar formArray
  public agePax = new FormArray([]);

   /* input cobertura  */
  private input: InputControl = {
    region_id: [null, [Validators.required]],
    country_id: [null,[Validators.required]],
    days: [null, [Validators.required, Validators.minLength(1)]],
    to_year: [null, [Validators.required, Validators.minLength(4)]],
    insured: [1, [Validators.required]],
    age: [null, [Validators.required, Validators.minLength(1)]] ,
    provider: [null, [Validators.required]],
  };

    /* Input Poliza */

    private inputPasajero: InputControlPasajero = {
      regionId: [null, [Validators.required]],
      countryId: [null,[Validators.required]],
      fechaS: [null, [Validators.required]],
      fechaL: [null, [Validators.required]],
      nombreB: [''.toUpperCase(), [Validators.required, Validators.pattern('[A-Za-z]*')]],
      apellidoB:  [''.toUpperCase(), [Validators.required, Validators.pattern('[A-Za-z]*')]],
      diaNacB:  [null, [Validators.required]],
      mesNacB:  [null, [Validators.required]],
      aNacB: [null, [Validators.required]],
      tipoDoc: [null,[Validators.required]],
      numDoc: [null, [Validators.required]],
      countryB: [null, [Validators.required]],
      residenciaB: [null, [Validators.required]],
      phoneB:  [null, [Validators.required]],
      emailB:  [null, [Validators.required,Validators.email]],
      nomContactE:  [''.toUpperCase(), [Validators.required]],
      phoneContactE:  [null, [Validators.required]],
    };

 
  public assits: FormGroup;
  public emitForm: FormGroup;
  public loading: boolean;
  public dateFrom: string;
  public dateTo :string;
  public region:string;
  public countryList : Array<Country> = [];
  public productList : Array<Object> = [];
  public policies  : any;
  public idProducto:string;
  public edadPax : number;
  public reserveId: number;
  public nombrePlan:string;
  public precio:string;
  public poliza:string;
  public link :any;
  public emit:boolean = false;
  public documento: true;
  public cot:boolean = true; 
  public policy:boolean = false;
  public vaucher:boolean = false;
  public productos:boolean = false;

  constructor( public fb: FormBuilder, private assitsService:Assist365Service) { }

  ngOnInit(): void {
    // Obtener listdo de países de  cobertura
    this.assitsService.getAssits('countries').subscribe( data => {
      this.countryList  = data; 
    });
    this.runAssits();
    this.runEmision();
  }

    //Inicializa formulario para ver productos
  private runAssits = (): void => {
     this.createForm();
    }
//
    //Crea formulario de consulta de productos
  public createForm = (): void => {
    this.assits = this.fb.group(this.input);
  }

    //Inicializa formulario para registrar datos y hacer la emisión
  private runEmision = (): void => {
    this.createFormEmision();
  }

  //Crea formulario para registro de datos de emisión
  public createFormEmision = (): void => {
    this.emitForm = this.fb.group(this.inputPasajero);
  }

   // Obtener productos de coberturas
  public verProductos = (): void  => {
    this.loading = true;
    let arrayAge  : Array<string> = [];
    let dataArr:any;
    dataArr = this.agePax;
    this.region = this.region_id.value.toString();
    this.edadPax = this.age.value;
    arrayAge.push(this.age.value);
    const object : Products = {
      region_id: this.region_id.value,
      country_id: this.country_id.value,
      days: this.days.value,
      entity_id: ENTITY.ENTITY_ID, 
      to_year: this.to_year.value,
      insured: this.insured.value,
      age: dataArr,
      provider: this.provider.value,
  };
  console.log(object);
    //Devolver los productos disponibles
  this.assitsService.getAssits('products',object).subscribe( products => {
    this.productList = products;
    this.policy = (this.productList.length === 0)?true:false;
    console.log(this.productList);
    this.cot = false; 
    this.productos = true;
  });
}
  //Obtener la emisión de la póliza
  public emitirPoliza = (): void  => {
    this.emit = false; 
    this.vaucher = true;
    let product = this.idProducto.toString()
    this.dateFrom = this.convertFech(this.fechaS.value);
    this.dateTo = this.convertFech(this.fechaL.value);

  const body = new HttpParams()
    .set('entity', ENTITY.ENTITY_ID)
    .set('seller', SELLER.SELLER_ID)
    .set('product_id', product)
    .set('country', this.countryId.value)
    .set('region', this.regionId.value)
    .set('date_from', this.dateFrom)
    .set('date_to', this.dateTo)
    .set('emitWithAssignament', EMIT_WITH.EMIT_WITH_ASSIGNAMENT)
    .set('beneficiary[name][0]', this.nombreB.value)
    .set('beneficiary[lastname][0]', this.apellidoB.value)
    .set('beneficiary[bday][0]', this.diaNacB.value.toString())
    .set('beneficiary[bmonth][0]', this.mesNacB.value.toString())
    .set('beneficiary[byear][0]', this.aNacB.value.toString())
    .set('beneficiary[doc_type][0]', this.tipoDoc.value)
    .set('beneficiary[doc_number][0]', this.numDoc.value)
    .set('beneficiary[nacionality][0]', this.countryB.value)
    .set('beneficiary[country_residence][0]', this.residenciaB.value)
    .set('beneficiary[phone]', this.phoneB.value)
    .set('beneficiary[email]',  this.emailB.value)
    .set('contact[name]', this.nomContactE.value)
    .set('contact[phone]',this.phoneContactE.value);
   //Servicio de emisión de póliza
   this.assitsService.postAssits('emit',body).subscribe( policy => {
     console.log(policy);
     this.policies = policy;
     let reserve = this.policies.reserve
     this.reserveId = reserve.new_id;
  });
}
 // Emitir vaucher de póliza 
 public emitirVaucher = (): void => {
   let vaucherid :Voucher = 
    {
      reserve_id : this.reserveId

    };  
  // Obtener enlace de descarga de vaucher  
   this.assitsService.getAssits('voucher',vaucherid).subscribe( data => {
     this.documento = true;
     this.link = data.vouchers[0];
     this.poliza = this.link.download_link;
   });
}
  //Aplicar separador de fecha
 public convertFech = (date: string): string =>{
   return date.split('-').reverse().join('/');
}
 //Seleccionar plan de cobertura del listado 
public selectPlan = (plan:string,nombre:string, precio:string): void => {
    this.idProducto = plan;
    this.nombrePlan = nombre;
    this.precio = precio;
    this.productos = false;
    this.emit = true;
    this.loading = true;
}

public crearEdad= ():void => {
  console.log('eDAD');
  this.agePax.push(new FormControl(''));
}


public quitarEdad= (index: number):void => {
  this.agePax.removeAt(index);
}

public volver = ():void => {
  location.reload();
}

// input assits coberturas
get region_id(): FormControl { return this.assits.get('region_id') as FormControl; }
get country_id(): FormControl { return this.assits.get('country_id') as FormControl; }
get days(): FormControl { return this.assits.get('days') as FormControl; }
get to_year(): FormControl { return this.assits.get('to_year') as FormControl; }
get insured(): FormControl { return this.assits.get('insured') as FormControl; }
get age(): FormControl { return this.assits.get('age') as FormControl; }
get provider(): FormControl { return this.assits.get('provider') as FormControl; }
//get Age(): FormControl { return this.assits.get('age') as  FormArray; }


//input assits poliza

get regionId(): FormControl { return this.emitForm.get('regionId') as FormControl; }
get countryId(): FormControl { return this.emitForm.get('countryId') as FormControl; }
get fechaS(): FormControl { return this.emitForm.get('fechaS') as FormControl; }
get fechaL(): FormControl { return this.emitForm.get('fechaL') as FormControl; }
get nombreB(): FormControl { return this.emitForm.get('nombreB') as FormControl; }
get apellidoB(): FormControl { return this.emitForm.get('apellidoB') as FormControl; }
get diaNacB(): FormControl { return this.emitForm.get('diaNacB') as FormControl; }
get mesNacB(): FormControl { return this.emitForm.get('mesNacB') as FormControl; }
get aNacB(): FormControl { return this.emitForm.get('aNacB') as FormControl; }
get tipoDoc(): FormControl { return this.emitForm.get('tipoDoc') as FormControl; }
get numDoc(): FormControl { return this.emitForm.get('numDoc') as FormControl; }
get countryB(): FormControl { return this.emitForm.get('countryB') as FormControl; }
get residenciaB(): FormControl { return this.emitForm.get('countryB') as FormControl; }
get phoneB(): FormControl { return this.emitForm.get('phoneB') as FormControl; }
get emailB(): FormControl { return this.emitForm.get('emailB') as FormControl; }
get nomContactE(): FormControl { return this.emitForm.get('nomContactE') as FormControl; }
get phoneContactE(): FormControl { return this.emitForm.get('phoneContactE') as FormControl; }


}