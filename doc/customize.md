[Back to Index](./index.md)


## Customize WPT component:

WPT component can be customized by web developers through customize options.

There are many [Customize Options](#customizeoptions), all of which can be passed
in parameters when creating the WebPivotTable object on your page or can be set 
by API after WebPivotTable object had been created.

### Pass in customize options when create WebPivotTable object

    var myOptions = {
        uiFlags: {
            openWptBtn: 0,
            saveWptBtn: 0
        }
    };
    var webPivotTable = new WebPivotTable({
        customOptions:myOptions
    },"wpt-container");

### Set customize options for existing WebPivotTable object

Even after WebPivotTable object being created, you can still change options:

    var myOptions = {
        uiFlags: {
            openWptBtn: 0,
            saveWptBtn: 0
        }
    };
    webPivotTable.setOptions(myOptions);


<h3 id="customizeoptions">All Customize Options</h3>

    var defaultOptions = {
    
        locale: 'en',  // current language locale
        availableLocales: ['en','zh','es','pt','it'], //selectable locale at UI
                       // 'en','zh','es','pt',‘fr','de','ar','ru','it',
                       // 'nl','el','he','hi','hu','sv','ko','ja'

        leavePageWarning: 1, //When leave page, whether to show a warning

        uiFlags: {
            switchViewBtn: 1,     // show/hide TopBar view switch buttons
            newWptBtn: 1,         // show/hide TopBar "Create New WPT" button
            openWptBtn: 1,        // show/hide TopBar "Open WPT" button
            saveWptBtn: 1,        // show/hide TopBar "Save WPT" button
            
            navPaneBtn: 1,        // show/hide TopBar "Show pivot fields list" button
            userBtn: 1,           // show/hide TopBar "Users" dropdown button
            settingBtn: 1,
            languageSwitchBtn: 1, // show/hide TopBar 'Language' dropdown button
            helpBtn: 1,           // show/hide TopBar 'Help' button, but not work for free version
            aboutBtn: 1,          // show/hide TopBar 'About' button, but not work for free version

            memoryTab: 1,         // show/hide Load data dialog "Local Memory" Tab
            olapTab: 1,           // show/hide Load data dialog "OLAP Cube" Tab
            internetLinkTab: 1,   // show/hide Load data dialog "Internet Link" Tab
            cloudDriveBtn: 1,     // show/hide Load data dialog "Goto Cloud Drive" Button
            localDriveTab: 1,     // show/hide Load data dialog "Local Drive" Tab
            webServiceTab: 1,     // show/hide Load data dialog "Web Service" Tab
            googleSpreadSheetTab: 1, // show/hide Load data dialog "Google Spreadsheet" Tab
            copyPasteTab: 1,      // show/hide Load data dialog "Copy & Paste" Tab

            localSaveTab: 1,      // show/hide Save WPT dialog "Save to local" Tab
            serverSaveTab: 1,     // show/hide Save WPT dialog "Save to Server" Tab
            
            showDimInfoWhenHover: 0, // Whether Show Dimension/hierachy/level Tooltip when mouse hover

            sheetBarPivot: 1,     // show/hide Pivot buttons on sheet bar
            sheetBarFields: 1,    // show/hide Pivot fields on sheet bar
            
            sheetSwitchBtn: 1,    // show/hide "switch grid and chart" button on sheet bar
            sheetLayoutBtn: 1,    // show/hide "grid & chart layout" buttons on sheet bar

            exportGridMenu: 1,    // show/hide "export"  menu on sheet pivot grid menu bar
            exportChartMenu: 1,   // show/hide "export"  menu on sheet pivot chart menu bar
            exportReportMenu: 1,  // show/hide "export"  menu on report menu bar
            exportSourceMenu: 1,  // show/hide "export"  menu on source menu bar
            
            exportToExcel: 1,     // support "Export to Excel"
            exportToHtml: 1,      // support "Export to HTML"
            exportToPdf: 1,       // support "Export to PDF"
            exportToPng: 1,       // support "Export to PNG"
            exportToJpeg: 1,      // support "Export to JPEG"
            exportToGif: 1,       // support "Export to GIF"

            zoomBtn: 1,           // show/hide "Zoom"  menu on sheet control menu bar
            fullScreenBtn: 1      // Support "Full Screen" mode for grid & chart
        },

        fileLinks:[],

        filepicker:{
            key:''               // filepicker application key
        },

        decimalPoint: '.',       // decimal point charactor: '.', ','
        thousandsSep: ',',       // thousands separator: ',' '.', ' '
        zoomScaleStep: 0.05,     // when zoom in/out, this is a scale for each step
        reportCssFile: './brightsea/wpt/wptReport.css', // report CSS file path
        webServiceTimeout: 10000,  // Web Service call timeout setting

        controlMenuBarPosition:'right', // Control MenuBar position: 'left', 'right'

        olap:{
            drillThroughMaxRows: 1000,  // Max return rows for each drill through call
            sync : 0,                   // Synchroize / Asynchorize call
            timeout : 300000,           // Timeout for xmla call 
            xmlaProxyEnabled: 1,        // enable/disable Xmla Proxy 1/0
            xmlaProxy: '/wpt/xmlaProxy' // Server proxy for cross domain xmla access
        },

        exporting: {
            pdf: {
                paperMarginTop: '1cm',
                paperMarginLeft: '1cm',
                paperMarginBottom: '1cm',
                paperMarginRight: '1cm',
                paperFormat: 'A4', //'A3', 'A4', 'A5', 'Legal', 'Letter', 'Tabloid'. 'Custom'
                paperOrientation: 'portrait',  //'portrait', 'landscape'
                paperWidth: '600px',
                paperHeight: '600px',
                headerHeight: '1cm',
                header: '',
                footerHeight: '1cm',
                footer: '',
                zoomFactor: 1
            }
        },

        pivotFields: {               // Pivot Fields List pane
            show: 1,                 // show/hide: 1/0
            position:'right',        // position: 'left', 'top', 'right', 'bottom'
            stacked: 0,              // stack fields area or not: 1/0
            width:300,               // width, only for left and right
            height:200               // height, only for top and bottom
        },

        server: {
            helpUrl:'http://webpivottable.com/documents',
            fileProxyEnabled: 1,          // enable/disable file Proxy 1/0
            fileProxy: '/wpt/fileProxy',  // Server proxy for cross domain file acess
            generatePdf: '/wpt/generatePdf'  // Server generate PDF service
        },


        csvGrid:{
            cellWidth: 120,
            cellHeight: 21
        },
        
        source: {
            grid: {
                cellWidth: 120,
                cellHeight: 21
            }
        },

        report: {

        },

        sheet:{
            chartFirst: 0,          // show chart at top/left? 0/1
            pivotLayout: '1',       // Pivot Grid and chart layout
                                    // 0 -- tile horizontal, 1 -- tile vertical,
                                    // 2 -- grid only,  3 -- chart only
            expandRows: 1,          // Expand/collapse All rows
            expandCols: 1,          // Expand/Collapse All columns  
            nonEmpty: 1,
            mdx: ''
        },

        grid:{
            showSigns: 1,
            showRowTotals: 1,
            showColTotals: 1,
            showRowSubtotals: 1,
            showColSubtotals: 1,
            compactForm: 1,
            rowHeaderWidth: 200,
            cellWidth: 100,
            cellHeight: 25,
            theme: 'wpt-default'
        },
        chart:{
            width: 500,
            height: 300,

            high:{
                theme: 'default', //default, grid, gray, skies, drak-blue, drak-green
                chart:{
                    type:'column',  //column, bar, line, spline, area, areaspline, pie
                    options3d: {
                        enabled: false,
                        alpha: 15,
                        beta: 15,
                        depth: 50,
                        viewDistance: 25
                    }
                },
                credits: {
                    enabled:false
                },
                exporting: {
                    enabled:false
                },
                navigation:{
                    buttonOptions:{
                        align: 'right',   // left, center, right
                        verticalAlign: 'top' // top, middle, bottom
                    }
                },
                legend: {
                    enabled: true,
                    floating: false,
                    layout: 'vertical',  //horizontal, vertical
                    align: 'right',      // left, center, right
                    verticalAlign: 'middle', // top, middle, bottom
                    reversed: false
                },
                tooltip:{
                    enabled: true,
                    shadow: true
                },
                plotOptions: {
                    series:{
                        stacking: null //null, 'normal', 'percent'
                    }
                },
                xAxis: {
                    labels:{
                        enabled: true,
                        align:'left',  // left, center, right
                        rotation:45    // 0 -- 360
                    }
                }
            }
        }
    };
