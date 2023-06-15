import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,ValidationErrors, AbstractControl } from '@angular/forms';
import { AffinityService } from './services//affinity.service';
import { URL,LOGIN,PASSWORD } from './services/constants';

 /*  InputControl Cotizacion  */
type InputControl = {
  destino: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  categoria: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  dataInicio: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  dataFim: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  nPax: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  familiar: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  cancelId: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  covidId: (number | ((control: AbstractControl) => ValidationErrors)[])[];
};

/*  InputControl Pasajero    */


type InputControlPasajero = {
  pax: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxSexo: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxDataNasc: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxIdade: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  paxDocTipo: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxDocNum: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  paxEndereco: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxNumero: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  paxCep: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  paxBairro: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxComplemento: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxCidade: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxUF: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxEmail: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  paxTel: (number | ((control: AbstractControl) => ValidationErrors)[])[];
  paxCel: (number | ((control: AbstractControl) => ValidationErrors)[])[];
};


@Component({
  selector: 'praia-affinity',
  templateUrl: './affinity.component.html',
  styleUrls: ['./affinity.component.scss']
})



export class AffinityComponent implements OnInit {


  /* Input Cotizacion */
  private input: InputControl = {
    destino: [null, [Validators.required]],
    categoria: [null,[Validators.required]],
    dataInicio: [null, [Validators.required]],
    dataFim: [null, [Validators.required]],
    nPax: [null, [Validators.required]],
    familiar: [null, [Validators.required] ] ,
    cancelId: [null ],
    covidId: [null ],
  };

  /* Input Pasajero */

