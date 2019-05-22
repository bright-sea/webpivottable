---
title: APIs
description: "Application Program Interface"
---

WebPivotTable provides lots of APIs for developers to call them from hosted web page or web application.
For example, developers can use these APIs to load source data from any kind of
resources, or save reports to local files or server then reload them in future, etc.

<h2 id="how-to-call-apis"> How to call APIs? </h2>

*WebPivotTable APIs are implemented based on event bus mechanism. An event bus is a mechanism that allows different components
to communicate with each other without knowing about each other. A component can send an event to the event bus without
knowing who will pick it up or how many others will pick it up. Components can also listen to events on an event bus,
without knowing who sent the events. That way, components can communicate without depending on each other.*


There is an "$eventBus" property of initialed WebPivotTable object. This property is an event bus. We can use it to emit events to
WebPivotTable and trigger some internal logic of WebPivotTable. This event emit mechanism is the key how APIs works.

Below is standard syntax to call APIs:  

```javascript
var wpt = document.getElementsByTagName('web-pivot-table')[0];

wpt.$eventBus.$emit(apiName, params1, params2, ..., paramsn);
```

First, we need get WebPivotTable object, then call $emit method of this object's $eventBus props,
passing with API name together with a list of params.

Since event bus is asynchronous, we should pass callbacks as params if we want to add some logic when API call succeed
 with response or failed with error.<br><br>
  
<div class="Alert Alert--info">
Except "$emit" method, "$eventBus" has an "$on" method to be used to listen to some events emit from WebPivotTable.
See [Events](/doc/events) for more details.    
</div>
  

<h2 id="set-locale">`setLocale`</h2>

```javascript
wpt.$eventBus.$emit("setLocale", locale);
```
| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`locale`          | `string`      | no         | locale code                 |


<h2 id="set-options"> `setOptions` </h2>

```javascript
wpt.$eventBus.$emit("setOptions", options);
```
| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`options`         | `object`      | no         |  customize options          |

<div class="Alert Alert--info">
This `setOptions` API is a major way to customize WebPivotTable, see [Options](/doc/options) for more details.
</div>

<h2 id="set-data-array"> `setDataArray`   </h2>

```javascript
wpt.$eventBus.$emit("setDataArray", attrArray, dataArray, dataUrl, wptObject, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `attrArray`      | `array`       | no         | Array of attributes. example: ["department", "area", "cost", ...]                                                                      |
| `dataArray`      | `array`       | no         | Array of data rows, each row is also an array of values. example: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]     |
| `dataUrl`        | `string`      | yes        | Url for track the source data, This is just for tracking, pass "" if not know or no need.                                              |
| `wptObject`      | `object`      | yes        | pre-saved wpt JSON object                                                                                                              |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Load source data from data array
  
Notes:  
- If `wptObject` is not null, use it as pre-saved pivot selections

- This is major API to load source data into WebPivotTable, it was
  used by `setCsvUrl` and `setCsvRawData` internally.  Actually, developers
  can load any kinds of data from any other resources, like SQL databases,
  and format them as attrArray and dataArray, then load them into WebPivotTable.


<h2 id="set-csv-url"> `setCsvUrl`   </h2>

```javascript
wpt.$eventBus.$emit("setCsvUrl", csvUrl, separator, wptObject, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `csvUrl`         | `string`      | no         | URL String of CSV file           |
| `separator`      | `string`      | yes        | separator char for CSV file, default is ","     |
| `wptObject`      | `object`      | yes        | pre-saved wpt JSON object                                                                                                              |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Load source data from CSV file URL
  
Notes:  
- If `wptObject` is not null, use it as pre-saved pivot selections


<h2 id="set-wpt-string"> `setWptString`   </h2>

```javascript
wpt.$eventBus.$emit("setWptString", wptString, dataObject, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `wptString`      | `string`      | no         | pre-saved WPT format string           |
| `dataObject`     | `object`      | yes        | if exist, use this as data and fields of first source , format {data:[], fields:[]}  |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Load WPT format String
  


<h2 id="set-wpt-object"> `setWptObject`   </h2>

```javascript
wpt.$eventBus.$emit("setWptObject", wptObject, dataObject, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `wptObject`      | `object`      | no         | pre-saved WPT format JSON object           |
| `dataObject`     | `object`      | yes        | if exist, use this as data and fields of first source , format {data:[], fields:[]}  |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Load WPT format JSON Oject
  


<h2 id="set-wpt"> `setWpt`   </h2>

```javascript
wpt.$eventBus.$emit("setWpt", wpt, dataObject, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `wpt`            | `string\object` | no         | pre-saved WPT format String or JSON object           |
| `dataObject`     | `object`      | yes        | if exist, use this as data and fields of first source , format {data:[], fields:[]}  |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Load WPT format String or JSON Object with updated first source data
  

<h2 id="generate-wpt-string"> `generateWptString`   </h2>

```javascript
wpt.$eventBus.$emit("generateWptString", ignoreData, successCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `ignoreData`     | `bool`        | no         | if equal to true, ignore data and fields, only save options and controls           |
| `successCB`      | `function`    | yes        | success callback, in this callback, generate wptString will be published as first parameter                                            |
  
Generate WPT format string
  

<h2 id="generate-wpt-json"> `generateWptJSON`   </h2>

```javascript
wpt.$eventBus.$emit("generateWptJSON", ignoreData, successCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `ignoreData`     | `bool`        | no         | if equal to true, ignore data and fields, only save options and controls           |
| `successCB`      | `function`    | yes        | success callback, in this callback, generate wpt object will be published as first parameter                                            |
  
Generate WPT format JSON object
  

<h2 id="set-olap-cube"> `setOlapCube`   </h2>

```javascript
wpt.$eventBus.$emit("setOlapCube", olapData, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `olapData`       | `Object`      | no         | Object of OLAP Cube Information           |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Load OLAP Cube
  
```
olapData: {
  xmlaUrl: "Xmla server url",
  dataSourceInfo: "Data source info",
  catalog: "Catalog name",
  cubeName: "Cube name"
}
```

<h2 id="set-web-service-data-url"> `setWebServiceDataUrl`   </h2>

```javascript
wpt.$eventBus.$emit("setWebServiceDataUrl", wsDataUrl, wptObject, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `wsDataUrl`      | `string`      | no         | URL String of Web Service Data URL           |
| `wptObject`      | `object`      | yes        | pre-saved wpt JSON object                                                                                                              |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Load source data from WebService URL and create a new WPT with a new Sheet
  
Notes:  
- If `wptObject` is not null, use it as pre-saved pivot selections

- The Web Service should return a JSON object
```
       {
           attrArray: [],
           dataArray: []
       }
```       
- This is a very useful API to access data in SQL databases or any other data storages
    since Web Service access is cross domain and can be provided by any backend technologies.


<h2 id="add-web-service-data-url"> `addWebServiceDataUrl`   </h2>

```javascript
wpt.$eventBus.$emit("addWebServiceDataUrl", wsDataUrl, successCB, errorCB);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `wsDataUrl`      | `string`      | no         | URL String of Web Service Data URL           |
| `successCB`      | `function`    | yes        | success callback, in this callback, current wpt object will be published as first parameter                                            |
| `errorCB`        | `function`    | yes        | error callback, in this callback, error object will be published as first parameter                                                    |
  
Add a new source data from WebService URL
  
Notes:  
- The Web Service should return a JSON object
```
       {
           attrArray: [],
           dataArray: []
       }
```       
- This is a very useful API to access data in SQL databases or any other data storages
    since Web Service access is cross domain and can be provided by any backend technologies.
