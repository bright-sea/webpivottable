[Back to Index](./index.md)

## Switch languages 

WebPivotTable support switch languages dynamically. In the package, there is a 
"public/brightsea/wpt/nls" directory which includes all language files. There are 
two customize options for you to customize languages:

        locale: 'en',        // Current language locale
                             // it should be set to one of values in below availableLocals

        availableLocales: ['en','zh','tr','es','pt','it'],
                             // Selectable language locales for users to switch languages
                             // possible locales like: 'en','zh','tr', 'es','pt',‘fr','de','ar',
                             // 'ru','it', 'nl','el','he','hi','hu','sv','ko','ja'

The first option "locale" identify current language locale and second option "availableLocales"
list all languages which will be listed in the UI language switch selector. 


## Add a new language 

If you want to  add a new language, it is also quite easy. You only need make a translation of
a language file and do some setting. 
  
### Step1. Create a new locale directory

First you need to create a new locale directory under "public/brightsea/wpt/nls" directory.
For example, if you want to add French, create a "public/brightsea/wpt/nls/fr" directory.
 
        public 
          |- brightsea
              |- wpt
                  |- nls
                      |- de   
                      |   |- WebPivotTable.js  
                      |
                      |- zh   
                      |   |- WebPivotTable.js  
                      |
                      |- fr   
                      |
                      |- WebPivotTable.js   
     
     
### Step2. Add new locale in root language file

Add new locale into root language file  "public/brightsea/wpt/nls/WebPivotTable.js".
For example, add "fr: true" at the bottom of this file:
 
 
    define({
        root: {
    
            Msg_LoadDataFirst: "No data yet, please load data first.",
            Msg_LoadingData: "Loading data, total records: ",
            Msg_LoadingCubeData: "Loading OLAP cube data ",
            Msg_LoadingGSSData: "Loading Google spreadsheet data ",
            Msg_ChooseFieldsFirst: "To build a report, choose fields from Fields List.",
            Msg_UpdatingPivotGridData: "Updating pivot grid data ",
            Msg_QueryCubeRetrieveData: "Querying OLAP cube to retrieve data ",
            Msg_RetrievingMembers: "Retrieving members of attribute ",
            Msg_DrillingThrough: "Drilling through to the cell details ",
            Msg_ExportingReport: "Exporting Report ",
           
            ...
       },
    
        zh: true,
        de: true,
        tr: true,
        pt: true,
        es: true,
        it: true,
        fr: true
    });     
    
### Step3. Copy a language file from other locale directory

Each locale directory includes only one file "WebPivotTable.js", you can copy this from another 
locale directory. For example, copy from "de" directory.

    define({
        Msg_LoadDataFirst: "Keine Daten vorhanden, laden Sie bitte zuerst Daten.",
        Msg_LoadingData: "Daten werden geladen, Anzahl der Zeilen: ",
        Msg_LoadingCubeData: "OLAP-Cube Daten werden geladen ",
        Msg_LoadingGSSData: "Google Spreadsheet Daten werden geladen ",
        Msg_ChooseFieldsFirst: "Um einen Bericht zu erstellen, wählen Sie aus der Felder-Liste.",
        Msg_UpdatingPivotGridData: "Pivot-Tabelle wird aktualisiert ",
        Msg_QueryCubeRetrieveData: "Daten für den OLAP-Cube werden geladen ",
        Msg_RetrievingMembers: "Abrufen von Mitgliedern des Attributs ",
        Msg_DrillingThrough: "Drilling through der Zelldetails ",
        Msg_ExportingReport: "Berichtexport ",
    
        ...    
    });

### Step4. Translate language file

Make a translation of the value of each key in language file.

### Step5. Add new locale into customerize option when you create WebPivotTable object


    var myOptions = {
        availableLocales: ['en','zh','tr','es','pt','it', 'fr'],   
    
        uiFlags: {
            openWptBtn: 0,
            saveWptBtn: 0
        }
    };
    var webPivotTable = new WebPivotTable({
        customOptions:myOptions
    },"wpt-container");





   

