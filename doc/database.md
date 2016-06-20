[Back to Index](./index.md)

## How to load data from Database 

WebPivotTable is a pure front end javascript component, it is not designed and also
is not secure to connect to back end database (like SQL database, noSQL database) directly.
A good practice is create a secured web service at web server to connect to database and get
the data, then publish a service interface for front end WebPivotTable component to load the data. 
 

There are two ways to achieve this loading:

### Web service to provide data directly
 
The most easily way to load data from database to to provide a web service which return data
with correct format to WebPivotTable component directly. List below is the API for front end
integration developer:
  
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
  
The only required parameter is web service URL and this service should return a JSON object.
  
  
Here is an example web service: [http://demo.webpivottable.com/wpt/wsSample](http://demo.webpivottable.com/wpt/wsSample)

The returned json data is like:

        {"attrArray":
            ["abc","xyz"],
         "dataArray":
            [[1,3],[2,4]]
        }

This web service is created on NodeJS web server, the code is quite simple:  

        exports.wsSample = function(req, res) {
        
            var data = {
                attrArray:['abc','xyz'],
                dataArray:[
                    [1,3],
                    [2,4]
                ]
            };
        
            res.jsonp(data);
        };


This kind of web service can also be used directly through User Interface bu end users to
load data without any code at front end. Try load it from demo site: 
<a href="http://demo.webpivottable.com/demo.html" target="_blank">http://demo.webpivottable.com/demo.html</a>

1. Click "Create a new WebPivotTable" button at top bar to open a dialog view.
 
2. On the right navigation panel, choose "memory mode" --> "Web Service" Tab
  
3. Input above sample web service Url and click "load" button.
  
  
### Any Service to return data to front end  

Another way to load data from database is provide any kind of a service to connect to database 
and get the data. Then at front end, developer use Ajax call to connect to this service. After 
data returned to front end, format it and call another API to load the data into WebPivotTable
object. List below is the API to achieve this:

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