  private inputPasajero: InputControlPasajero = {
    pax: [null, [Validators.required,Validators.pattern('[A-Za-z ]*')]],
    paxSexo: [null,[Validators.required]],
    paxDataNasc: [null, [Validators.required]],
    paxIdade: [null, [Validators.required]],
    paxDocTipo: [null, [Validators.required,Validators.pattern('[A-Za-z ]*')]],
    paxDocNum:  [null, [Validators.required]],
    paxEndereco:  [null, [Validators.required,Validators.pattern('[A-Za-z ]*')]],
    paxNumero:  [null, [Validators.required]],
    paxCep: [null, [Validators.required]],
    paxBairro: [null,[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    paxComplemento: [null, [Validators.required,Validators.pattern('[A-Za-z ]*')]],
    paxCidade: [null, [Validators.required,Validators.pattern('[A-Za-z ]*')]],
    paxUF: [null, [Validators.required,Validators.pattern('[A-Za-z ]*')]],
    paxEmail:  [null, [Validators.required,Validators.email]],
    paxTel:  [null, [Validators.required]],
    paxCel:  [null, [Validators.required]],
  };

  public loading:boolean;
  public cotiz:boolean = true;
  public productos:boolean = false;
  public paxProcess :boolean = false;
  public vaucher:boolean = false;
  public productList : string;
  public proceso:boolean = false;
  public doc:boolean = false;
  public cotizacion: FormGroup;
  public emision: FormGroup;
  public codVaucher: string;
  public planId:number;
  public npax:number;
  public documento:string;
  public planoDoc: string;
  public dataDoc: string;
  public diasDoc: string;
  public finDoc: string;
  public bilheteDoc: string;
  public totalDoc:string;
  public cambioDoc: string;
  public cancelDoc: string;
  public inicioDoc:string;
  public cancel: number;
  public familia:number;
  public destinoViaje:number;
  public inicio:string;
  public fin:string;
  public covid : number;
  public procesoId:number;
  public nomPax :string;

  constructor( public fb: FormBuilder,private affinityService:AffinityService) { }

  ngOnInit(): void {
    this.runCotizacion();
    this.runPasajero();
  
  }

   //Inicializa formulario para ver productos
  private runCotizacion = (): void => {
    this.createFormCotizacion();
  }

    //Crea formulario para ver productos
  public createFormCotizacion = (): void => {
    this.cotizacion = this.fb.group(this.input);
  
  }

    //Inicializa formulario para ver emitir póliza según datos de pasajero
  private runPasajero = (): void => {
    this.createFormPasajero();
  }

    //Crea formulario para ingresar datos de pasajero
  public createFormPasajero = (): void => {
    this.emision = this.fb.group(this.inputPasajero);
  
  }

   // Obtener detalle de productos de cobertura e id de producto
  public verProductos = (): void  =>{
    this.loading = true;
    this.npax = this.nPax.value;
    this.familia = this.familiar.value;
    this.inicio = this.dataInicio.value;
    this.fin = this.dataFim.value;
    this.destinoViaje = parseInt(this.destino.value);
    this.cancel = (this.cancelId.value==null)?2220 :this.cancelId.value;
    this.covid = (this.covidId.value==null)?11923 :this.covidId.value;
    let data = `${URL.DESTINO}?mensagem=%3C?xml%20version=%271.0%27%20encoding=%27UTF-8%27%20?%3E%20%3Crequisicao%3E%20%3Clogin%3E${LOGIN.USER}%3C/login%3E%20%3Csenha%3E${PASSWORD.SENHA}%3C/senha%3E%20%3Cdestino%3E${this.destinoViaje}%3C/destino%3E%20%3Ccategoria%3E${parseInt(this.categoria.value)}%3C/categoria%3E%20%3CdataInicio%3E${this.inicio}%3C/dataInicio%3E%20%3CdataFim%3E${this.fin}%3C/dataFim%3E%20%3CnPax%3E${this.nPax.value}%3C/nPax%3E%20%3Cfamiliar%3E${this.familia}%3C/familiar%3E%20%3CcancelId%3E${this.cancel}%3C/cancelId%3E%20%3CcovidId%3E${this.covid}%3C/covidId%3E%20%3C/requisicao%3E&chave=2926&button=Testar`
    this.affinityService.getProduct(data).subscribe(
      result => { 
        console.log(result);  
        this.affinityService.getCotacao("/assets/cotacao.json").subscribe( data => {
          this.productos = true;   
          this.productList  = data.cotacao.plano;
        }
        );  
      }, 
      error => console.log( error));  
}

  // Habilitar nuevo proceso de emisión de póliza
  public nuevoProceso = (id:number): void  =>{//string
    this.proceso = true;
    this.productos = false;
    this.planId = id;
    this.affinityService.getProcess(`${URL.PROCESO}?mensagem=<?xml%20version=%271.0%27%20encoding=%27UTF-8%27%20?>%20<requisicao>%20<login>${LOGIN.USER}</login>%20<senha>${PASSWORD.SENHA}</senha>%20<planoId>${this.planId}</planoId>%20<nPax>${parseInt(this.nPax.value)}</nPax>%20<dataInicio>${this.inicio}</dataInicio>%20<dataFim>${this.fin}</dataFim>%20<destino>${this.destinoViaje}</destino>%20<familiar>${this.familia}</familiar>%20<cancelId>${this.cancel}</cancelId>%20<covidId>${this.covid}</covidId>%20</requisicao>&chave=2926&button=Testar`).subscribe(
      result => {  
      this.procesoId = result.processo.id;
    }, 
     error => console.log( error));
}
  //Ingresar datos de pasajero para la póliza
  public nuevoPax = (): void  =>{
    this.loading = true;
    this.nomPax = this.pax.value;
    this.affinityService.getProcess(`${URL.PAX}?mensagem=<?xml%20version=%271.0%27%20encoding=%27UTF-8%27%20?>%20<requisicao>%20<login>${LOGIN.USER}</login>%20<senha>${PASSWORD.SENHA}</senha>%20<planoId>${this.planId}</planoId>%20<processoId>${this.procesoId}</processoId>%20<pax>${this.nomPax}</pax>%20<paxSexo>${this.paxSexo.value}</paxSexo>%20<paxDataNasc>${this.paxDataNasc.value}</paxDataNasc>%20<paxIdade>${parseInt(this.paxIdade.value)}</paxIdade>%20<paxDocTipo>${this.paxDocTipo.value}</paxDocTipo>%20<paxDocNum>${this.paxDocNum.value}</paxDocNum>%20<paxEndereco>${this.paxEndereco.value}</paxEndereco>%20<paxNumero>${this.paxNumero.value}</paxNumero>%20<paxCep>${this.paxCep.value}</paxCep>%20<paxBairro>${this.paxBairro.value}</paxBairro>%20<paxComplemento>${this.paxComplemento.value}</paxComplemento>%20<paxCidade>${this.paxCidade.value}</paxCidade>%20<paxUF>${this.paxUF.value}</paxUF>%20<paxEmail>${this.paxEmail.value}</paxEmail>%20<paxTel>${parseInt(this.paxTel.value)}</paxTel>%20<paxCel>${parseInt(this.paxCel.value)}</paxCel>%20</requisicao>&chave=2926&button=Testar`).subscribe(
      result => { 
      console.log(result); 
      this.proceso = false;
      this.paxProcess = true;
    }, 
    error => console.log(error));

}
   //Emitir póliza de pasajero
  public emitirProceso = (): void  =>{
    this.affinityService.getProcess(`${URL.EMITIR}?mensagem=<?xml%20version=%271.0%27%20encoding=%27UTF-8%27%20?>%20<requisicao>%20<login>${LOGIN.USER}</login>%20<senha>${PASSWORD.SENHA}</senha>%20<processoId>${this.procesoId}</processoId>%20</requisicao>&chave=2926&button=Testar`).subscribe(
      result => { 
      console.log(result); 
      this.codVaucher = result.emissao.pax[0].voucher;
      this.vaucher = true;
    }, 
    error => console.log( error));
}
   //Generar link de documento de póliza
  public verVaucher = (): void  =>{
    this.affinityService.getProcess(`${URL.VOUCHER}?mensagem=<?xml%20version=%271.0%27%20encoding=%27UTF-8%27%20?>%20<requisicao>%20<login>${LOGIN.USER}</login>%20<senha>${PASSWORD.SENHA}</senha>%20<voucher>${ this.codVaucher}</voucher>%20<idioma>1</idioma>%20</requisicao>&chave=2926&button=Testar`).subscribe(
      result => { 
      console.log(result); 
      this.doc = true;
      this.planoDoc = result.voucher.planoNome
      this.dataDoc = result.voucher.dataEmissao
      this.diasDoc = result.voucher.dias
      this.inicioDoc = result.voucher.inicioVigencia
      this.finDoc = result.voucher.fimVigencia
      this.bilheteDoc = result.voucher.bilhete
      this.totalDoc = result.voucher.totalBRL
      this.cambioDoc = result.voucher.cambio
      this.cancelDoc = result.voucher.cancelado
      this.documento = result.voucher.url;  
    }, 
    error => console.log( error));
}

  // input cotizacion
  get destino(): FormControl { return this.cotizacion.get('destino') as FormControl; }
  get categoria(): FormControl { return this.cotizacion.get('categoria') as FormControl; }
  get dataInicio(): FormControl { return this.cotizacion.get('dataInicio') as FormControl; }
  get dataFim(): FormControl { return this.cotizacion.get('dataFim') as FormControl; }
  get nPax(): FormControl { return this.cotizacion.get('nPax') as FormControl; }
  get familiar(): FormControl { return this.cotizacion.get('familiar') as FormControl; }
  get cancelId(): FormControl { return this.cotizacion.get('cancelId') as FormControl; }
  get covidId(): FormControl { return this.cotizacion.get('covidId') as FormControl; }

  // input Pasajero
  get pax(): FormControl { return this.emision.get('pax') as FormControl; }
  get paxSexo(): FormControl { return this.emision.get('paxSexo') as FormControl; }
  get paxDataNasc(): FormControl { return this.emision.get('paxDataNasc') as FormControl; }
  get paxIdade(): FormControl { return this.emision.get('paxIdade') as FormControl; }
  get paxDocTipo(): FormControl { return this.emision.get('paxDocTipo') as FormControl; }
  get paxDocNum(): FormControl { return this.emision.get('paxDocNum') as FormControl; }
  get paxEndereco(): FormControl { return this.emision.get('paxEndereco') as FormControl; }
  get paxNumero(): FormControl { return this.emision.get('paxNumero') as FormControl; }
  get paxCep(): FormControl { return this.emision.get('paxCep') as FormControl; }
  get paxBairro(): FormControl { return this.emision.get('paxBairro') as FormControl; }
  get paxComplemento(): FormControl { return this.emision.get('paxComplemento') as FormControl; }
  get paxCidade(): FormControl { return this.emision.get('paxCidade') as FormControl; }
  get paxUF(): FormControl { return this.emision.get('paxUF') as FormControl; }
  get paxEmail(): FormControl { return this.emision.get('paxEmail') as FormControl; }
  get paxTel(): FormControl { return this.emision.get('paxTel') as FormControl; }
  get paxCel(): FormControl { return this.emision.get('paxCel') as FormControl; }

}
