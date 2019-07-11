---
title: APIs
description: "Application Program Interface"
---

WebPivotTable provides lots of APIs for developers to call them from hosted web page or web application.
For example, developers can use these APIs to load source data from any kind of
resources, or save reports to local files or server then reload them in future, etc.

<h2 id="how-to-call-apis"> How to call APIs? </h2>

*WebPivotTable APIs are all asynchronous function and return as a Promise.

Below is standard syntax to call APIs:  

```javascript
var wpt = document.getElementsByTagName('web-pivot-table')[0];

wpt[apiName](params1, params2, ..., paramsn)
.then( function(response) {}, function(error) {})
;
```

First, we need get WebPivotTable object, then call api method passing with a list of params.

For asynchronous api, we can chain a then function with success callback and error callback.<br><br>
  

<h2 id="set-locale">`setLocale`</h2>

```javascript
wpt.setLocale(locale);
```
| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`locale`          | `string`      | no         | locale code                 |


<h2 id="set-options"> `setOptions` </h2>

```javascript
wpt.setOptions(options);
```
| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`options`         | `object`      | no         |  customize options          |

<div class="Alert Alert--info">
This `setOptions` API is a major way to customize WebPivotTable, see [Options](/doc/options) for more details.
</div>

<h2 id="set-data-array"> `setWptFromDataArray`   </h2>

```javascript
wpt.setWptFromDataArray(attrArray, dataArray, url, type);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `attrArray`      | `array`       | no         | Array of attributes. example: ["department", "area", "cost", ...]                                                                      |
| `dataArray`      | `array`       | no         | Array of data rows, each row is also an array of values. example: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]     |
| `url`            | `string`      | yes        | Url for track the source data, This is just for tracking, pass "" if not know or no need.                                              |
| `type`           | `string`      | yes        | type for track the source data, This is just for tracking, pass "" if not know or no need.                                              |
  
Load source data from data array
  
Notes:  
- This is major API to load source data into WebPivotTable, it was
  used by `setWptFromCsvUrl` and `setWptFromExcelUrl` internally.  Actually, developers
  can load any kinds of data from any other resources, like SQL databases,
  and format them as attrArray and dataArray, then load them into WebPivotTable.


<h2 id="set-csv-url"> `setWptFromCsvUrl`   </h2>

```javascript
wpt.setWptFromCsvUrl(url, delimiter);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `url`            | `string`      | no         | URL String of CSV file           |
| `delimiter`      | `string`      | yes        | separator char for CSV file, default is ","     |
  
Load source data from CSV file URL
  

<h2 id="set-excel-url"> `setWptFromExcelUrl`   </h2>

```javascript
wpt.setWptFromExcelUrl(url, delimiter);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `url`            | `string`      | no         | URL String of CSV file           |
| `delimiter`      | `string`      | yes        | separator char for CSV file, default is ","     |
  
Load source data from excel file URL
  

<h2 id="set-web-service"> `setWptFromWebService`   </h2>

```javascript
wpt.setWptFromWebService(url);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `url`            | `string`      | no         | URL String of web service endpoint         |
  
Load source data from web service URL
  

<h2 id="set-gss-url"> `setWptFromGoogleSpreadSheet`   </h2>

```javascript
wpt.setWptFromGoogleSpreadSheet(url);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `url`            | `string`      | no         | URL String of google spread sheet           |
  
Load source data from google spreadsheet URL
  


<h2 id="set-wpt-string"> `setWptFromWptUrl`   </h2>

```javascript
wpt.setWptFromWptUrl(url);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `url`            | `string`      | no         | Url of  wpt file              |
  
Load WPT format String
  


<h2 id="set-wpt"> `setWpt`   </h2>

```javascript
wpt.setWpt(wpt);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `wpt`            | `string\object` | no         | pre-saved WPT format String or JSON object           |
  
Load WPT format String or JSON Object with updated first source data
  

<h2 id="set-olap-cube"> `setWptFromOlapCube`   </h2>

```javascript
wpt.setWptFromOlapCube(olapData);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `olapData`       | `Object`      | no         | Object of OLAP Cube Information           |
  
Load OLAP Cube
  
```
olapData: {
  xmlaUrl: "Xmla server url",
  dataSourceInfo: "Data source info",
  catalog: "Catalog name",
  cubeName: "Cube name"
}
```

<h2 id="generate-wpt-string"> `generateWptString`   </h2>

```javascript
wpt.generateWptString(ignoreData);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `ignoreData`     | `bool`        | no         | if equal to true, ignore data and fields, only save options and controls           |
  
Generate WPT format string
  

<h2 id="generate-wpt-json"> `generateWptJSON`   </h2>

```javascript
wpt.generateWptJSON(ignoreData);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `ignoreData`     | `bool`        | no         | if equal to true, ignore data and fields, only save options and controls           |
  
Generate WPT format JSON object
  

<h2 id="set-source-object"> `setSourceObject`   </h2>

```javascript
wpt.setSourceObject(source);
```
| Param Name       | Param Type    | Optional   | Description                                                                                                                                                                                                                                                                                 |
|------------------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `source`         | `object`      | no         | use external object as data source           |
  
<h2 id="get-source-object"> `getSourceObject`   </h2>

```javascript
wpt.getSourceObject();
```
return Source object  
