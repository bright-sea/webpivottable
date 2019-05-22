---
title: Options
---

WebPivotTable use options internally to control its look and feels and behaviours.
Change any of these options will trigger WebPivotTable to refresh and the changes
will take effect immediately. 

Setting these options is the major mechanism to customize WebPivotTable.

<h2 id="how-to-set-options"> How To Set Options? </h2>

There are two ways to set options:

*  ### Passing options as attribute of `web-pivot-table` tag
  ```html
    <web-pivot-table
      options='{"localeFilePath": "./lang/", "locale":"en", "leavePageWarning": 0}'>
    </web-pivot-table>
  ```
  Since attribute of HTML tag or custom element can only be a string, we need stringify options when we
  passing it this way. WebPivotTable will convert this string to javascript object and **deeply merge** it into
  default options.
   
  It is quite easy to make mistake when write options like this, so it might not a good idea to set complicate options this way.
  But if we are using WebPivotTable together with some javascript framework, like React and Vue, we can pass javascript object as props
  and in that case, passing complicate options this way is not an issue.
  
  <div class="Alert Alert--orange">
  Please reference [Integration](/doc/integration) for more details. 
  </div>

* ### Calling `setOptions` API 
  Instead of passing options as attribute of web-pivot-tab tag, we can also set options by calling [setOptions API](/doc/apis/setoptions)
  after WebPivotTable was created on page.   

  ```javascript
    var wpt = document.getElementsByTagName('web-pivot-table')[0];
  
    wpt.$eventBus.$emit('setOptions', {
      localeFilePath: "./lang/",
      locale: "en",
      leavePageWarning: 0
    });
  ```
  Since we can pass javascript object as parameters of `setOptions` API and it will be **deeply merged** into
  default options, this is a better way to set complicate options.

  <div class="Alert Alert--orange">
  `setOption` API is one of serveral APIs which are availabe on both Free edition and Pro edition.  
  </div>
  

<h2 id="leave-page-warning"> `leavePageWarning` </h2>

| Option             | Type      | Default  | Description                 |
|--------------------|-----------|----------|-----------------------------|
| `leavePageWarning` | `bool`    | 1        | When user navigate away from the web page which integrated WebPivotTable, whether we popup a warning dialog or not?       |

If we set it to `true`, it will give end users a chance to save their operations before they leave. 

<img src="../resources/doc/images/leave-page-warning.png" height="200" />

This dialog is a system dialog of browsers, different browsers may have different style of dialogs. The prompt message
comes from language file `Msg_LeavingPage`. 



<h2 id="locale"> `locale` </h2>

