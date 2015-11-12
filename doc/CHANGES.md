[Back to Index](./index.md)

### V3.8 Nov 12th, 2015
* Add DrillThroughByDoubleClick options to customize drillThrough trigger
* Add dojoDialogStyle options to customize dialog style
* Add locale into String Compare to sort fields by locale
* Remove Normalize check for Csv contents to avoid browser compatible issue
* Fix issue of export excel with non utf-8 chars
* Redesign open wpt dialog to modal view
* Fix issue of Tooltip stay on screen while click a button with tooltips.


### V 3.7 Oct 16th, 2015
* Fix issue on opening calculated field dialog at IE
* Fix issue export grid to excel file with hidden rows
* Redesign refine data modal dialog to modal view
* Replace dojo csv parse with papaparse
* Improve performance to support big size source data
* Add hideSubtotal to hide subtotal of individual rows/cols field
* Redesign drill through dialog to modal view
* Customize drill through grid for filter and reorder

### V 3.6 July 28th, 2015
* Export all source data and drill through data to CSV
* Remove view property from wpt format
* Layout source pane and drill through pane
* Add customizeNew options for user to provide customized create new wpt UI
* Add customizeOpen options for user to provide customized open wpt UI
* Add customizeSave options for user to provide customized save UI
* Add fields info for source fields and remove hover of xmla fields
* Add ODS format support
* Fix issue of olap drill through without proxy
* Change wpt format for better support options
* Add Turkish locale 
* Fix issue of export html and pdf with non utf-8 chars
* Fix issue of fields setting grid pagination


### V 3.5 Jun 28th, 2015
* Fix the issue of currency sign combobox store issue
* Fix all nls missing items
* Fix the issue of random order of children for a tree in dstore 
* Create tab effects for viewSwitch buttons
* Export all source data and drill through data to Excel
* Add remove and edit buttons for pivot fields and control fields
* Add delimiter selector for memory mode source
* Add loaded data viewer for source
* Add watermark for free version
* Add jszip lib dependency
* Add js-xlsx lib dependency


### V 3.4 Jun 10th, 2015
* Fix the issue of calculated field selection list not more than 25
* Fix calculated field formula issue with ">" and "<"
* Fix the issue of move values field in OLAP mode
* Add distinct count statistic function for value fields
* Add conditional operator in calculated field
* First implementation of data refine functionalities.
* Separate report tabs from pivottable view to an new view
* Remove dependence of dojo base module in favour of ES5
* Internal architecture redesign to provide mobile version services   


### V3.3 March 16th, 2015
* Remove dependence of put-selector and xstyle
* All source tabs and sheet tabs are closable
* Source view redesigned to show more info about source and improve navigation
* Refactor to separate UI with services to support mobile version development
* Add loading data or wpt file from web service (cross domain in browser) 
* Improve APIs and documents
* Add options to position Grid&Chart menu bar at left/right
* Add more uiFlags options to customize User Interface
* Fix issue of load local olap cube through API.

### V3.2 February 25th, 2015
* Add user information to support backend user authentication
* Add a dashboard view for user
* Add user admin dialogs for user sign/up/password
* Save WPT to backend database directly 
* Change all dialog to non modal and more fancy with dojox dialog
* Change all title hint to Tooltip to improve user experience
* Add more options to customize user interface
* redesign data source view to have multiple tabs.

### V3.1 January 26th, 2015
* Generate full size pivot grid for exporting and report component
* Generate pdf/html/png/jpeg exporting
* Customize pdf format
* Fix the issue of refresh after setOptions
* Fix the issue of wrong scroll bar width in firefox/IE
* Fix the issue of duplicate grid ids in report pane
* Fix the issue of local olap cube proxy.


### V3.0 January 10th, 2015
* Redesign both UI and data structure to support to switch data source view and 
  pivot table view
* Redesign both UI and data structure to support to add multiple sources, sheets
  and reports
* Redesign the UI to better customize grids and charts
* Update the wpt format to 2.0 to support multiple sources, sheets and reports
* Show all charts at one time.
* Fix issue of calculated fields calculation


### V2.6 December 5th, 2014
* Refactor to use dgrid0.4 and dstore
* Force horizontal scroll bar always show in WebKit based browsers.
* Fix issues used in iPad and other touch devices.
* Add confirmation box when leaving the page 
* Remove the dependence of jquery outside highcharts
* Fix issue of drill through while added calculated field.
* Add save wpt dialog to set file name and ignore data option.
* Ignore saving lookups of fields which no filter setting to save wptString size.


