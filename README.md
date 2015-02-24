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
a chart report in a minute with tons of customize options. WPT is a great 
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
There is no functionality limitation and time limitation for your trial.

If you are statisfied with WPT component, you can purchase a license and
get a commercial version by using the same download page. Or contact 

### Get from [Github website] [github]

There is a public project at Github with the latest version and all past versions.

[download]: http://webpivottable.com/download
[github]: https://github.com/bright-sea/webpivottable

### Bower intsall

    bower install webpivottable


## How to use WPT component?

To integrate WPT component into your own web application or web site is 
quite easy. What you need to do is include a css file and a javascript file in your 
web page.

After you get WPT componnet, you can extract public directory in the package
to your web root directory. Then follow /public/index.html to include neceesary css file
and javascript files into your own page.








WPT can be used as an independent enterprise BI solution, it can be also integrated into
any other web application or web site. OEM or SaaS integrations are also supported.


* Install open source [Node.js](http://nodejs.org) platform on your server machine.
  Run "node --version" to check whether Node.js has been installed correctly.
* Install open source [MongoDB](http://www.mongodb.org/) NoSQL database on the same server machine or another server machine in the same network.
  After MongoDB installation, start MongoDB follow the [MongoDB document](http://docs.mongodb.org/manual/)
  If you don't want install MongoDB, you can try use cloud based MongoDB. There are lots of cloud based MongoDB in the market, for example, [Compose (original MongoHQ)](https://www.compose.io/) and [MongoLab](https://mongolab.com/).
* Download [WPT](http://webpivottable.com/download) and unzip it to a directory.
  If MongoDB is not on the same server machine, open "app/config.js" file to change "db" parameter to point to correct MongoDB URL.
* Go to unzipped directory, run "npm install"
* run "node app"
* Open any browser, access http://localhost:8002

<h3 id="integration">Integrate into any web application as javascript component </h3>

* Download [WPT](http://webpivottable.com/download) and unzip it to a directory.
* Copy all contents under public subdirectory into your web application www root directory.

[Back to Top](#wpttop)
* * *

<h2 id="resources"> Resources </h2>

### support resources

* [webpivottable.com](http://webpivottable.com/)
* [Demo](http://webpivottable.com/demo) 
* [Documents](http://webpivottable.com/documents)
* [Forums](http://brightsea.ca/forum) 

 
### Dependence resources:

* [dojo](http://dojotoolkit.org/) 
* [dgrid](https://github.com/SitePen/dgrid)
* [dstore](https://github.com/sitepen/dstore) 
* [put-selector](https://github.com/kriszyp/put-selector) 
* [xstyle](https://github.com/kriszyp/xstyle)
* [Highcharts](http://www.highcharts.com/)
* [node.js](http://nodejs.org/)
* [xls.js]( https://github.com/SheetJS/js-xls)
* [xlsx.js](https://github.com/SheetJS/js-xlsx)

[Back to Top](#wpttop)
* * *


# Browser Support

* IE9+
* Firefox, Chrome, Safari

