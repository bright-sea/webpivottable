# WPT (WebPivotTable)

WPT is a pivot table and pivot chart component which mimics all functionalities 
of Microsoft Excel Pivot Table with more intuitive user interface. It is pure javascript 
based so that it can be run totally in browsers and can be easily integrated into any 
web applications or any web pages.


## Why WPT?

[Pivot table] [pivottable] is a very useful tool for data analyst. Microsoft Excel pivot table is 
the most popular implementation. Everyday, millions of users use it to analyze their 
data, create reports. It is also the major client side tool within Microsoft Business
Intelligence solution to pivot Microsoft Analysis Service (SSAS) cubes interactively.

Despite the fact that pivot tables have been a cornerstone of Excel, they remain
one of the most underutilized tools in the entire Microsoft Office Suite since 
they are not intuitive enough to be used by normal users and there are hard to be
integrated into other applications by professional developers.

**WPT comes to the rescue!**

WPT is a pure javascript implementation of pivot table and pivot chart.
Since the only requirement to run WPT is a browser, WPT can be 
easily used on any kind of devices (desktop computers, laptops, notebooks, tablets, 
smart phones, terminals, etc. ). Users can use the same WPT to analyst their 
data anytime anywhere on any devices.

WPT mimics all functionalities of Excel pivot table. By leverage the 
powerful web technology, it provides a very intuitive user interface for normal users. 
Most of WPT operations are just a simple drag and drop or a simple mouse click. 
There are almost no learn curves for normal users. Users can create a grid report or 
a chart report in a minute with a lot of customize options. WPT is a great 
choice for any users to analysis their data easily and powerfully.

WPT supports to load data from all kinds of resources: a data file locate 
in local drive, a data file locate in a cloud drive or an Internet data link. 
The data format can be any of the most popular formats, like CSV, XLS, XLSX and 
Google spreadsheet. WPT also provide APIs (Application Programming Interface) 
for professional developers to load data from any back end SQL databases dynamically. 
It also support to pivot data directly on any OLAP (On Line Analysis Process) servers, 
like Microsoft Analyst Service, Pentaho Mondrian and icCube. 
All these supports makes WPT a great choice for professional developers to 
integrate it into their own applications or solutions.

   [pivottable]: http://en.wikipedia.org/wiki/Pivot_table


## How to get WPT component?

### Get from [WPT website] [download]

There is a released free WPT version downloadable which can be used by 
non commercial users directly or be used by commercial users for trial purpose. 

If you are statisfied with WPT component, you can purchase a license and
get a commercial version by using the same [download page] [download]. Or 
contact [Brightsea Inc.] [brightsea]


### Get from [Github website] [github]

This is a public project at Github with the latest version and all past versions.

[download]: http://webpivottable.com/download
[github]: https://github.com/bright-sea/webpivottable
[brightsea]: http://brightsea.ca

### Bower intsall

    bower install webpivottable


## How to use WPT component?

### Integrate WPT into web application or web site

Integrating WPT component into your own web application or web site is 
quite easy. What you need to do is include a css file and a javascript file in your 
web page.

After you get WPT componnet, you can extract public directory in the package
to your web root directory. Then follow /public/index.html to include neceesary css file
and javascript files into your own page.
    
    <!DOCTYPE HTML>
    <html>
    <head>
        <style type="text/css">
            html, body, #wpt-container {width:100%;height:100%;}
        </style>
    
        <!-- Step 1 -->
        <link rel='stylesheet' href='brightsea/wpt/wpt.css'>    
    
        <!-- Step 2 -->
        <script type="text/javascript" src="brightsea/wpt/wpt.js"  
            data-dojo-config="async:1, baseUrl: '/brightsea/dojo/'"></script> 
        
        <!-- Step 3 -->    
        <script type="text/javascript" src="lib/filepicker/index.js"></script>
        <script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="lib/highcharts-release/highcharts-all.js"></script>
        <script type="text/javascript" src="lib/grouped_categories/grouped-categories.js"></script>
    
        <!-- Step 4 -->
        <script type="text/javascript">
            require(["wpt/WebPivotTable","dojo/domReady!"], function(WebPivotTable){
                new WebPivotTable({},"wpt-container");
            });
    	</script>
    </head>
    
    <!-- Step 5 -->
    <body class="claro">
    	<div id="wpt-container"></div>
    </body>
    </html>


* Step1: include wpt.css file into the page
* Step2: include wpt.js file into the page with correct dojo config
* Step3: include third party javascript libraries
* Step4: create WebPivotTable object when dojo domReady
* Step5: add "claro" class to body tag

_ Please reference [Developer Documents](doc/index.html) for further customization _    


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

* [webpivottable.com](http://webpivottable.com/)
* [Demo](http://webpivottable.com/demo) 
* [Documents](http://webpivottable.com/documents)
* [Forums](http://brightsea.ca/forum) 
* [Download](http://webpivottable.com/download)

 
## Browser Support

* IE9+
* Firefox, Chrome, Safari

