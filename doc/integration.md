[Back to Index](./index.md)

## Integration Guide 

Integrating WPT component into your own web application or web site is quite easy. 
What you need to do is import a css file and some javascript files into your web page.


### Quick Start Guide
 
After you get WPT component, you can extract all contents in "public" subdirectory
to your web root directory. Then follow list below steps to import necessary css file
and javascript files into your page.
    
    <!DOCTYPE HTML>
    <html>
    <head>
        <style type="text/css">
            html, body, #wpt-container {width:100%;height:100%;}
        </style>
    
        <!-- Step 1 import wpt.css file into the page -->
        <link rel='stylesheet' href='brightsea/wpt/wpt.css'>    
    
        <!-- Step 2 import third party javascript libraries-->    
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
    
        <!-- Step 3 import wpt.js file into the page with correct dojo config-->
        <script type="text/javascript" src="brightsea/wpt/wpt.js"  
            data-dojo-config="async:1, baseUrl: 'brightsea/dojo/'"></script> 
        
        <!-- Step 4 create WebPivotTable object after dojo domReady-->
        <script type="text/javascript">
            require(["wpt/WebPivotTable","dojo/domReady!"], function(WebPivotTable){
                new WebPivotTable({},"wpt-container");
            });
    	</script>
    </head>
    
    <!-- Step 5 add "claro" class to body tag-->
    <body class="claro">
    	<div id="wpt-container"></div>
    </body>
    </html>


* Step1: import wpt.css file into the page
* Step2: import third party javascript libraries
* Step3: import wpt.js file into the page with correct dojo config
* Step4: create WebPivotTable object after dojo domReady
* Step5: add "claro" class to body tag



