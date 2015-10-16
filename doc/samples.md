[Back to Index](./index.md)

## Initial WPT component with an csv file URL as data source 

<a href='http://bi2.io/demo.html' target='_blank'>Online Demo</a>
  
Code:  
    
    <!DOCTYPE HTML>
    <html>
    <head>
        <title>Test</title>
    
        <style type="text/css">
            html, body, #wpt-container {width:100%;height:100%;}
        </style>
    
        <link rel='stylesheet' href='brightsea/wpt/wpt.css'>
    
        <script type="text/javascript" src="lib/filepicker/index.js"></script>
        <script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts-3d.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts-more.js"></script>
        <script type="text/javascript" src="lib/grouped_categories/grouped-categories.js"></script>
        <script type="text/javascript" src="lib/jszip/dist/jszip.min.js"></script>
        <script type="text/javascript" src="lib/js-xlsx/dist/ods.js"></script>
        <script type="text/javascript" src="lib/js-xlsx/dist/xlsx.min.js"></script>
        <script type="text/javascript" src="lib/papaparse/papaparse.min.js"></script>
    
        <script type="text/javascript" src="brightsea/wpt/wpt.js"  data-dojo-config="async:1, baseUrl: 'brightsea/dojo/'"></script>
    
        <script type="text/javascript">
            require(["wpt/WebPivotTable","dojo/domReady!"], function(WebPivotTable){
                var wpt = new WebPivotTable({
                    customOptions:{
                        reportCssFile: "./brightsea/wpt/wptReport.css",
                        fileLinks:[{
                            type: "WPT",
                            url: "http://bi2.io/json/sample91.wpt",
                            label: "Predefined small CSV WebPivotTable file"
                        },{
                            type: "WPT",
                            url: "http://bi2.io/json/sample92.wpt",
                            label: "Predefined Mondrian OLAP WebPivotTable file"
                        },{
                            type: "WPT",
                            url: "http://bi2.io/json/sample93.wpt",
                            label: "Predefined large CSV WebPivotTable file"
                        },{
                            type: "CSV",
                            url: "http://bi2.io/json/example.csv",
                            label: "USA Selection Poll Data (Total 4,000 records)"
                        },{
                            type: "CSV",
                            url: "http://bi2.io/json/sales.csv",
                            label: "Sales Sample Data (Total 2,823 records)"
                        },{
                            type: "CSV",
                            url: "http://bi2.io/json/FL_insurance.csv",
                            label: "Florida Insurance Data (Total 36,634 records)"
                        },{
                            type: "EXCEL",
                            url: "http://bi2.io/json/example.xls",
                            label: "USA Selection Poll Data (Total 4,000 records)"
                        },{
                            type: "EXCEL",
                            url: "http://bi2.io/json/sales.xls",
                            label: "Sales Sample Data (Total 2,823 records)"
                        },{
                            type: "EXCEL",
                            url: "http://bi2.io/json/FL_insurance.xls",
                            label: "Florida Insurance Data (Total 36,634 records)"
                        },{
                            type: "EXCEL",
                            url: "http://bi2.io/json/example.xlsx",
                            label: "USA Selection Poll Data (Total 4,000 records)"
                        },{
                            type: "EXCEL",
                            url: "http://bi2.io/json/sales.xlsx",
                            label: "Sales Sample Data (Total 2,823 records)"
                        },{
                            type: "EXCEL",
                            url: "http://bi2.io/json/FL_insurance.xlsx",
                            label: "Florida Insurance Data (Total 36,634 records)"
                        },{
                            type: "GSS",
                            url: "https://docs.google.com/spreadsheet/pub?key=0Alkl5EEsxBwBdDFLV2Q4a1NWMmw1TXZBRlFMZ1Rxd0E&output=html",
                            label: "USA Selection Poll Data (Total 4,000 records)"
                        },{
                            type: "GSS",
                            url: "https://docs.google.com/spreadsheet/pub?key=0Alkl5EEsxBwBdHJMOTh4Sm1BSFlDYXRwVW5lc0xuMVE&output=html",
                            label: "Sales Sample Data (Total 2,823 records)"
                        },{
                            type: "OLAP",
                            url: "http://bi2.io:8080/mondrian/xmla",
                            label: "Sample Mondrian OLAP Server"
                        },{
                            type: "OLAP",
                            url: "http://olap.flexmonster.com/olap/msmdpump.dll",
                            label: "Sample Microsoft Analysis Service"
    //                    },{
    //                        type: "OLAP",
    //                        url: "http://bi2.io:8282/icCube/xmla",
    //                        label: "Sample IcCube OLAP Server"
                        }],
                        filepicker:{
                            key:"A4bieoUsyR4yBrNPkFIvrz"  //bi2.io
                        }
                    }
                },"wpt-container");
                
                wpt.setCsvUrl("/json/example.csv");
            });
        </script>
    
    </head>
    
    <body class="claro">
    <div id="wpt-container"></div>
    </body>
    </html>



## Initial WPT component with an olap cube as data source 

<a href='http://bi2.io/demo-cube.html' target='_blank'>Online Demo</a>
  
