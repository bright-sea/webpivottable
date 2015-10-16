# WPT (WebPivotTable)

WPT is a pivot table and pivot chart implementation which mimics all functionalities 
of Microsoft Excel Pivot Table with intuitive web user interface. 

It is a javascript component so that it can be run in browsers and be easily integrated 
into any web applications or any web pages.


## Why WPT?

[Pivot table] [pivottable] is a very useful tool for data analyst. Microsoft Excel pivot table is 
the most popular implementation. Everyday, millions of users use it to analyze their 
data, create reports. It is also the major client side tool within Microsoft Business
Intelligence solution to pivot Microsoft Analysis Service (SSAS) cubes interactively.

Despite the fact that pivot table has been a cornerstone of Excel, it remains
one of the most underutilized tools in the entire Microsoft Office Suite since 
it is not intuitive enough to be used by normal users and hard to be integrated 
into other applications by professional developers.

**WPT comes to the rescue!**

WPT is a pure javascript implementation of pivot table and pivot chart.
Since the only requirement to run WPT is a browser, WPT can be used on any kind of 
devices (desktop computers, laptops, notebooks, tablets, smart phones, etc. ). 

WPT mimics all functionalities of Excel pivot table with very intuitive web user
interface. There are almost no learn curves for normal users. Users can create an
analysis report in minutes with a lot of customize options. WPT is a great 
choice for any users to analysis their data easily and powerfully.

WPT supports to load data from all kinds of resources: a data file locate 
at local drive, or at a cloud drive or an Internet link. The data format can be 
any of the most popular formats, like CSV, XLS, XLSX and Google spreadsheet. 
WPT also provide APIs (Application Programming Interface) for professional developers 
to load data from any back end SQL databases dynamically. 
It also support to pivot data directly on any OLAP (Online Analysis Process) servers, 
like Microsoft Analyst Service, Pentaho Mondrian and icCube. 
All these supports makes WPT a great choice for professional developers to 
integrate it into their own applications or solutions.

[pivottable]: http://en.wikipedia.org/wiki/Pivot_table


## How to get WPT component?

### Get it from [webpivottable.com] [download]

There is a released free WPT version downloadable which can be used by non 
commercial users directly or be used by commercial users for trial purpose. 

If you are statisfied with WPT component, you can purchase a license and
get a commercial version by using the same [download page] [download]. Or 
[contact us] [brightsea] directly.


### Get it from [Github] [github]

This is a public project at Github with the latest version and all past versions.

### Install it using Bower

If you are using [Bower] [bower] to manage your packages, you can intsall WPT by:   

    bower install webpivottable

[download]: http://webpivottable.com/download
[github]: https://github.com/bright-sea/webpivottable
[brightsea]: http://brightsea.ca/contact
[bower]: http://bower.io/

## How to use WPT component?

### Integrate WPT into web application or web site

Integrating WPT component into your own web application or web site is quite easy. 
What you need to do is import a css file and some javascript files in your 
web page.

After you get WPT componnet, you can extract all contents in "public" subdirectory
to your web root directory. Then follow /public/index.html to import neceesary css file
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

_Please reference [Developer's Documents](doc/index.md) for further customization._    


### Run independent web application in the package

We provide a very simple Node.js application which can be run in any environment. 
Users can try it without any development or integration involved.


* Install open source [Node.js](http://nodejs.org) platform on your server machine.
  Run " `node --version` "to check whether Node.js has been installed correctly.
* Download [WPT](http://webpivottable.com/download) and unzip it to a directory.
* Go to unzipped directory, run " `npm install` " to install neccesary packages
* run " `node app` " to start web server
* Open any browser, access http://localhost:8002


## Resources 

### support resources

* [webpivottable.com](http://webpivottable.com/)
* [Demo](http://webpivottable.com/demo) 
* [Documents](http://webpivottable.com/documents)
* [Forums](http://brightsea.ca/forum) 
* [Download](http://webpivottable.com/download)

 
### Dependence resources:

* [dojo](http://dojotoolkit.org/) 
* [dgrid](https://github.com/SitePen/dgrid)
* [dstore](https://github.com/sitepen/dstore) 
* [Highcharts](http://www.highcharts.com/)
* [node.js](http://nodejs.org/)
* [xls.js]( https://github.com/SheetJS/js-xls)
* [xlsx.js](https://github.com/SheetJS/js-xlsx)

 
## Browser Support

* IE9+
* Firefox, Chrome, Safari