| Option             | Type      | Default  | Description                 |
|--------------------|-----------|----------|-----------------------------|
| `locale`           | `string`  | 'en'     | Current language locale, it should be set to one of [availableLocales](#available-locales)       |

[setLocale API](/doc/apis/set-locale) will change this option as well.


<h2 id="locale-file-path"> `localeFilePath` </h2>

| Option             | Type      | Default    | Description                 |
|--------------------|-----------|------------|-----------------------------|
| `localeFilePath`   | `string`  | './lang'   | locale file path. This is a relative path from your `lang` directory to web page html file.       |

  
<h2 id="available-locales"> `availableLocales` </h2>

| Option             | Type      | Default              | Description                 |
|--------------------|-----------|----------------------|-----------------------------|
| `availableLocales` | `array`   | see below            | Selectable language locales for users to switch languages.       |

Default `availableLocales`:
```
  availableLocales: [{
    value: 'en', abbr: 'EN', label:'Lbl_English', attach:" ( english ) "
  },{
    value: 'zh-CN', abbr: 'CN', label:'Lbl_Chinese', attach:" ( 中文 ) "
  },{
    value: 'de', abbr: 'DE', label:'Lbl_German', attach:" ( deutsch ) "
  },{
    value: 'tr-TR', abbr: 'TR', label:'Lbl_Turkish', attach:" ( türk ) "
  },{
    value: 'es', abbr: 'ES', label:'Lbl_Spanish', attach:" ( español ) "
  },{
    value: 'pt', abbr: 'PT', label:'Lbl_Portuguese', attach:" ( português ) "
  },{
    value: 'it', abbr: 'IT', label:'Lbl_Italian', attach:" ( italiano ) "
  // },{
  //   value: 'fr', abbr: 'FR', label:'Lbl_French', attach:" ( français ) "
  // },{
  //   value: 'ar', abbr: 'AR', label:'Lbl_Arabic', attach:" ( العربية ) "
  // },{
  //   value: 'ru-RU', abbr: 'RU', label:'Lbl_Russian', attach:" ( русский ) "
  // },{
  //   value: 'nl', abbr: 'NL', label:'Lbl_Dutch', attach:" ( Nederlands ) "
  // },{
  //   value: 'el', abbr: 'EL', label:'Lbl_Greek', attach:" ( Ελληνικά ) "
  // },{
  //   value: 'he', abbr: 'HE', label:'Lbl_Hebrew', attach:" ( עִבְרִית ) "
  // },{
  //   value: 'hi', abbr: 'HI', label:'Lbl_Hindi', attach:" ( हिन्दीة ) "
  // },{
  //   value: 'hu', abbr: 'HU', label:'Lbl_Hungarian', attach:" ( magyar ) "
  // },{
  //   value: 'sv', abbr: 'SV', label:'Lbl_Swedish', attach:" ( svenska ) "
  // },{
  //   value: 'ko', abbr: 'KO', label:'Lbl_Korean', attach:" ( 한국어 ) "
  // },{
  //   value: 'ja', abbr: 'JA', label:'Lbl_Japanese', attach:" ( 日本語 ) "
  // },{
  //   value: 'vn', abbr: 'VN', label:'Lbl_Vietnamese', attach:" ( Tiếng Việt ) "
  }]
```
| Property   | Type      |  Description                                          |
|------------|-----------|-------------------------------------------------------|
| value      | `string`  | locale code                                           |
| abbr       | `string`  | abbreiation to display on header                      |
| label      | `string`  | message name in language files to show as label       |
| attach     | `string`  | attach to label use original language translation     |


<img src="../resources/doc/images/language-switch.png" width="200" />


Please reference [Internationalization](/doc/internationalization) for more details.
 



<h2 id="server"> `server` </h2>

| Option                     | Type      | Default                                        | Description                 |
|----------------------------|-----------|------------------------------------------------|-----------------------------|
| `server.aboutUrl`          | `string`  | 'https://webpivottable.com'                    | the link when user click logo on About dialog      |
| `server.helpUrl`           | `string`  | 'https://webpivottable.com/doc'                | the link when user click help menu      |
| `server.fileProxyEnabled`  | `bool`    | 1                                              | enable/disable file Proxy       |
| `server.fileProxy`         | `string`  | 'https://demo.webpivottable.com/wpt/fileProxy' |  file Proxy       |
| `server.fileTimeout`       | `number`  | 30000                                          |  file Proxy Timeout       |
| `server.xmlaProxyEnabled`  | `bool`    | 1                                              | enable/disable xmla Proxy               |
| `server.xmlaProxy`         | `string`  | 'https://demo.webpivottable.com/wpt/xmlaProxy' |  xmla Proxy       |
| `server.xmlaTimeout`       | `number`  | 30000                                          |  xmla Proxy Timeout       |
| `server.basicAuthEnabled`  | `bool`    | 0                                              | enable/disable Basic Authentication       |
| `server.username`          | `string`  | 'username'                                     |  Basic Authentication username       |
| `server.password`          | `string`  | 'password'                                     |  Basic Authentication password       |
| `server.rolesEnabled`      | `bool`    | 0                                              | enable/disable roles control       |
| `server.roles`             | `string`  | 'test'                                         |  comma separate roles list       |


<h2 id="limit"> `limit` </h2>

| Option                         | Type      | Default   | Description                 |
|--------------------------------|-----------|-----------|-----------------------------|
| `limit.sourceDataMaxRows`      | `number`  | 100000    | maximum supported rows of source data      |
| `limit.sourceDataMaxColumns`   | `number`  | 1000      | maximum supported columns of source data      |
| `limit.sourceDataMaxDataCells` | `number`  | 10000000  | maximum supported cells of source data      |
| `limit.sheetLayoutMaxRows`     | `number`  | 1000      | sheet layout maximum rows      |
| `limit.sheetLayoutMaxColumns`  | `number`  | 1000      | pivot layout maximum columns      |
| `limit.sheetLayoutMaxDataCells`| `number`  | 10000     | sheet layout maximum data cells      |
| `limit.olapDrillThroughMaxRows`| `number`  | 1000      | Max return rows for each Olap drill through call      |

<h2 id="small-screen-breakpoint"> `smallScreenBreakpoint` </h2>

| Option                    | Type      | Default   | Description                 |
|---------------------------|-----------|-----------|-----------------------------|
| `smallScreenBreakpoint`   | `number`  |  768      | with < 768     Small Screen device (phone)       |


<h2 id="medium-screen-breakpoint"> `mediumScreenBreakpoint` </h2>

| Option                     | Type      | Default  | Description                 |
|----------------------------|-----------|----------|-----------------------------|
| `mediumScreenBreakpoint`   | `number`  |  1080    |  768 <= width <= 1080  (tablet)       |


<h2 id="navigation-panel-width"> `navigationPanelWidth` </h2>

| Option                   | Type      | Default   | Description                 |
|--------------------------|-----------|-----------|-----------------------------|
| `navigationPanelWidth`   | `number`  |  300      |  navigationPanelWidth       |


<h2 id="decimal-point"> `decimalPoint` </h2>

| Option           | Type      | Default  | Description                 |
|------------------|-----------|----------|-----------------------------|
| `decimalPoint`   | `string`  |  '.'     |  decimal point charactor: '.', ','       |

<h2 id="thousands-sep"> `thousandsSep` </h2>

| Option             | Type      | Default | Description                 |
|--------------------|-----------|---------|-----------------------------|
| `thousandsSep`     | `string`  |  ','    |  thousands separator: ',' '.', ' '       |

<h2 id="default-to-distinct-count"> `defaultToDistinctCount` </h2>

| Option                     | Type      | Default  | Description                 |
|----------------------------|-----------|----------|-----------------------------|
| `defaultToDistinctCount`   | `bool`    |  0       |  Default statistic function of String field to distinct count   |


<h2 id="drill-through-by-single-click"> `drillThroughBySingleClick` </h2>

| Option                     | Type      | Default  | Description                 |
|----------------------------|-----------|----------|-----------------------------|
| `drillThroughBySingleClick`| `bool`    |  0       |  dblclick/click to drill through pivot grid or pivot charts   |

<h2 id="defer-layout-exclude-filter"> `deferLayoutExcludeFilter` </h2>

| Option                     | Type      | Default  | Description                 |
|----------------------------|-----------|----------|-----------------------------|
| `deferLayoutExcludeFilter` | `bool`    |  0       |  exclude field sort/filter from defer layout update   |


<h2 id="default-value-format"> `defaultValueFormat` </h2>

| Option                        | Type      | Default  | Description                 |
|-------------------------------|-----------|----------|-----------------------------|
| `defaultValueFormat.category` | `string`  |  WptConstants.VALUE_FORMAT_CATEGORY_NUMBER   |  Default format for negative number   |
| `defaultValueFormat.negative` | `string`  |  WptConstants.VALUE_NEGATIVE_RED_MINUS       |  Default format for negative number   |


<h2 id="ui-flags"> `uiFlags` </h2>

| Option                        | Type      | Default | Description                 |
|-------------------------------|-----------|---------|-----------------------------|
| `uiFlags.header`              | `bool`    | 1       | show/hide header      |
| `uiFlags.source`              | `bool`    | 1       | show/hide Source View      |
| `uiFlags.sheet`               | `bool`    | 1       | show/hide Sheet View      |
| `uiFlags.report`              | `bool`    | 1       | show/hide Report View      |
| `uiFlags.newWpt`              | `bool`    | 1       | show/hide header "Create New WPT" button/menu      |
| `uiFlags.openWpt`             | `bool`    | 1       | show/hide header "Open WPT" button/menu      |
| `uiFlags.saveWpt`             | `bool`    | 1       | show/hide header "Save WPT" button/menu      |
| `uiFlags.message`             | `bool`    | 1       | show/hide header message section      |
| `uiFlags.fullScreen`          | `bool`    | 1       | enable/disable "Full Screen" mode      |
| `uiFlags.localeSwitch`        | `bool`    | 1       | show/hide header locale switch      |
| `uiFlags.menuBar`             | `bool`    | 1       | show/hide header menu bar  Pro Edition only     |
| `uiFlags.setting`             | `bool`    | 1       | show/hide header Setting button/menu     |
| `uiFlags.help`                | `bool`    | 1       | show/hide header Help button/menu  Pro Edition only     |
| `uiFlags.about`               | `bool`    | 1       | show/hide header About button/menu  Pro Edition only     |
| `uiFlags.memoryMode`          | `bool`    | 1       | show/hide Load data view "Memory" Tab      |
| `uiFlags.olapMode`            | `bool`    | 1       | show/hide Load data view "OLAP" Tab      |
| `uiFlags.loadFromCsv`         | `bool`    | 1       | show/hide Load data from csv file      |
| `uiFlags.loadFromExcel`       | `bool`    | 1       | show/hide Load data from excel file      |
| `uiFlags.loadFromGss`         | `bool`    | 1       | show/hide Load data from "Google Spreadsheet"      |
| `uiFlags.loadFromWs`          | `bool`    | 1       | show/hide Load data or wpt from "Web Service"      |
| `uiFlags.saveToLocal`         | `bool`    | 1       | show/hide Save WPT dialog "Save to local" Tab      |
| `uiFlags.saveToServer`        | `bool`    | 1       | show/hide Save WPT dialog "Save to Server" Tab      |
| `uiFlags.sourceEditable`      | `bool`    | 1       | add/rename/remove/change source or not      |
| `uiFlags.sheetEditable`       | `bool`    | 1       | add/rename/remove/change sheet or not      |
| `uiFlags.reportEditable`      | `bool`    | 1       | add/rename/remove/change report or not      |
| `uiFlags.sourceRefine`        | `bool`    | 1       | show/hide source refine data      |
| `uiFlags.sourceExportToCsv`   | `bool`    | 1       | show/hide source "Export to csv"      |
| `uiFlags.sourceExportToExcel` | `bool`    | 1       | show/hide source "Export to Excel"      |
| `uiFlags.sourcePrint`         | `bool`    | 1       | show/hide source "Print"      |
| `uiFlags.sourceFullScreen`    | `bool`    | 1       | show/hide source "Full Screen"      |
| `uiFlags.sheetExpandCollapse` | `bool`    | 1       | show/hide sheet expand/collapse all      |
| `uiFlags.sheetGridChartLayout`| `bool`    | 1       | show/hide sheet grid/chart layout      |
| `uiFlags.heetPivotOnBar`      | `bool`    | 1       | show/hide sheet piovt on bar      |
| `uiFlags.gridOptionsBar`      | `bool`    | 1       | show/hide grid options bar      |
| `uiFlags.gridChangeSize`      | `bool`    | 1       | show/hide grid change size      |
| `uiFlags.gridChangeForm`      | `bool`    | 1       | show/hide grid change form      |
| `uiFlags.gridExportToExcel`   | `bool`    | 1       | show/hide grid "Export to Excel"      |
| `uiFlags.gridExportToHtml`    | `bool`    | 1       | show/hide grid "Export to HTML"      |
| `uiFlags.gridExportToPdf`     | `bool`    | 1       | show/hide grid "Export to PDF"      |
| `uiFlags.gridPrint`           | `bool`    | 1       | show/hide grid "Print"      |
| `uiFlags.gridFullScreen`      | `bool`    | 1       | show/hide grid "Full Screen"      |
| `uiFlags.chartOptionsBar`     | `bool`    | 1       | show/hide chart options bar      |
| `uiFlags.chartChangeSize`     | `bool`    | 1       | show/hide chart change size      |
| `uiFlags.chartChangeType`     | `bool`    | 1       | show/hide chart change type      |
| `uiFlags.chartChangeLabels`   | `bool`    | 1       | show/hide chart change labels      |
| `uiFlags.chartExportToHtml`   | `bool`    | 1       | show/hide chart "Export to HTML"      |
| `uiFlags.chartExportToPdf`    | `bool`    | 1       | show/hide chart "Export to PDF"      |
| `uiFlags.chartPrint`          | `bool`    | 1       | show/hide chart "Print"      |
| `uiFlags.chartFullScreen`     | `bool`    | 1       | show/hide chart  "Full Screen"      |
| `uiFlags.reportExportToHtml`  | `bool`    | 1       | show/hide report "Export to HTML"      |
| `uiFlags.reportExportToPdf`   | `bool`    | 1       | show/hide report "Export to PDF"      |
| `uiFlagsreportt`              | `bool`    | 1       | show/hide report "Print"      |
| `uiFlags.reportFullScreen`    | `bool`    | 1       | show/hide report "Full Screen"      |
| `uiFlags.refineFullScreen`    | `bool`    | 1       | show/hide refine "Full Screen"      |
| `uiFlags.calculatedField`     | `bool`    | 1       | show/hide calculated field function      |


<h2 id="styles"> `styles` </h2>

| Option                        | Type      | Default             | Description                 |
|-------------------------------|-----------|---------------------|-----------------------------|
| `styles.fontSize`             | `string`  | '14px'              | font size      |
| `styles.windowHeaderColor`    | `string`  | 'lightblue'         | header/ dialog header background color      |
| `styles.toolBarColor`         | `string`  | 'aliceblue'         | toolbar background color      |
| `styles.highLightColor`       | `string`  | 'rgb(250, 224, 177)'| highlight background color      |
| `styles.messageColor`         | `string`  | 'orangered'         | message text color      |


<h2 id="file-links"> `fileLinks` </h2>

| Option        | Type     | Default  | Description                 |
|---------------|----------|----------|-----------------------------|
| `fileLinks`   | `array`  | []       | Samples link      |


```
  [
    {
      type: WptConstants.FORMAT_WPT,
      url: "https://webpivottable.com/testfiles/file9.wpt",
      label: "Test file 9 (olap mode)"
    },{
      type: WptConstants.FORMAT_WPT,
      url: "https://webpivottable.com/testfiles/file8.wpt",
      label: "Test file 8 (memory mode)"
    },{
      type: WptConstants.FORMAT_CSV,
      url: "https://webpivottable.com/testfiles/example.csv",
      label: "USA Selection Poll Data (Total 4,000 records)"
    },{
      type: WptConstants.FORMAT_CSV,
      url: "https://webpivottable.com/testfiles/sales.csv",
      label: "Sales Sample Data (Total 2,823 records)"
    },{
      type: WptConstants.FORMAT_CSV,
      url: "https://webpivottable.com/testfiles/FL_insurance.csv",
      label: "Florida Insurance Data (Total 36,634 records)"
    },{
      type: WptConstants.FORMAT_EXCEL,
      url: "https://webpivottable.com/testfiles/example.xls",
      label: "USA Selection Poll Data (Total 4,000 records)"
    },{
      type: WptConstants.FORMAT_EXCEL,
      url: "https://webpivottable.com/testfiles/sales.xls",
      label: "Sales Sample Data (Total 2,823 records)"
    },{
      type: WptConstants.FORMAT_EXCEL,
      url: "https://webpivottable.com/testfiles/FL_insurance.xls",
      label: "Florida Insurance Data (Total 36,634 records)"
    },{
      type: WptConstants.FORMAT_EXCEL,
      url: "https://webpivottable.com/testfiles/example.xlsx",
      label: "USA Selection Poll Data (Total 4,000 records)"
    },{
      type: WptConstants.FORMAT_EXCEL,
      url: "https://webpivottable.com/testfiles/sales.xlsx",
      label: "Sales Sample Data (Total 2,823 records)"
    },{
      type: WptConstants.FORMAT_EXCEL,
      url: "https://webpivottable.com/testfiles/FL_insurance.xlsx",
      label: "Florida Insurance Data (Total 36,634 records)"
    },{
      type: WptConstants.FORMAT_WSWPT,
      url: "https://webpivottable.com/testfiles/sample91.wpt",
      label: "Predefined small CSV WebPivotTable file"
    },{
      type: WptConstants.FORMAT_WSDATA,
      url: "https://demo.webpivottable.com/wpt/wsSample",
      label: "Simple Sample Web Service"
    },{
      type: WptConstants.FORMAT_GSS,
      url: "https://docs.google.com/spreadsheet/pub?key=0Alkl5EEsxBwBdDFLV2Q4a1NWMmw1TXZBRlFMZ1Rxd0E&output=html",
      label: "USA Selection Poll Data (Total 4,000 records)"
    },{
      type: WptConstants.FORMAT_GSS,
      url: "https://docs.google.com/spreadsheet/pub?key=0Alkl5EEsxBwBdHJMOTh4Sm1BSFlDYXRwVW5lc0xuMVE&output=html",
      label: "Sales Sample Data (Total 2,823 records)"
    },{
      type: WptConstants.FORMAT_OLAP,
      url: "http://olap.flexmonster.com/olap/msmdpump.dll",
      label: "Sample Microsoft Analysis Service"
    },{
      type: WptConstants.FORMAT_OLAP,
      url: "http://sampledata.infragistics.com/data/msmdpump.dll",
      label: "Sample Microsoft Analysis Service 1"
    },{
      type: WptConstants.FORMAT_OLAP,
      url: "http://52.4.22.157:8080/mondrian/xmla",
      label: "Sample Mondrian OLAP Server"
    },{
      type: WptConstants.FORMAT_OLAP,
      url: "http://52.4.22.157:8282/icCube/xmla",
      label: "Sample icCube OLAP Server"
    }
  ]
```

<h2 id="custom-handlers"> `customHandlers`  <span class="Alert Alert--orange"> Pro edition only.</span> </h2>

| Option                         | Type        | Default | Description                 |
|--------------------------------|-------------|---------|-----------------------------|
| `customHandlers.newWpt`        | `bool`      | 0       | enable/disable custom "Create new wpt" handler      |
| `customHandlers.openWpt`       | `bool`      | 0       | enable/disable custom "Open wpt" handler      |
| `customHandlers.saveWpt`       | `bool`      | 0       | enable/disable custom "Save wpt" handler      |
| `customHandlers.drillThrough`  | `bool`      | 0       | enable/disable custom "drill Through" handler      |

This custom Handlers only available in Pro Edition.

These options only enable/disable custom handlers, the real custom handler should be passing in event listener.
Please see [How to listen To Events](/doc/events#how-to-listen-to-events) for more details.


<h2 id="custom-buttons"> `customButtons`  <span class="Alert Alert--orange"> Pro edition only.</span> </h2>

| Option               | Type     | Default  | Description                 |
|----------------------|----------|----------|-----------------------------|
| `customButtons`      | `array`  | []       | Add Custom buttons on top bar  |

Each customButton is an object:

| Property            | Type      |  value                |   Description                  |
|---------------------|-----------|-----------------------|--------------------------------|
| position            | `string`  | `left, center, right` | Position on top bar           |
| type                | `string`  | `button, select`      | button type                |
| label               | `string`  | ''                    | label of `button` or placeholder of `select` , if labelTranslation is true, then this label will be come from language files     |
| labelTranslation    | `bool`    | 0                     | whether label come from language files     |
| title               | `string`  | ''                    | title of `button` (not apply to `select`), if titleTranslation is true, then this title will be come from language files     |
| titleTranslation    | `bool`    | 0                     | whether title come from language files     |
| style               | `string`  | ''                    | custom style for button     |
| eventName           | `string`  | ''                    | Event name for onclick (`button`) or onchange (`select`)       |
| value               | `string`  | ''                    | value for `select`       |
| options             | `array`   | []                    | options for `select`       |


```
  [ 
    {
      position: "left",
      type: "button",
      label: "Button1",
      labelTranslation: 0,
      title: "Custom button 1",
      titleTranslation: 0,
      style: "color: #000; font-weight: 300;",
      eventName: "customButton1"
    },
    {
      position: "center",
      type: "button",
      label: "Button2",
      labelTranslation: 0,
      title: "",
      titleTranslation: 0,
      style: "color: #000; font-weight: 300;",
      eventName: "customButton2"
    },
    {
      position: "right",
      type: "select",
      label: "Please select",
      labelTranslation: 0,
      style: "width:200px; margin-top: 1px;",
      value: "value2",
      options: [{
        label: "label1", value: "value1"
      }, {
        label: "label2", value: "value2"
      }, {
        label: "label3", value: "value3"
      }],
      eventName: "customButton3"
    }
  ]
```

This options only add button/select to top bar, the click handler for button and change handler for select
should be passing in event listener.
Please see [How to listen To Events](/doc/events#how-to-listen-to-events) for more details.

For example:

```
  wpt.$eventBus.$on('customButton1', function(payload){
    console.log("custom Button 1 click", payload);
  });

  wpt.$eventBus.$on('customButton2', function(payload){
    console.log("custom Button 2 click", payload);
  });

  wpt.$eventBus.$on('customButton3', function(payload){
    console.log("custom Button 3 (select) changed", payload);
  });
```



<h2 id="filestack"> `filestack` </h2>

| Option                | Type        | Default                     | Description                 |
|-----------------------|-------------|-----------------------------|-----------------------------|
| `filestack.enabled`   | `bool`      | 1                           | enable to use filestack to load data      |
| `filestack.key`       | `string`    | ''                          | filestack application key       |


key: "A4bieoUsyR4yBrNPkFIvrz"  //demo.webpivottable.com

<h2 id="source"> `source` </h2>

```
  source: {                  // Default options for each new source
    navigationPanel: {          // Navigation Panel
      show: 1,                  // show/hide: 1/0
      position:'right',         // position: 'left', 'top', 'right', 'bottom'
      stacked: 0,               // stack fields area or not: 1/0
      width: 300,               // width, only for left and right
      height: 200               // height, only for top and bottom
    },
    fieldsListFilter: "",
    fieldsListSort: 0,          // -1 descend, 1- ascend, 0-no sort
    grid: {
      cellWidth: 120,
      cellHeight: 21
    }
  }
```

<h2 id="report"> `report` </h2>

```
  report: {                  // Default options for each new report
    navigationPanel: {          // Navigation Panel
      show: 1,                  // show/hide: 1/0
      position:'right',         // position: 'left', 'top', 'right', 'bottom'
      stacked: 0,               // stack fields area or not: 1/0
      width: 300,               // width, only for left and right
      height: 200               // height, only for top and bottom
    },
    width: 1000,
    header: {
      width: {
        value: 100,
        measure: "%"   // %, px,
      },
      height: {
        auto: true,
        value: 100,
        measure: "px"
      },
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
      },
      title: {
        enabled: true,
        align: 'center',          // left, center, right
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        },
        fontSize: 28,
        fontWeight: "bold"
      }

    },

    component: {
      width: {
        value: 50,
        measure: "%"   // %, px,
      },
      height: {
        auto: true,
        value: 300,
        measure: "px"
      },
      title: {
        enabled: true,
        align: 'center',            // left, center, right
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        },
        fontSize: 24,
        fontWeight: "bold"
      },
      content:{
        align: 'center',            // left, center, right
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        }
      }
    }
  },
```

<h2 id="sheet"> `sheet` </h2>

```
  sheet:{                    // Default options for each new sheet

    sheet: {
      chartFirst: 0,          // show chart at top/left? 0/1
      pivotLayout: WptConstants.PIVOT_LAYOUT_TILE_VERTICAL,
                              // Pivot Grid and chart layout
                              // 0 -- tile horizontal, 1 -- tile vertical,
                              // 2 -- grid only,  3 -- chart only
      expandRows: 1,          // Expand/collapse All rows
      expandCols: 1,          // Expand/Collapse All columns
      showRowTotals: 1,
      showColTotals: 1,
      showRowSubtotals: 1,
      showColSubtotals: 1,

      navigationPanel: {          // Navigation Panel
        show: 1,                  // show/hide: 1/0
        position:'right',         // position: 'left', 'top', 'right', 'bottom'
        stacked: 0,               // stack fields area or not: 1/0
        width: 300,               // width, only for left and right
        height: 200               // height, only for top and bottom
      },
      deferLayoutUpdate: false,
      fieldsListFilter: "",
      fieldsListSort: 0,          // -1 descend, 1- ascend, 0-no sort
    },

    grid: {
      showSigns: 1,
      showEmptyAsZero: 0,
      compactForm: 1,
      rowHeaderWidth: 200,
      cellWidth: 100,
      cellHeight: 20,
      theme: 'wpt-default',
      noFixedColumns: 0,
      cellStyle: {
        columnHeader: {
          textAlign: 'center',
          backgroundColor: '#bfd6eb',
          fontWeight: 'bold',
        },
        compoundColumn: {
          verticalAlign: "top",
          textAlign: 'left',
          backgroundColor: '#bfd6eb',
          fontWeight: 'bold',
        },
        rowHeader: {
          textAlign: 'left',
          backgroundColor: '#bfd6eb',
          fontWeight: 'bold',
        },
        compoundRow: {
          verticalAlign: "top",
          textAlign: 'left',
          backgroundColor: '#bfd6eb',
          fontWeight: 'bold',
        },
        totalCell: {
          textAlign: 'right',
          backgroundColor: '#72d2df',
        },
        subtotalCell: {
          textAlign: 'right',
          backgroundColor: '#d2e9e9',
        },
        dataCell: {
          textAlign: 'right',
          backgroundColor: '#eee',
        },
        noDataCell: {
          backgroundColor: "#ddd",
        }
      },
    },

    chart: {
      width: 500,
      height: 300,
      combined: true,

      high:{
        theme: 'default', //default, grid, gray, skies, drak-blue, drak-green
        chart:{
          type:'column',  //column, bar, line, spline, area, areaspline, pie
          options3d: {
            enabled: false,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        credits: {
          enabled:false
        },
        exporting: {
          enabled:false
        },
        navigation:{
          buttonOptions:{
            align: 'right',   // left, center, right
            verticalAlign: 'top' // top, middle, bottom
          }
        },
        legend: {
          enabled: true,
          floating: false,
          layout: 'vertical',  //horizontal, vertical
          align: 'right',      // left, center, right
          verticalAlign: 'middle', // top, middle, bottom
          reversed: false
        },
        tooltip:{
          enabled: true,
          shadow: true
        },
        plotOptions: {
          series:{
            stacking: null, //null, 'normal', 'percent'
            dataLabels: {
              enabled: false,
              align:'center',  // left, center, right
              rotation:0    // 0 -- 360
            }
          }
        },
        xAxis: {
          labels:{
            enabled: true,
            align:'left',  // left, center, right
            rotation:45    // 0 -- 360
          }
        }
      }
    }
  }
}
 
```

