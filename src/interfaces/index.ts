export interface IStructureData {
  nombre: string;
  calle: string;
  numero: number;
  comuna: ICommune;
  contactos: any[];
  coordinates:number[];
  material:string;
  comentarios: string;
  numeroPisos: number;
  deptosPiso: number;
  estacionamiento: boolean;
  pisosEstacionamiento: number;
  basement: boolean;
  basementFloors: number;
  plantaGeneral: boolean;
  planoAscensor: boolean;
  piscina: boolean;
  pisos: any[];
  pisosAscensor:boolean;
  opcionRedSeca: string,
  opcionRedHumeda: string,
  opcionRedInerte: string,
}

export interface IAuthBody {
  email: string;
  structureId: string;
}

interface ICommune {
  name: string;
}