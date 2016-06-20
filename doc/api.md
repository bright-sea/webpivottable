[Back to Index](./index.md)

## APIs


### Refresh UI of whole component

    webPivotTable.refreshUI();
    
        /** 
        * Refresh UI of whole component. 
        * 
        * This is a method to refresh UI after you changed some internal data structure
        * through APIs. 
        * Most of setting APIs, like changeLocale, setOptions, setCsvUrl, etc. 
        * will call this internally, you don't need call it again.
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
        * changeLocale() will call refreshUI automatically. 
        */


### Set customize options after webPivotTable had been created

    webPivotTable.setOptions(customizeOptions);

        /** 
        * Set customize options after webPivotTable had been created
        * @param {Object} customizeOptions - customize options 
        * 
        * Note:
        * 1. to set customize options while create WebPivotTable object, use
        *       var customizeOptions = {
        *           uiFlags: {
        *              openWptBtn: 0,
        *              saveWptBtn: 0
        *           }
        *       };
        *
        *       var webPivotTable = new WebPivotTable({
        *           customOptions:customizeOptions
        *       },"wpt-container"); 
        * 2. You don't need pass options which you accept the default value in parameter.
        * 3. setOptions will call refreshUI automatically
        */


### Load source data from data array

    webPivotTable.setDataArray(attrArray, dataArray, dataUrl, wptObject, successCB, errorCB);

        /**
         * Load source data from data array
         * @param {Array} attrArray - Array of attributes
         *       example: ["department", "area", "cost", ...]
         * @param {Array} dataArray - Array of data rows, each row is also an array of values
         *       example: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]
         * @param {String} dataUrl - optional, Url for track the source data
         *       This is just for tracking, pass "" if not know or no need.
         * @param {Object} wptObject - optional, pre-saved wpt JSON object
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * Note:
         * 1. If wptObject is not null, use it as pre-saved pivot selections
         * 2. This is major API to load source data into WPT component, it was
         *   used by setCsvUrl and setCsvRawData internally.  Actually, developers
         *   can load any kinds of data from any other resources, like SQL databases,
         *   and format them as attrArray and dataArray, then load them into WPT component.
         */


### Load multiple data sources together from data arrays

    webPivotTable.setDataArrays (dataSources, wptObject, successCB, errorCB);
    
        /**
         * Load data from data sources
         * @param {Array} dataSources - Array of data source
         *       example: [{
         *          attr: ["department", "area", "cost", ...],
         *          data: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]],
         *          url: ''
         *       },{
         *          attr: ["department", "area", "cost", ...],
         *          data: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]],
         *          url: ''
         *       }]
         * @param {Object} wptObject - optional, pre-saved wpt JSON object
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * Note:
         * 1. If wptObject is not null, use it as pre-saved pivot selections
         * 2. This is major API to load multiple source data into WPT component, developers
         *   can load any kinds of data from any other resources, like SQL databases,
         *   and format them as attrArray and dataArray, then load them into WPT component.
         */


### Load source data from CSV file URL

    webPivotTable.setCsvUrl(url, separator, wptObject, successCB, errorCB);

        /**
         * Load source data from CSV file URL
         * @param {string} csvUrl - URL String of CSV file
         * @param {string} separator - optional, separator char for CSV file, default is ","
         * @param {Object} wptObject - optional, pre-saved wpt JSON object
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * if wptObject is not null, use it as pivot selections
         */
    
### Load source data from CSV RAW data

    webPivotTable.setCsvRawData(csvRawData, separator, wptObject, successCB, errorCB);

        /**
         * Load source data from CSV RAW data
         * @param {string} csvRawData - CSV RAW data
         *    https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html
         * @param {string} separator - optional, separator char for CSV RAW data, default is ","
         * @param {Object} wptObject - optional, pre-saved wpt JSON object
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * if wptObject is not null, use it as pivot selections
         */

WPT component use
<a href="https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html" target="_blank">dojox.data.CsvStore</a>
to handle CSV RAW data, please reference that to under CSV RAW data.


### Load source data from Web Service Data URL 

    webPivotTable.setWebServiceDataUrl(wsDataUrl, wptObject, successCB, errorCB);

        /**
         * Load source data from Web Service Data URL
         * @param {string} wsDataUrl - URL String of Web Service Data URL
         * @param {Object} wptObject - optional, pre-saved wpt JSON object
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         *
         * Note:
         * 1. The Web Service should return a JSON object
         *       {
         *           attrArray: [],
         *           dataArray: []
         *       }
         * 2. This is a very useful API to access data in SQL databases or any other data storages
         *    since Web Service access is cross domain and can be provided by any backend technologies.
         * 3. If wptObject is not null, use it as pivot selections
         */


