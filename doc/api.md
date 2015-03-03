[Back to Index](./index.md)

## APIs

### Create webPivotTable object with some customize options

    var myOptions = {
       uiFlags: {
          openWptBtn: 0,
          saveWptBtn: 0
       }
    };
    var webPivotTable = new WebPivotTable({
        customOptions:myOptions
    },"wpt-container");


### Set customize options after webPivotTable had been created on page

    webPivotTable.setOptions(customOptions);

        /** 
        *  Set custom options.
        *  @param {Object} customOptions - customize options 
        */
    
### Change language locale
  
    webPivotTable.changeLocale(locale);
    
        /** 
        * Change language locale.
        * @param {string} locale - language locale string
        *      available values: 'en','zh','es','pt',‘fr','de','ar','ru','it',
        *                        'nl','el','he','hi','hu','sv','ko','ja'
        * 
        * if locale is null, will set locale to webPivotTable.options.locale
        * changeLocale() can be used as a method to refresh whole component. 
        */

If you changed some internal data structure through APIs, you want to refreah whole component, 
you can call ` webPivotTable.changeLocale(); ` . Actually, most of setting APIs, like 
setOptions, setCsvUrl, will call this internally, and you don't need call it again.


### Load source data from data array

    webPivotTable.setDataArray(attrArray, dataArray, dataUrl, wptObject);

        /** 
        * Load source data from data array 
        * @param {Array} attrArray - Array of attributes
        *       example: ["department", "area", "cost", ...]
        * @param {Array} dataArray - Array of data rows, each row is also an array of values
        *       example: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]
        * @param {String} dataUrl - optional, Url for track the source data
        *       This is just for tracking, pass "" if not know or no need. 
        * @param {Object} wptObject - optional, pre-saved wpt JSON object
        * 
        * if wptObject is not null, use it as pivot selections 
        */

This is major API to load source data into WPT component, it was used by setCsvUrl and setCsvRawData internally.
Actually, developers can load any kinds of data from any other resources, like SQL databases, and format them
as attrArray and dataArray, then load them into WPT component.


### Load source data from CSV file URL

    webPivotTable.setCsvUrl(url, separator, wptObject);

        /** 
        * Load source data from CSV file URL 
        * @param {string} csvUrl - URL String of CSV file
        * @param {string} separator - optional, separator char for CSV file, default is ","
        * @param {Object} wptObject - optional, pre-saved wpt JSON object
        * 
        * if wptObject is not null, use it as pivot selections 
        */
    
### Load source data from CSV RAW data

    webPivotTable.setCsvRawData(csvRawData, separator, wptObject);

        /** 
        * Load source data from CSV RAW data 
        * @param {string} csvRawData - CSV RAW data
        *    https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html
        * @param {string} separator - optional, separator char for CSV RAW data, default is ","
        * @param {Object} wptObject - optional, pre-saved wpt JSON object
        * 
        * if wptObject is not null, use it as pivot selections 
        */

WPT component use
<a href="https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html" target="_blank">dojox.data.CsvStore</a>
to handle CSV RAW data, please reference that to under CSV RAW data.


### Load WPT format String 

    webPivotTable.setWptString(wptString);

        /** 
        * Load WPT format String 
        * @param {String} wptString - pre-saved WPT format string
        */
    
### Load WPT format JSON Oject 

    webPivotTable.setWptObject(wptObject);

        /** 
        * Load WPT format JSON Oject 
        * @param {Object} wptObject - pre-saved WPT format JSON object
        */
    
### Load WPT format String or JSON Oject with updated first source data

    webPivotTable.setWpt(wpt, dataObject);

        /** 
        * Load WPT format String or JSON Oject with updated first source data
        * @param {String/Object} wpt - pre-saved WPT format String or JSON object
        * @param {Object} dataObject - optional, if exist, use this as data and fields of first source
        *        format {data:[], fields:[]}
        */

### Load WPT format String or JSON object with data array as updated first source data

    webPivotTable.setWptWithDataArray(wpt, attrArray, dataArray);

        /** 
        * Load WPT format String or JSON object with data array as updated first source data
        * @param {String/Object} wpt - pre-saved WPT format String or JSON object
        * @param {Array} attrArray - Array of attributes
        *       example: ["department", "area", "cost", ...]
        * @param {Array} dataArray - Array of data rows, each row is also an array of values
        *       example: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]
        */


