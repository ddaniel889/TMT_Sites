

export interface Viajes {
  searches:Array<string>,
  type:string,
  includes: string,
  from_airports:Array<string>,
  to_airports:Array<string>,
  go_date:string,
  go_date_flexibility?:string,
  back_date?:string,
  back_date_flexibility?:string,
  adults:number,
  children?:number,
  babies?:number,
  cabin:string
}