### V2.5 November 15th, 2014
* Support to add Calculated fields with any formula
* Support to keep filters working when loading updated data with pre saved pivot
  options.
* Fix the issue pivot fields grid is empty while hide it first
* Fix the issue of olap cube crossjoin with multiple dimensions.

### V2.4 July 5th, 2014
* Redesign pivot grids to better support OLAP cubes.
* Add more messages while loading cube details.
* Add xmla data popup dialogs for all OLAP fields.
* Add support of filters in OLAP cube.
* Separate free version with commercial version.


### V2.3 May 3rd, 2014
* Add show value as percentage options for value fields.
* Add more number format options for value fields.
* Add field and value customize popup through row and column header.
* Update to use highchart 4.0.1
* Add 3D view of column and pie charts
* Redesign data and fields to improve performance and decrease wpt file size
* Add dimension layer into pivot fields list for OLAP Cubes
* Add more details message while loading OLAP Cube data.



### V2.2 April 13th, 2014
* Move format attributes from fields to values.
* Add Pie Chart.
* Redesign CSV process to improve performance.
* Redesign wpt format to add sort by values field option.
* Add filter by label, filter by value and top 10 options.
* Change pivot control fields at pivot bar to popup tooltip dialogs.
* Fix IE11 webworker issue and setOptions issue.
* Fix sometime load component failed at Firefox issue.
* Remove placeHolder columns format in pivot grid


### V2.1 March 21st, 2014
* Implement fixed row header while horizontal scroll and fixed column header
  while vertical scroll for pivot grid.
* Implement group categories for pivot chart.
* Expand/Collapse group categories and synchronize pivot chart and pivot grid
* Unify tooltips for both pivot grid and pivot chart.
* Unify drill through for both pivot grid and pivot chart.
* Save only grid and chart options instead of all options to wpt files.
* Add API to generate wpt string at background from all kinds of csv data.
* Add API to load all kinds of csv data together with saved wpt file.
* Separate NLS files from dojo.js layer file so that language file can be easy
  to be customized


### V2.0 March 1st, 2014
* Redesign internal data model and csv calculate engine to improve performance
  and better support advanced features.
* Redesign pivot grid to better support both compact form and tabular form.
* Redesign pivot chart to control values independently.
* Separate the control of grid and chart.
* Add support of XLS and XLSX format data source.
* Redesign MainBar to use dropdown buttons
* Fix IE8 issue caused by Filesaver
* Add language support of Spanish, Portuguese, Italian


### V1.8 January 18th, 2014
* Add sync and timeout options for xmla client
* Fix Highcharts error #19 : too many ticks
* Change all controls to index of fields instead of objects reference to 
  support separate wpt selections from data.
* Add API for load and save wpt without data.
* Add more options to show/hide buttons on toolbars.
* Add support of load data from google spreadsheet.


### V1.7 November 1st, 2013
* Choose Highcharts as final chart library, remove fusioncharts and dojo charts.
* Change Source data Tab from static to dynamic.
* Implement Multi language support, change language on the fly.
* Add clear all and clear filters.
* When save WebPivotTable, only save query now, not save generated pivot data.



### V1.6 October 1st, 2013
* Implement all options changes for HighCharts and FusionCharts. User can 
  customize all aspects of Highcharts and Fusioncharts and export them.
* Redesign all layouts, leverage multiple tabs to use screen more efficiently.
  Dynamic create and remove Report tabs and drill through tabs.
* Separate widget layout and widget creation so that all widgets can be
  recreated anytime. This allows future implementation of dynamic changing 
  language setting.
* Implement Drill through for both CSV and OLAP.
* Clean data structure design, implemented saving everything of WebPivotTable
  (data and options) to a file and restore it anytime. 
* Implement sort Fields values.
* Add pivot fields setting and sorting at pivot bar.
* Enable/Disable file proxy and xmla proxy at UI.


### V1.5 September 1st, 2013
* Implement most functionalities of OLAP support, include cross-tab grid, expand
  and collapse, charts, slice, non empty.
* Redesign the csv grid layout and csvService to fully coincide with Microsoft
  Excel, support compact form and tabular form, expand/collapse both columns 
  and rows, show/hide row/column totals/subtotals.   
