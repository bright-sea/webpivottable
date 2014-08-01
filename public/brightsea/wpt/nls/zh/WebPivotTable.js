define({
	Msg_LoadDataFirst: "还没有数据，请先加载数据",
    Msg_LoadingData: "正在加载数据，总记录数：",
    Msg_LoadingCubeData: "正在加载OLAP多维数据集数据",
    Msg_LoadingGSSData: "正在加载Google电子数据表数据",
    Msg_ChooseFieldsFirst: "为创建报表，请从数据透视字段列表中选取字段",
    Msg_UpdatingPivotGridData: "正在更新数据透视表格数据 ",
    Msg_QueryCubeRetrieveData: "正在查询OLAP多维数据集以获取数据 ",
    Msg_RetrievingMembers: "正在获取属性成员 ",    
    Msg_DrillingThrough: "正在钻取单元细节 ",    
    Msg_ExportingReport: "正在输出报表 ",    
    
    Msg_LoadingFile: "正在加载文件: ",
    Msg_LoadingOlapCube: "正在获取OLAP多维数据集:",
    Msg_PromptLoadCube: "点击任何多维数据集将它加载到数据透视表中",
    Msg_InputFileUrl: "请输入文件URL.",
    Msg_InputXmlaServerUrl: "请输入XMLA服务器URL.",
    Msg_InputPublicSpreadsheetUrl: "请输入公开的google电子数据表URL.",
    Msg_EmptyGoogleSpreadsheet: "这个电子数据表中没有数据. ",

    Err_NotValidWptFormat: "不是一个有效的WEB数据透视表文件.",
    Err_OLAP_NoDataSource: "在这个服务器上没有发现数据源: ",
    Err_OLAP_NoCatalog: "在这个数据源没有发现目录: ",
    Err_OLAP_NoDimension: "在这个多维数据集没有发现维字段: ",

    Msg_Html5FileNotSupport: "您正在使用的浏览器不支持这个特性， 请使用HTML5浏览器， 如Chrome. Firefox, IE9, Safari.",
    Msg_CloudDriveNotSupport: "您的网络禁止您使用云驱动器.",

    /* WebPivotTable.js  */  
    Lbl_Sum: "总计",
	Lbl_Count: "计数",
	Lbl_Average: "平均值",
	Lbl_Max: "最大值",
	Lbl_Min: "最小值",
	Lbl_Median: "中值",
	Lbl_Mode: "众数",
	Lbl_StdDev: "均方差",
	Lbl_Variance: "方差",

    Tab_SourceData: "源数据",
    Tab_PivotTable: "数据透视表",
    Tab_Report: "报表",
    Tab_DrillThrough: "钻取",

	Lbl_Rows: "行字段",
	Lbl_Cols: "列字段",
	Lbl_Filters: "过滤字段",
	Lbl_Values: "值字段",

    Lbl_DeferUpdate: "延迟布局更新",
	Btn_Update:"更新",

    /* MainBar.js  */

    Mnu_OpenWpt: "打开WEB数据透视表文件 (.wpt)",
    Mnu_SaveWpt: "保存WEB数据透视表到文件",
    Mnu_Report: "创建并输出报表",
    Mnu_SourceData: "打开源数据视图",


    Mnu_Setting: "设置",
    Dlg_Setting: "设置",

    Btn_LoadData: "数据源",
    Tip_LoadData: "从各种数据源加载数据以创建新的WEB数据透视表.",
    Dlg_LoadData: "从数据源加载数据",

    Mnu_CsvFile: "CSV文件 (.csv)",
    Mnu_XlsFile: "XLS文件(Excel 97-2004)",
    Mnu_XlsxFile: "XLSX文件(Excel 2007+)",
    Mnu_OlapCube: "OLAP多维数据集",
    Mnu_GssFile: "Google电子数据表",

    Mnu_Internet: "互联网链接",
    Mnu_LocalDrive:"本地驱动器",
    Mnu_CopyPaste: "拷贝/粘贴",
    Mnu_CloudDrive: "云驱动器",

    Lbl_EnterWptUrl: "WPT文件URL:",
    Lbl_FileProxy: "使用文件代理服务器 （支持跨域访问)",

    Lbl_EnterFileUrl: "文件URL:",

    Lbl_CopyPasteCsv: "输入或者拷贝/粘贴CSV数据:",
    Btn_Load: "加载",
    
    Btn_GotoCloudDrive: "去云驱动器",

    Lbl_XmlaServerUrl: "XMLA服务器URL:",
    Btn_GetCubes: "获取多维数据集",
    Lbl_XmlaProxy: "使用Xmla代理服务器 (支持跨域访问)",  
    
    Lbl_PublicSpreadsheetUrl: "公开的电子数据表URL:",

    Tip_About: "关于",
    Dlg_About: "关于",

    Tip_Help: "帮助",

    Lbl_Language: "语言",    
    Lbl_English: "英语",    
    Lbl_Chinese: "中文",
    Lbl_French: "法语",
    Lbl_German: "德语",
    Lbl_Spanish: "西班牙语",
    Lbl_Portuguese: "葡萄牙语",
    Lbl_Arabic: "阿拉伯语",
    Lbl_Russian: "俄语",
    Lbl_Italian: "意大利语",
    Lbl_Dutch: "荷兰语",
    Lbl_Greek: "希腊语",
    Lbl_Hebrew: "希伯来语",
    Lbl_Hindi: "印度语",
    Lbl_Hungarian: "匈牙利语",
    Lbl_Swedish: "瑞典语",
    Lbl_Korean: "韩语",
    Lbl_Japanese: "日语",

    Lbl_DecimalPoint: "十进位小数点",
    Lbl_ThousandsSep: "千位分割符",
    Lbl_DrillThroughMaxRows: "缺省OLAP多维数据集钻取最大行数:",

    Btn_OK: "确定",
    Btn_Cancel: "取消",

    /* PivotBar.js  */    

    Tip_ShowPivotFieldsList: "显示数据透视字段列表",
    Tip_HidePivotFieldsList: "隐藏数据透视字段列表",
    
    Tip_TileHorizontal: "水平平铺",
    Tip_TileVertical: "垂直平铺",
    Tip_GridOnly: "只显示数据透视表",
    Tip_ChartOnly: "只显示数据透视图",
    
    Btn_PivotFields: "透视字段",
    Tip_PivotFields: "修改或过滤透视字段",
    Lbl_NoneSelected: "(无)",
    Mnu_FieldFiltering: "字段过滤...",

    Tip_ShowEmpty: "显示空的成员",
    Tip_ShowNonEmpty: "只显示非空成员",
    
    Btn_Mdx: "MDX",
    Tip_Mdx: "MDX语句",

    Btn_Run: "运行",
    Tip_Run: "在OLAP多维数据集执行该MDX语句",
    
    Tip_SwapAxis: "行列字段互换",
    Tip_ClearAll: "清除所有选择",
    Tip_ClearFilter: "清除过滤选择",
    


    /* PivotFields.js  */    
    
	Lbl_PivotFieldsList: "数据透视字段列表",
	Lbl_DragFields: "在以下区域间拖动字段",

    Tip_FieldsListLayout: "数据透视字段列表布局",    
    Lbl_FieldsListPosition: "置于",
    Btn_OnTop: "上方",
    Btn_OnBottom: "下方",
    Btn_OnLeft: "左方",
    Btn_OnRight: "右方",
    Lbl_FieldsListStacked: "堆叠",

    Lbl_FieldsListWidth: "宽度 (位于左/右方时)",
    Lbl_FieldsListHeight: "高度 (位于上/下方时)",
    
    Btn_SelectAll: "全选",
    Tip_SelectAll: "选择所有项",
    Btn_SelectNone: "全不选",
    Tip_SelectNone: "全不选所有项",
    
    Lbl_Search: "搜索",
    
    Tip_SortAscend: "向上排序",
    Tip_SortDescend: "向下排序",
    
    Mnu_AddToFilters: "加入过滤字段",
    Mnu_AddToRows: "加入行字段",
    Mnu_AddToCols: "加入列字段",
    Mnu_AddToValues: "加入值字段",

    Mnu_MoveUp: "上移",
    Mnu_MoveDown: "下移",
    Mnu_MoveToBegin: "移到首位",
    Mnu_MoveToEnd: "移到末位",
    Mnu_MoveToFilters: "移到过滤字段",
    Mnu_MoveToRows: "移到行字段",
    Mnu_MoveToCols: "移到列字段",
    Mnu_MoveToValues: "移到值字段",
    
    Mnu_RemoveField: "移除该字段",
    
    Mnu_FieldSettings: "字段设置...",	
    Mnu_ValueFieldSettings: "值字段设置...",	

    Tab_Subtotal: "小计和过滤",
    Tab_Layout: "布局和打印",
    Tab_Summarize: "汇总值为",
    Tab_ShowValueAs: "显示值为",
    Tab_NumberFormat: "数字格式",

    Lbl_SourceName:"源名: ",
    Lbl_CustomName:"定制名: ",

    Lbl_OF: " - ",
    Lbl_Sample: "样本",
    Lbl_DecimalPlaces: "小数点位置: ",
    Lbl_UseKSeparator: "使用千位分割符",
    Lbl_Symbol: "符号($)",

    /* PivotGrid.js  */    

    Lbl_AllRows: "所有行",    
    Lbl_AllCols: "所有列",    
    Tip_ShowSign: "符号(+/-)",
    Tip_ShowTotalRows: "总计行",
    Tip_ShowTotalCols: "总计列",
    Tip_ShowSubtotalRows: "小计行",
    Tip_ShowSubtotalCols: "小计列",

    Tip_TabularForm: "表格形式",
    Tip_CompactForm: "压缩形式",

    Lbl_ColHeader: "列表头",
    Lbl_RowHeader: "行表头",
    Lbl_DataCell: "数据",
    Lbl_SubtotalCell: "小计",
    Lbl_TotalCell: "总计",
    
    Lbl_Cells: "单元",

    Lbl_HorizontalAlignment: "水平对齐:",
    Lbl_VerticalAlignment: "垂直对齐:",
    Lbl_TextDecoration: "文字装饰:",
    Lbl_TextTransform: "文字变换:",
    Lbl_FontWeight: "字体浓淡:",
    Lbl_FontSize: "字体大小:",
    Lbl_FontStyle: "字体样式:",

    Tip_AlignTop: "上对齐",
    Tip_AlignMiddle: "中间对齐",
    Tip_AlignBottom: "下对齐",
    Tip_AlignLeft: "左对齐",
    Tip_AlignCenter: "居中对齐",
    Tip_AlignRight: "右对齐",
    Tip_None: "无",
    Tip_Underline: "下划线",
    Tip_Overline: "上划线",
    Tip_Capitalize: "首字大写",
    Tip_Uppercase: "大写",
    Tip_Lowercase: "小写",
    Tip_Lighter: "轻",
    Tip_Normal: "正常",
    Tip_Bold: "重",
    Tip_Bolder: "很重",
    Tip_Italic: "斜体字",
    Tip_Oblique: "倾斜",

    
    Btn_Styles: "样式",
    Tip_Styles: "变换表格样式",

    Btn_ResetToDefault: "重设为缺省值",
    Lbl_Background: "背景: ",

    Tip_RowHeadWidth: "行表头宽度",
    Tip_CellWidth: "单元宽度",
    Tip_CellHeight: "单元高度",
    Tip_ZoomIn: "放大",
    Tip_ZoomOut: "缩小",
    Tip_FullScreen: "全屏模式",
    Tip_ExportToExcel: "输出到Excel文件",
    
    Lbl_Row: "行",
    Lbl_Col: "列",
    Lbl_Value: "值",
    Lbl_ClickToDrillThrough: "点击进行钻取。",

    /* PivotChart.js  */    
    
    Btn_ChartOptions: "选项",
    Tip_ChartOptions: "改变图的选项(类型, 主题, 属性等)",

    Tip_ChartWidth: "图的宽度",
    Tip_ChartHeight: "图的高度",
    
    Tip_ColumnChart: "柱条图",
    Tip_BarChart: "条状图",
    Tip_LineChart: "划线图",
    Tip_SplineChart: "样条线图",
    Tip_AreaChart: "区域图",
    Tip_AreaSplineChart: "区域样条线图",

    Lbl_ChartStacked: "堆叠",
    Lbl_NoStacked: "不",
    Lbl_ValueStacked: "根据值",
    Lbl_PercentStacked: "根据百分比",
    
    Lbl_ChartType: "类型",
    Lbl_ChartTheme: "主题",
    Lbl_Legend: "图例",
    Lbl_Floating: "悬浮",
    Lbl_Reverse: "反转",
    Lbl_ShowLabels: "标签",
    Lbl_Rotation: "旋转",
    Lbl_Tooltip: "提示",
    Lbl_Shadow: "阴影",
    Lbl_ExportMenu: "输出菜单",

    Lbl_LegendHorizontal: "水平",
    Lbl_LegendVertical: "垂直",

    Lbl_High_Loading: '正在加载数据...',
    Lbl_High_ContextButtonTitle: '图的上下文菜单',
    Lbl_High_DownloadJPEG: '下载为JPEG图片',
    Lbl_High_DownloadPDF: '下载为PDF文档',
    Lbl_High_DownloadPNG: '下载为PNG图片',
    Lbl_High_DownloadSVG: '下载为SVG图片',
    Lbl_High_PrintChart: '打印图',
    Lbl_High_ResetZoom: '重设缩放',
    Lbl_High_ResetZoomTitle: '重设缩放级别 1:1',
    


    /* DataPane.js  */    

    Lbl_XmlaUrl: "XMLA服务器URL: ",
    Lbl_DataSource: "数据源: ",
    Lbl_Catalog: "目录: ",
    Lbl_CubeName: "多维数据集名字: ",

    /* DrillThroughPane.js  */    

    /* ReportPane.js  */    

    Btn_ExportToPdf: "输出到PDF文件"

});