# App Plugin per Grafana
### Author: VRAM Software
#### Cose che ho scoperto
- nel file `plugin.json` dentro a `/src` bisogna includere le pagine dell'app e gli altri plugin che si vogliono inserire.
  - Le pagine dell'app possono essere scritte in react
  - La pagina per abilitare il plugin deve essere in angular

- nel file `module.ts` bisogna: 
  - creare un oggetto `AppPlugin`
  - settare la pagina radice con `.setRootPage(NomeComponentePagina)`
  - aggiungere le rimanenti pagine con `.addConfigPage({})`
  - bisogna inoltre esportare la pagina di Config che è **obbligatoria**

I plugin che vogliamo inserire devono essere inseriti nella seguente struttura:
```
src
    |- config
        |- react           // files delle pagine in React
            Page1.tsx
            Page2.tsx
            RootPage.tsx
        config.html        // template html per config.ts
        config.ts          // classe per gestire abilitazione plugin
    |- panels              // cartella che contiene i plugin di tipo panel
        |- panel1          // cartella che contiene il plugin panel1
            module.ts
            plugin.json
            |- react
                Panel.tsx
    |- datasources         // cartella che contiene i plugin di tipo dataS
        |- datasource1
    plugin.json            // file .json che include gli altri plugin
    module.ts              // entry point del plugin di tipo app
```


Il resto è un grande e grosso BOH