* Show tooltip for all data cell and support drill through for csv.
* Redesign pivot toolbar, grid toolbar and chart toolbar.
* Pivot grid and charts share exactly the same data set and refresh 
  automatically for any change together.
* Fix 25 fields limit issue and add support of locale number style.


### V1.4 August 2nd, 2013

* Separate all modules into different files to easy future development.
* Create dojo build profile to build a single layer loadable customize dojo.js 
  to improve the loading performance, also make it very easy for all kinds of 
  web application integrate this component.
* The first implementation of OLAP support, now this component can be used as 
  a front end UI for all kinds of business intelligence projects.
* Create an unify XmlaService to support Microsoft Analysis Service (SSAS), 
  Mondrian OLAP server and icCube OLAP server.
* Unify the support of different chart libraries. Currently dojo chart library  
  is default chart library, it will be always available. FusionCharts library
  and Highcharts library will be available when those chart libraries file has
  been loaded.
* Fix issues related to touch screen device, now this component can be run at 
  all touch Screen laptops and tablets like ipad.


### V1.3 July 5th, 2013

* Replace FusionChart library with dojo chart library
* Use filepicker.io to load csv file from cloud drive
* replace xmla4js with own xmla service, no dependence on xmla4js
* Redesign pivot control pane to support tree structure (for OLAP)
* Redesign pivot grid layout engine to support values within columns and rows
  and can be moved up and down.
* Implement the function of expanding and collapsing columns tree
* Redesign the calculation engine to improve performance 
* Implement Fullscreen Mode using HTML5 FullScreen API 



### V1.2 June 8th, 2013

* Redesign layout to allow change control pane position
* Upgrade to dojo1.9 and remove dependence of Expandpane and floatingPane
* Put grid pane and chart pane inside one container to easily control layout
* Redesign Import Module and implement change CSV content before import
* Implement Zoom in and Zoom out Grid and charts
* Implement Export to excel functionality 
* Replace webkitHTmltopdf with phantomjs to output report to pdf
* Move xmla4js to client side (ready to replace xmla4js with own js lib)
* Use node.js request module at backend to do transparent proxy



### V1.1 May 3rd, 2013

* The biggest improvement to make it production ready
* Redesign the calculation engine and grid layout to support filters
* Redesign UI to use standard menu and improve User experience
* Redesign fields pivot grid to support OLAP
* Move data input and report export as individual module 
* Add more customize options for integration 


### V1.0 April 3rd, 2013

* Redesign the grid to better control the style
* Fix all issues after 1.0beta2 review
* Improve the calculation engine to support larger source dataset
* Redesign the chart to improve the performance
* Add more customize API to easy integration 


### V1.0b2 March 13th, 2013

* Change to based on dojo1.8.3 and use pure AMD 
* Fix all issues after 1.0beta review
* Totally Support IE8,9,10, Firefox, Chrome, Safari
* Change to use 
  [put-selector](https://github.com/kriszyp/put-selector) and
  [xstyle](https://github.com/kriszyp/xstyle)
* Separate Core modules into an independent pure javascript component and put on 
  [Github](https://github.com/) and 
  [Cloud 9 IDE](https://c9.io), create
  [node.js](http://nodejs.org/) server to test component.
* Clean code to satisfy CLoud9 IDE Code Quality Check.
* Reorganize code to follow javascript code standard best practice.
* Use online javascript compressor [jscompress.com](http://jscompress.com/)


### V1.0b1 Aug 26th, 2012 

* Change pivot chart from dojo chart to 
  [FusionCharts](http://www.fusioncharts.com/). 
* Create a demo wordpress website 
  [webpivottable.com](http://webpivottable.com/) for public review.

### V0.3 June 13th, 2012 

* Implement PHP backend export HTML to pdf. 
* Implement PHP backend to load excel data. 
* Add pivot charts based on dojo chart library.


### V0.2 May 25th, 2012 

* Solve the long run script issue while hierarchy of rows or columns becomes
  complicate. 
* Change lazy-load cells to one-time loading. 
* Add grid options to change pivotGrid layout
* Add filter functions.


### V0.1 April 29th, 2012

* Implement basic functions of pivot controls & pivot grid, all based on 
  [dojo](http://dojotoolkit.org/) and 
  [dgrid](https://github.com/SitePen/dgrid) widget.




