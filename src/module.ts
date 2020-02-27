// import { AppPlugin } from '@grafana/data';
// import { AppSettings } from './utils/types';
import { CtrlConfig } from './config/CtrlConfig';

import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
// import delle pagine da inserire nel plugin


export {
  Page1,
  Page2,
  Page3,
  CtrlConfig
}


// ============================================
// La documentazione sulle classi/tipi/funzioni
// di Grafana sono praticamente inesistenti
// ============================================
// Gli app plugin sono dei plugin che permettono
// di avere in un unico posto plugin per data 
// source e plugin per pannelli. Permette di
// creare pagine custom per la documentazione,
// signup forms o controllo di servizi per http server
// ============================================
// I plugin dei pannelli e delle data source saranno 
// visualizzabili come normali plugin mentre la pagina 
// dell'app saranno disponibili nel menu principale
// ============================================