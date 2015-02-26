[Back to Home](./index.html)


## Customize the look and feel of WebPivotTable:

We designed the WPT component to be as flexible as possible for web developers to customize.
There are many options to consider, all of which can be switched on or off before being passed
as parameters when creating the WebPivotTable object on your page or can be set by API after
WebPivotTable object had been created.

### Pass in cutomize options when create WebPivotTable object

    var myOptions = {}
    new WebPivotTable({customOptions:myOptions},"wpt-container");

Please reference [Customize Options](#cutomizeoptions) to all the options and their default values. 
You can change all or part of these options, then pass them to the constructor:

Keep in mind that it’s  unnecessary to pass options you wish to leave as default. For example, if you only want to hide open and save buttons, you can pass customOptions as:

    var myOptions = {
       uiFlags: {
          openWptBtn: 0,
          saveWptBtn: 0
       }
    }
    new WebPivotTable({customOptions:myOptions},"wpt-container");

### Set cutomize options for existing WebPivotTable object

Even after WPT object being created, you can still change options:

    var webPivotTable  = new WebPivotTable({},"wpt-container");
    webPivotTable.setOptions(customOptions);


<h3 id="cutomizeoptions">Customize Options</h3>

    {

        locale: 'en',  // 'en','zh','es','pt',‘fr','de','ar','ru','it','nl','el','he','hi','hu','sv','ko','ja'
        availableLocales: ['en','zh','es','pt','it'],

        leavePageWarning: 1,

        uiFlags: {
            newWptBtn: 1,
            openWptBtn: 1,
            saveWptBtn: 1,
            switchViewBtn: 1,
            userBtn: 1,
            navPaneBtn: 1,
            settingBtn: 1,
            languageSwitchBtn: 1, // show/hide 'Language Switch' dropdown button: 1/0
            helpBtn: 1, // show/hide 'Help' button: 1/0
            aboutBtn: 1, // show/hide 'About' button: 1/0

            memoryTab: 1,
            olapTab: 1,
            internetLinkTab: 1,
            cloudDriveBtn: 1,
            localDriveTab: 1,
            googleSpreadSheetTab: 1,
            copyPasteTab: 1,

            localSaveTab: 1,
            serverSaveTab: 1,

            showDimInfoWhenHover: 0,

            zoomBtn: 1,
            fullScreenBtn: 1,
            exportExcelBtn: 1
        },

        fileLinks:[],

        filepicker:{
            key:''  // filepicker application key
        },

        decimalPoint: '.',  // decimal point charactor: '.', ','
        thousandsSep: ',', // thousands separator: ',' '.', ' '
        zoomScaleStep: 0.05,
        reportCssFile: './brightsea/wpt/wptReport.css',

        olap:{
            drillThroughMaxRows: 1000,
            sync : 0,
            timeout : 300000,
            xmlaProxyEnabled: 1,        // enable/disable Xmla Proxy 1/0
            xmlaProxy: '/wpt/xmlaProxy'
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

        pivotFields: {  //Pivot Fields List pane
            show: 1,   // show/hide: 1/0
            position:'right', // position: 'left', 'top', 'right', 'bottom'
            stacked: 0,  //stack fields area or not: 1/0
            width:300, // width, only for left and right
            height:200 // height, only for top and bottom
        },

        server: {
            helpUrl:'http://webpivottable.com/documents',
            fileProxyEnabled: 1,        // enable/disable file Proxy 1/0
            fileProxy: '/wpt/fileProxy',
            fileProxyWithBase64: '/wpt/fileProxyWithBase64',
            generatePdf: '/wpt/generatePdf'
        },


        csvGrid:{
            cellWidth: 120,
            cellHeight: 25
        },



        report: {

        },

        sheet:{
            chartFirst: 0, //show chart at top/left? 0/1
            pivotLayout: '1', // Pivot Grid and chart layout
            // 0 -- tile horizontal, 1 -- tile vertical,
            // 2 -- grid only,  3 -- chart only

            expandRows: 1,
            expandCols: 1,
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