Code:  
    
    <!DOCTYPE HTML>
    <html>
    <head>
        <title>Test</title>
    
        <style type="text/css">
            html, body, #wpt-container {width:100%;height:100%;}
        </style>
    
        <link rel='stylesheet' href='brightsea/wpt/wpt.css'>
    
        <script type="text/javascript" src="lib/filepicker/index.js"></script>
        <script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts-3d.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts-more.js"></script>
        <script type="text/javascript" src="lib/grouped_categories/grouped-categories.js"></script>
        <script type="text/javascript" src="lib/jszip/dist/jszip.min.js"></script>
        <script type="text/javascript" src="lib/js-xlsx/dist/ods.js"></script>
        <script type="text/javascript" src="lib/js-xlsx/dist/xlsx.min.js"></script>
        <script type="text/javascript" src="lib/papaparse/papaparse.min.js"></script>
    
        <script type="text/javascript" src="brightsea/wpt/wpt.js"  data-dojo-config="async:1, baseUrl: 'brightsea/dojo/'"></script>
    
        <script type="text/javascript">
            require(["wpt/WebPivotTable","dojo/domReady!"], function(WebPivotTable){
                var wpt = new WebPivotTable({
                },"wpt-container");
    
                wpt.setOlapCube({
                     xmlaUrl: "http://bi2.io:8080/mondrian/xmla",
                     DataSourceInfo: "Provider=Mondrian;DataSource=MondrianFoodMart;",
                     Catalog: "FoodMart",
                     CubeName: "HR"
                });
            });
        </script>
    
    </head>
    
    <body class="claro">
    <div id="wpt-container"></div>
    </body>
    </html>
    

## Initial WPT component with a pre-saved wpt string and a CSV file as updated data source 

<a href='http://bi2.io/demo-update.html' target='_blank'>Online Demo</a>
  
Code:  

    <!DOCTYPE HTML>
    <html>
    <head>
        <title>Test</title>
    
        <style type="text/css">
            html, body, #wpt-container {width:100%;height:100%;}
        </style>
    
        <link rel='stylesheet' href='brightsea/wpt/wpt.css'>
    
        <script type="text/javascript" src="lib/filepicker/index.js"></script>
        <script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts-3d.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts-more.js"></script>
        <script type="text/javascript" src="lib/grouped_categories/grouped-categories.js"></script>
        <script type="text/javascript" src="lib/jszip/dist/jszip.min.js"></script>
        <script type="text/javascript" src="lib/js-xlsx/dist/ods.js"></script>
        <script type="text/javascript" src="lib/js-xlsx/dist/xlsx.min.js"></script>
        <script type="text/javascript" src="lib/papaparse/papaparse.min.js"></script>
    
        <script type="text/javascript" src="brightsea/wpt/wpt.js"  data-dojo-config="async:1, baseUrl: 'brightsea/dojo/'"></script>
    
        <script type="text/javascript">
            require(["wpt/WebPivotTable","dojo/domReady!"], function(WebPivotTable){
                var wpt = new WebPivotTable({
                },"wpt-container");
    
                var wptOptionsOnly = '{"format":"WPT","version":"2.0","sources":[{"id":1,"name":"Source1","mode":"MEMORY","format":"CSV","url":"/json/example.csv","data":[],"fields":[]}],"sheets":[{"id":1,"name":"Sheet1","sourceId":1,"fields":[{"id":0,"name":"0","label":"VOTER","type":"NUMBER"},{"id":1,"name":"1","label":"PARTY","type":"STRING"},{"id":2,"name":"2","label":"PRECINCT","type":"NUMBER"},{"id":3,"name":"3","label":"AGE GROUP","type":"STRING"},{"id":4,"name":"4","label":"LAST VOTED","type":"STRING"},{"id":5,"name":"5","label":"YEARS REG","type":"NUMBER"},{"id":6,"name":"6","label":"BALLOT STATUS","type":"STRING"}],"rows":[1],"cols":[],"filters":[],"values":[{"id":1,"label":"Sum of PRECINCT","fieldIndex":2,"stats":"SUM","format":{}}],"valuesInAxis":-1,"valuesIndex":-1,"sheetOptions":{"chartFirst":0,"pivotLayout":"1","expandRows":1,"expandCols":1,"nonEmpty":1,"mdx":""},"gridOptions":{"showSigns":1,"showRowTotals":1,"showColTotals":1,"showRowSubtotals":1,"showColSubtotals":1,"compactForm":1,"rowHeaderWidth":200,"cellWidth":100,"cellHeight":25,"theme":"wpt-default"},"chartOptions":{"width":500,"height":300,"high":{"theme":"default","chart":{"type":"column","options3d":{"enabled":false,"alpha":15,"beta":15,"depth":50,"viewDistance":25}},"credits":{"enabled":false},"exporting":{"enabled":false},"navigation":{"buttonOptions":{"align":"right","verticalAlign":"top"}},"legend":{"enabled":true,"floating":false,"layout":"vertical","align":"right","verticalAlign":"middle","reversed":false},"tooltip":{"enabled":true,"shadow":true},"plotOptions":{"series":{"stacking":null}},"xAxis":{"labels":{"enabled":true,"align":"left","rotation":45}}}}}],"reports":[],"view":"PIVOTTABLE"}';
    
                var wptObject=JSON.parse(wptOptionsOnly);
                wpt.setCsvUrl(url, ",", wptObject);
    
            });
        </script>
    
    </head>
    
    <body class="claro">
    <div id="wpt-container"></div>
    </body>
    </html>
    
## Business Intelligence product to leverage WPT component

<a href='http://bi2.io/' target='_blank'>Bright BI</a>
  
 