### Load WPT format String or JSON Oject with updated first source data

    webPivotTable.setWptWithCsvUrl(wpt, csvUrl, separator);

        /** 
        * Load WPT format String or JSON object with CSV Url as updated first source data
        * @param {String/Object} wpt - pre-saved WPT format String or JSON object
        * @param {string} csvUrl - URL String of CSV file
        * @param {string} separator - optional, separator char for CSV RAW data, default is ","
        */

### Load WPT format String or JSON object with CSV RAW data as updated first source data

    webPivotTable.setWptWithCsvRawData(wpt, csvRawData, separator);

        /** 
        * Load WPT format String or JSON object with CSV RAW data as updated first source data
        * @param {String/Object} wpt - pre-saved WPT format String or JSON object
        * @param {String} csvRawData - CSV RAW data
        *    https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html
        * @param {string} separator - optional, separator char for CSV RAW data, default is ","
        */



### Load OLAP Cube

    webPivotTable.setOlapCube(olapData);

        /** 
        * Load OLAP Cube
        * @param {Object} olapData - Object of OLAP Cube Information
        *     {
        *         options: {
        *             sync : _this.options.olap.sync,
        *             timeout : _this.options.olap.timeout,
        *             xmlaProxyEnabled: _this.options.olap.xmlaProxyEnabled,
        *             xmlaProxy: _this.options.olap.xmlaProxy
        *         },
        *         xmlaUrl: "Xmla server url",
        *         DataSourceInfo: "Data source info",
        *         Catalog: "Catalog name",
        *         CubeName: "Cube name"
        *     }
        */



### Generate WPT format string

    var wptString = webPivotTable.generateWptString(ignoreData);

        /** 
        * Generate WPT format string to be saved into wpt file.
        * @param {boolean} ignoreData 
        *        if equal to true, ignore data and fields, only save options and controls
        * @return {string} 
        */
    
### Generate WPT format JSON object

    var wptObject = webPivotTable.generateWptJSON(ignoreData);

        /** 
        * Generate WPT format JSON object
        * @param {boolean} ignoreData 
        *        if equal to true, ignore data and fields, only save options and controls
        * @return {Object} 
        */
    
### Generate wpt string from data array with default options and controls

    webPivotTable.generateWptStringFromDataArray(attrArray, dataArray, dataUrl, callback, errCallback);

        /** 
        * Generate wpt string from data array with default options and controls
        * @param {Array} attrArray - Array of attributes
        *       example: ["department", "area", "cost", ...]
        * @param {Array} dataArray - Array of data rows, each row is also an array of values
        *       example: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]
        * @param {String} dataUrl - optional, Url for track the source data
        *       This is just for tracking, pass "" if not know or no need. 
        * @param {Function} callback - Callback function when success
        *           callback = function(wptString)
        * @param {Function} errCallback - Callback function when error
        *           errCallback = function(error)
        */
    
### Generate wpt string from Csv Url with default options and controls

    webPivotTable.generateWptStringFromCsvUrl(csvUrl, separator, callback, errCallback);

        /** 
        * Generate wpt string from Csv Url with default options and controls
        * @param {string} csvUrl - URL String of CSV file
        * @param {string} separator - optional, separator char for CSV RAW data, default is ","
        * @param {Function} callback - Callback function when success
        *           callback = function(wptString)
        * @param {Function} errCallback - Callback function when error
        *           errCallback = function(error)
        */

### Generate wpt string from Csv RAW data with default options and controls

    webPivotTable.generateWptStringFromCsvRawData(csvRawData, separator, callback, errCallback);

        /** 
        * Generate wpt string from Csv RAW data with default options and controls
        * @param {String} csvRawData - CSV RAW data
        *    https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html
        * @param {string} separator - optional, separator char for CSV RAW data, default is ","
        * @param {Function} callback - Callback function when success
        *           callback = function(wptString)
        * @param {Function} errCallback - Callback function when error
        *           errCallback = function(error)
        */
