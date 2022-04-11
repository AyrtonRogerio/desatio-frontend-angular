
import { Startup } from './startup';


export interface Pitch {
  id?:number;
  textoPitch: string;
  serie_investimento: string;
  startup: Startup;
}