### Load WPT format object from Web Service WPT URL 

    webPivotTable.setWebServiceWptUrl(wsWptUrl, dataObject, successCB, errorCB);

        /**
         * Load WPT format object from Web Service WPT URL
         * @param {string} wsWptUrl - URL String of Web Service WPT URL
         * @param {Object} dataObject - optional, if exist, use this as data and fields of first source
         *        format {data:[], fields:[]}
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         *
         * Note:
         * 1. The Web Service should return a WPT format JSON object
         *       {
         *           format: "WPT",
         *           version: "2.0",
         *           sources: [],
         *           sheets: [],
         *           reprots: []
         *       }
         * 2. This is a very useful API to load WPT from SQL databases or any other data storages
         *    since Web Service access is cross domain and can be provided by any backend technologies.
         */



### Load WPT format String 

    webPivotTable.setWptString(wptString, dataObject, successCB, errorCB);

        /**
         * Load WPT format String
         * @param {String} wptString - pre-saved WPT format string
         * @param {Object} dataObject - optional, if exist, use this as data and fields of first source
         *        format {data:[], fields:[]}
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         */
    
### Load WPT format JSON Oject 

    webPivotTable.setWptObject(wptObject, dataObject, successCB, errorCB);

        /**
         * Load WPT format JSON Oject
         * @param {Object} wptObject - pre-saved WPT format JSON object
         * @param {Object} dataObject - optional, if exist, use this as data and fields of first source
         *        format {data:[], fields:[]}
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         */
    
### Load WPT format String or JSON Oject with updated first source data

    webPivotTable.setWpt(wpt, dataObject, successCB, errorCB);

        /**
         * Load WPT format String or JSON Oject with updated first source data
         * @param {String/Object} wpt - pre-saved WPT format String or JSON object
         * @param {Object} dataObject - optional, if exist, use this as data and fields of first source
         *        format {data:[], fields:[]}
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         */

### Load WPT format String or JSON object with data array as updated first source data

    webPivotTable.setWptWithDataArray(wpt, attrArray, dataArray, successCB, errorCB);

        /**
         * Load WPT format String or JSON object with data array as updated first source data
         * @param {String/Object} wpt - pre-saved WPT format String or JSON object
         * @param {Array} attrArray - Array of attributes
         *       example: ["department", "area", "cost", ...]
         * @param {Array} dataArray - Array of data rows, each row is also an array of values
         *       example: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         */


### Load WPT format String or JSON Oject with updated first source data

    webPivotTable.setWptWithCsvUrl(wpt, csvUrl, separator, successCB, errorCB);

        /**
         * Load WPT format String or JSON object with CSV Url as updated first source data
         * @param {String/Object} wpt - pre-saved WPT format String or JSON object
         * @param {string} csvUrl - URL String of CSV file
         * @param {string} separator - optional, separator char for CSV RAW data, default is ","
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         */

### Load WPT format String or JSON object with CSV RAW data as updated first source data

    webPivotTable.setWptWithCsvRawData(wpt, csvRawData, separator, successCB, errorCB);

        /**
         * Load WPT format String or JSON object with CSV RAW data as updated first source data
         * @param {String/Object} wpt - pre-saved WPT format String or JSON object
         * @param {String} csvRawData - CSV RAW data
         *    https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html
         * @param {string} separator - optional, separator char for CSV RAW data, default is ","
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         */



### Load OLAP Cube

    webPivotTable.setOlapCube(olapData, successCB, errorCB);

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
         * @param {Func} successCB(wpt) - optional, success callback
         *        in this callback, current wpt object will be published as first parameter
         *        and "this" will be WebPivotTable object
         *
         * @param {Func} errorCB(error) - optional, error callback
         *        in this callback, error object will be published as first parameter
         *        and "this" will be WebPivotTable object
         */


### Get internal WPT object

    var wpt = webPivotTable.getWptObject();

        /**
         * get internal WPT object
         * 
         * This will return current WPT internal object, developers can change anything directly 
         * in this object, for example, change sources/sheets name or fields. 
         * After changed this object, call refreshUI to refresh whole UI.
         * 
         * Please follow wpt-file-format document to understand returned object:
         *   http://webpivottable.com/documents/wpt-file-format
         *
         * @return {object}
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


### Retrieve current filtered data for a sheet

    webPivotTable.generateFilteredData(sheetIndex);
    
        /**
         * Generate current filtered data for a sheet
         * @param {int} sheetIndex - sheet index
         * @return {Object}
         *      {
         *         attrArray: ["department", "area", "cost", ...]
         *         dataArray: [["dep1", "area1", 1000, ...], ..., ["dep6", "area2", 2000,...]]
         *      }
         */
