define({
  root: {
	
	Msg_LoadDataFirst: "No data yet, please load data first.",
    Msg_LoadingData: "Loading data, total records: ",
    Msg_LoadingCubeData: "Loading OLAP cube data ",
    Msg_LoadingGSSData: "Loading Google spreadsheet data ",
	Msg_ChooseFieldsFirst: "To build a report, choose fields from Pivot Fields List.",
    Msg_UpdatingPivotGridData: "Updating pivot grid data ",
    Msg_QueryCubeRetrieveData: "Querying OLAP cube to retrieve data ",
    Msg_RetrievingMembers: "Retrieving members of attribute ",    
    Msg_DrillingThrough: "Drilling through to the cell details ",    
    Msg_ExportingReport: "Exporting Report ",    
    
    Msg_LoadingFile: "Loading file: ",
    Msg_LoadingOlapCube: "Retrieving OLAP Cubes :",
    Msg_PromptLoadCube: "Click any cube to load it into Pivot Table",
    Msg_InputFileUrl: "Please input File URL.",
    Msg_InputXmlaServerUrl: "Please input XMLA Server URL.",
    Msg_InputPublicSpreadsheetUrl: "Please input public google spreadsheet URL.",
    Msg_EmptyGoogleSpreadsheet: "No data found in this spreadsheet. ",

    Err_NotValidWptFormat: "Not a valid WebPivotTable file.",
    Err_OLAP_NoDataSource: "No DataSource found at this Server: ",
    Err_OLAP_NoCatalog: "No Catalog found at this DataSource: ",
    Err_OLAP_NoDimension: "No Dimension found at this Cube: ",

    Msg_Html5FileNotSupport: "The browser you are using doesn't support this feature, please use HTML5 Broswers like Chrome. Firefox, IE9, Safari.",
    Msg_CloudDriveNotSupport: "Your network prevent you from using cloud drive.",

    /* WebPivotTable.js  */  
    Lbl_Sum: "Sum",
	Lbl_Count: "Count",
	Lbl_Average: "Average",
	Lbl_Max: "Max",
	Lbl_Min: "Min",
	Lbl_Median: "Median",
	Lbl_Mode: "Mode",
	Lbl_StdDev: "Standard Deviation",
	Lbl_Variance: "Variance",

    Tab_SourceData: "SourceData",
    Tab_PivotTable: "PivotTable",
    Tab_Report: "Report",
    Tab_DrillThrough: "DrillThrough",

	Lbl_Rows: "Rows",
	Lbl_Cols: "Columns",
	Lbl_Filters: "Filters",
	Lbl_Values: "Values",

    Lbl_DeferUpdate: "Defer Layout Update",
	Btn_Update:"Update",

    /* MainBar.js  */

    Mnu_OpenWpt: "Open WebPivotTable File (.wpt)",
    Mnu_SaveWpt: "Save WebPivotTable to File",
    Mnu_SourceData: "Open Source data view",
    Mnu_Report: "Create and export a report",

    Mnu_Setting: "Setting",
    Dlg_Setting: "Setting",

    Btn_LoadData: "DataSource",
    Tip_LoadData: "Load data from all kinds of data sources to create a new WebPivotTable.",
    Dlg_LoadData: "Load Data From Data Source",

    Mnu_CsvFile: "CSV File (.csv)",
    Mnu_XlsFile: "XLS File (Excel 97-2004)",
    Mnu_XlsxFile: "XLSX File (Excel 2007+)",
    Mnu_OlapCube: "OLAP Cube",
    Mnu_GssFile: "Google Spreadsheet",

    Mnu_Internet: "Internet Link",
    Mnu_LocalDrive:"Local Drive",
    Mnu_CopyPaste: "Copy & Paste",
    Mnu_CloudDrive: "Cloud Drive",

    Lbl_EnterWptUrl: "WPT file URL:",
    Lbl_FileProxy: "Use File Proxy (For cross domain access)",

    Lbl_EnterFileUrl: "File URL:",

    Lbl_CopyPasteCsv: "Input or Copy&Paste CSV data:",
    Btn_Load: "Load",
    
    Btn_GotoCloudDrive: "Goto Cloud Drive",

    Lbl_XmlaServerUrl: "XMLA Server URL:",
    Btn_GetCubes: "Get Cubes",
    Lbl_XmlaProxy: "Use Xmla Proxy (For cross domain access)",    

    Lbl_PublicSpreadsheetUrl: "Public Spreadsheet URL:",

    Tip_About: "About",
    Dlg_About: "About",

    Tip_Help: "Help",

    Lbl_Language: "Language",    
    Lbl_English: "English",    
    Lbl_Chinese: "Chinese",
    Lbl_French: "French",
    Lbl_German: "German",
    Lbl_Spanish: "Spanish",
    Lbl_Portuguese: "Portuguese",
    Lbl_Arabic: "Arabic",
    Lbl_Russian: "Russian",
    Lbl_Italian: "Italian",
    Lbl_Dutch: "Dutch",
    Lbl_Greek: "Greek",
    Lbl_Hebrew: "Hebrew",
    Lbl_Hindi: "Hindi",
    Lbl_Hungarian: "Hungarian",
    Lbl_Swedish: "Swedish",
    Lbl_Japanese: "Japanese",
    Lbl_Korean: "Korean",
    Lbl_Polish: "Polish",


    Lbl_DecimalPoint: "Decimal Point",
    Lbl_ThousandsSep: "Thousands Separator",
    Lbl_DrillThroughMaxRows: "Default Olap Cube Drill Through Max Rows:",
    
    Btn_OK: "OK",
    Btn_Cancel: "Cancel",

    /* PivotBar.js  */    

    Tip_ShowPivotFieldsList: "Show Pivot Fields List",
    Tip_HidePivotFieldsList: "Hide Pivot Fields List",
    
    Tip_TileHorizontal: "Tile Horizontal",
    Tip_TileVertical: "Tile Vertical",
    Tip_GridOnly: "Show Pivot Grid Only",
    Tip_ChartOnly: "Show Pivot Chart Only",
    
    Btn_PivotFields: "Pivot Fields",
    Tip_PivotFields: "Change or Filter Pivot Fields",
    Lbl_NoneSelected: "(None)",
    Mnu_FieldFiltering: "Field Filtering...",

    Tip_ShowEmpty: "Show empty members",
    Tip_ShowNonEmpty: "Show non empty members only",
    
    Btn_Mdx: "MDX",
    Tip_Mdx: "MDX Statement",

    Btn_Run: "Run",
    Tip_Run: "Execuate this MDX stament on OLAP Cube",
    
    Tip_SwapAxis: "Swap Rows and Columns",
    Tip_ClearAll: "Clear All",
    Tip_ClearFilter: "Clear Filters",
    
    /* PivotFields.js  */
    
	Lbl_PivotFieldsList: "Pivot Fields List",
	Lbl_DragFields: "Drag fields between areas below:",

    Tip_FieldsListLayout: "Layout Pivot Fields List",    
    Lbl_FieldsListPosition: "Position on",
    Btn_OnTop: "Top",
    Btn_OnBottom: "Bottom",
    Btn_OnLeft: "Left",
    Btn_OnRight: "Right",
    Lbl_FieldsListStacked: "Stacked",

    Lbl_FieldsListWidth: "Width (Left/Right Positions)",
    Lbl_FieldsListHeight: "Height (Top/Bottom Positions)",
    
    Btn_SelectAll: "All",
    Tip_SelectAll: "Select All Items",
    Btn_SelectNone: "None",
    Tip_SelectNone: "Un-Select All Items",
    
    Lbl_Search: "Search",
    
    Tip_SortAscend: "Sort Ascend",
    Tip_SortDescend: "Sort Descend",
    
    Mnu_AddToFilters: "Add To Filters",
    Mnu_AddToRows: "Add To Rows",
    Mnu_AddToCols: "Add To Columns",
    Mnu_AddToValues: "Add To Values",

    Mnu_MoveUp: "Move Up",
    Mnu_MoveDown: "Move Down",
    Mnu_MoveToBegin: "Move To Beginning",
    Mnu_MoveToEnd: "Move To End",
    Mnu_MoveToFilters: "Move To Filters",
    Mnu_MoveToRows: "Move To Rows",
    Mnu_MoveToCols: "Move To Columns",
    Mnu_MoveToValues: "Move To Values",
    
    Mnu_RemoveField: "Remove Field",
    
    Mnu_FieldSettings: "Field Settings ...",	
    Mnu_ValueFieldSettings: "Value Field Settings ...",	

    Tab_Subtotal: "Subtotal & Filters",
    Tab_Layout: "Layout & Print",
    Tab_Summarize: "Summarize Values By",
    Tab_ShowValueAs: "Show Value As",
    Tab_NumberFormat: "Number Format",

    Lbl_SourceName:"Source Name: ",
    Lbl_CustomName:"Custom Name: ",

    Lbl_OF: " of ",
    Lbl_Sample: "Sample",
    Lbl_DecimalPlaces: "Decimal places: ",
    Lbl_UseKSeparator: "Use thousands separator",
    Lbl_Symbol: "Symbol($)",

    /* PivotGrid.js  */    

    Lbl_AllRows: "All Rows",    
    Lbl_AllCols: "All Columns",    
    Tip_ShowSign: "Signs(+/-)",
    Tip_ShowTotalRows: "Grand Total Rows",
    Tip_ShowTotalCols: "Grand Total Columns",
    Tip_ShowSubtotalRows: "Subtotal Rows",
    Tip_ShowSubtotalCols: "Subtotal Columns",
    Tip_TabularForm: "Tabular form",
    Tip_CompactForm: "Compact form",

    Lbl_ColHeader: "Column Header",
    Lbl_RowHeader: "Row Header",
    Lbl_DataCell: "Data",
    Lbl_SubtotalCell: "Subtotal",
    Lbl_TotalCell: "Grand Total",
    
    Lbl_Cells: " Cells",

    Lbl_HorizontalAlignment: "Horizontal Alignment:",
    Lbl_VerticalAlignment: "Vertical Alignment:",
    Lbl_TextDecoration: "Text Decoration:",
    Lbl_TextTransform: "Text Transform:",
    Lbl_FontWeight: "Font Weight:",
    Lbl_FontSize: "Font Size:",
    Lbl_FontStyle: "Font Style:",

    Tip_AlignTop: "Align Top",
    Tip_AlignMiddle: "Align Middle",
    Tip_AlignBottom: "Align Bottom",
    Tip_AlignLeft: "Align Left",
    Tip_AlignCenter: "Align Center",
    Tip_AlignRight: "Align Right",
    Tip_None: "None",
    Tip_Underline: "Underline",
    Tip_Overline: "Overline",
    Tip_Capitalize: "Capitalize",
    Tip_Uppercase: "Uppercase",
    Tip_Lowercase: "Lowercase",
    Tip_Lighter: "Lighter",
    Tip_Normal: "Normal",
    Tip_Bold: "Bold",
    Tip_Bolder: "Bolder",
    Tip_Italic: "Italic",
    Tip_Oblique: "Oblique",


    Btn_Styles: "Styles",
    Tip_Styles: "Change Grid styles",

    Btn_ResetToDefault: "Reset to Default",
    Lbl_Background: "Background: ",

    Tip_RowHeadWidth: "Row Header Width",
    Tip_CellWidth: "Cell Width",
    Tip_CellHeight: "Cell Height",
    Tip_ZoomIn: "Zoom In",
    Tip_ZoomOut: "Zoom Out",
    Tip_FullScreen: "Full Screen Mode",
    Tip_ExportToExcel: "Export to Excel file",
    
    Lbl_Row: "Row",
    Lbl_Col: "Column",
    Lbl_Value: "Value",
    Lbl_ClickToDrillThrough: "Click to drill through.",

    /* PivotChart.js  */    
    
    Btn_ChartOptions: "Options",
    Tip_ChartOptions: "Change chart options (type, theme, attributes)",

    Tip_ChartWidth: "Chart Width",
    Tip_ChartHeight: "Chart Height",
    
    Tip_ColumnChart: "Column Chart",
    Tip_BarChart: "Bar Chart",
    Tip_LineChart: "Line Chart",
    Tip_SplineChart: "Spline Chart",
    Tip_AreaChart: "Area Chart",
    Tip_AreaSplineChart: "Area Spline Chart",
    Tip_PieChart: "Pie Chart",  //to be fixed in other language file

    Lbl_ChartStacked: "Stacked",
    Lbl_NoStacked: "No",
    Lbl_ValueStacked: "By Value",
    Lbl_PercentStacked: "By Percent",
    
    Lbl_ChartType: "Type",
    Lbl_ChartTheme: "Theme",
    Lbl_Legend: "Legend",
    Lbl_Floating: "Floating",
    Lbl_Reverse: "Reverse",
    Lbl_ShowLabels: "Label",
    Lbl_Rotation: "Rotation",
    Lbl_Tooltip: "Tooltip",
    Lbl_Shadow: "Shadow",
    Lbl_ExportMenu: "Export Menu",

    Lbl_LegendHorizontal: "Horizontal",
    Lbl_LegendVertical: "Vertical",
    
    Lbl_High_Loading: 'Loading Data ...',
    Lbl_High_ContextButtonTitle: 'Chart context menu',
    Lbl_High_DownloadJPEG: 'Download JPEG image',
    Lbl_High_DownloadPDF: 'Download PDF document',
    Lbl_High_DownloadPNG: 'Download PNG image',
    Lbl_High_DownloadSVG: 'Download SVG vector image',
    Lbl_High_PrintChart: 'Print chart',
    Lbl_High_ResetZoom: 'Reset zoom',
    Lbl_High_ResetZoomTitle: 'Reset zoom level 1:1',
    

    Lbl_3DView: "3D View",
    Lbl_Alpha: "Alpha",
    Lbl_Beta: "Beta",
    Lbl_Depth: "Depth",
    Lbl_ViewDistance: "View Distance",

    /* DataPane.js  */    

    Lbl_XmlaUrl: "XMLA Server URL: ",
    Lbl_DataSource: "DataSource: ",
    Lbl_Catalog: "Catalog: ",
    Lbl_CubeName: "Cube Name: ",

    /* DrillThroughPane.js  */    

    /* ReportPane.js  */    

    Btn_ExportToPdf: "Export To PDF File"
    

	},
	
  zh:true,
  pt:true,
  es:true,
  it:true
});