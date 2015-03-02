[Back to Index](./index.md)

## APIs

### To create webPivotTable object with some customize options

    var myOptions = {
       uiFlags: {
          openWptBtn: 0,
          saveWptBtn: 0
       }
    };
    var webPivotTable = new WebPivotTable({
        customOptions:myOptions
    },"wpt-container");


### To set customize options after webPivotTable had been created on page

    webPivotTable.setOptions(customOptions);

    //Parameters:
    //    customOptions : Object
    
### To change to another language
  
  
    

### To initialize webPivotTable with a data source from a CSV file

    webPivotTable.setCsvUrl(url, separator, wptObject);

    //Parameters:
    //    csvUrl: URL String of CSV file
    //    separator: optional, separator char for CSV file, default is ","
    //    wptObject: optional, pre-saved wpt JSON object

    //        if wptObject is not null, use it as wpt options
    
    
### Or you can read raw CSV data from a CSV file or database in your program, and pass this raw data into the following method:

    webPivotTable.setCsvRawData(csvData, separator, wptObject);

    //Parameters:
    //    csvData: CSV RAW data
    //    separator: optional, separator char for CSV file, default is ","
    //    wptObject: optional, pre-saved wpt JSON object
    //        if wptObject is not null, use it as wpt options
    
### Or you can read and parse CSV data from a CSV file or database, put the content into an array of all data and an array of all attributes in your program, then pass them into the method below:

    webPivotTable.setCsvData(attributes, dataArray, csvUrl,  wptObject);

    //Parameters:
    //    attributes: Array of fields name
    //    dataArray: Array of data rows, each row is also an array of values
    //    csvUrl: String of url for keep record, default ""
    //    wptObject: optional, pre-saved wpt JSON object
    //        if wptObject is not null, use it as wpt options
    
As we are using dojox.data.CsvStore to handle Csv file and raw data, please reference it for the format of parameters you need passed into list above APIs.

### To load data from OLAP cubes, you can pass cube options into the method below:

    webPivotTable.setOlapCube({
        xmlaUrl: "Your xmla server url",
        DataSourceInfo: "Your data source info",
        Catalog: "Your catalog name",
        CubeName: "Your cube name",
        nonEmpty: 1,
        drillThroughMaxRows: 1000
    });
    
We also provide APIs for you to save and open WPT format data:

### To generate wpt string to be saved into wpt file.

    var wptString = webPivotTable.generateWptString(ignoreData);

    //Parameters:
    //    ignoreData : boolean
    //        if equal to true, ignore data and fields, only save options and controls
    //return: string
    
### To generate wpt JSON object to be saved into wpt file.

    var wptObject = webPivotTable.generateWptJSON(ignoreData);

    //Parameters:
    //    ignoreData : boolean
    //        if equal to true, ignore data and fields, only save options and controls
    //return: JSON object
    
### To generate wpt string from CSV format data with default options and controls to be saved into wpt file. This is quite useful for loading large size CSV data since wpt file will relatively smaller than CSV file and also be more faster to be loaded into WebPivotTable component.

    webPivotTable.generateWptStringFromCsvData(attributes, dataArray, csvUrl, , callback, errCallback);

    //Parameters:
    //    attributes: Array of fields name
    //    dataArray: Array of data rows, each row is also an array of values
    //    csvUrl: String of url for keep record, default ""
    //    callback(wptString): callback function while generation successfully
    //    errCallback(error): optional callback function while error
    
### To generate wpt string from CSV file URL with default options and controls to be saved into wpt file. This is quite useful for loading large size CSV data since wpt file will relatively smaller than CSV file and also be more faster to be loaded into WebPivotTable component.

    webPivotTable.generateWptStringFromCsvUrl(csvUrl, separator, callback, errCallback);

    //Parameters:
    //    csvUrl: URL String of CSV file
    //    separator: separator char for CSV file, usually is ","
    //    callback(wptString): callback function while generation successfully
    //    errCallback(error): optional callback function while error
    
### To generate wpt string from CSV file URL with default options and controls to be saved into wpt file. This is quite useful for loading large size CSV data since wpt file will relatively smaller than CSV file and also be more faster to be loaded into WebPivotTable component.

    webPivotTable.generateWptStringFromCsvRawData(csvData, separator, callback, errCallback);

    //Parameters:
    //    csvData: CSV RAW data, https://dojotoolkit.org/reference-guide/1.9/dojox/data/CsvStore.html
    //    separator: separator char for CSV RAW data, usually is ","
    //    callback(wptString): callback function while generation successfully
    //    errCallback(error): optional callback function while error
    
### To load wptString into WebPivotTable component.

    webPivotTable.setWptString(wptString, csvData, separator);

    //Parameters:
    //    wptString: pre-saved wpt string
    //    csvData: optional, if exist, use this data to generate data and fields
    //    separator: optional, separator char for CSV RAW data, default is ","
    
### To load wptObject into WebPivotTable component.

    webPivotTable.setWptObject(wptObject, dataObject);

    //Parameters:
    //    wptObject: pre-saved wpt JSON object
    //    dataObject: optional, if exist, use this as data and fields
    //       format {data:[], fields:[]}    
    
    
    