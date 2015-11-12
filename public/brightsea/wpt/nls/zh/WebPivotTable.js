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
    Lbl_Stat_Sum: "求和",
	Lbl_Stat_Count: "计数",
	Lbl_Stat_Average: "平均值",
	Lbl_Stat_Max: "最大值",
	Lbl_Stat_Min: "最小值",
	Lbl_Stat_Median: "中值",
	Lbl_Stat_Mode: "众数",
	Lbl_Stat_StdDev: "均方差",
	Lbl_Stat_Variance: "方差",

    Tab_DrillThrough: "钻取",

	Lbl_Rows: "行字段",
	Lbl_Cols: "列字段",
	Lbl_Filters: "过滤字段",
	Lbl_Values: "值字段",

    Lbl_DeferUpdate: "延迟布局更新",
	Btn_Update:"更新",

    /* TopBar.js  */

    Mnu_NewWpt: "创建新的WEB数据透视表",
    Mnu_OpenWpt: "打开WEB数据透视表文件 (.wpt)",
    Mnu_SaveWpt: "保存WEB数据透视表",
    Mnu_Report: "创建并输出报表",
    Mnu_SourceData: "打开源数据视图",

    Mnu_Setting: "设置",
    Dlg_Setting: "设置",

    Btn_LoadData: "加载数据",
    Tip_LoadData: "从各种数据源加载数据以创建新的WEB数据透视表.",
    Dlg_LoadData: "从数据源加载数据",

    Mnu_CsvFile: "CSV文件 (.csv)",
    Mnu_ExcelFile: "Excel文件 (.xlsx/.xlsm/.xlsb/.xls)",
    Mnu_OdsFile: "OpenOffice表格文件 (.ods)",
    Mnu_OlapCube: "OLAP模式",
    Mnu_GssFile: "Google电子数据表",

    Mnu_Internet: "互联网链接",
    Mnu_LocalDrive:"本地文件",
    Mnu_CopyPaste: "拷贝/粘贴",
    Mnu_CloudDrive: "云驱动器",

    Lbl_EnterWptUrl: "WPT文件URL:",
    Lbl_FileProxy: "使用文件代理服务器 （支持跨域访问)",

    Lbl_EnterFileUrl: "文件URL:",

    Lbl_CopyPasteCsv: "输入或者拷贝/粘贴CSV数据:",
    Lbl_CopyPasteWpt: "输入或者拷贝/粘贴WPT数据:",
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
    Lbl_Turkish: "土耳其语",
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

    /* SheetBar.js  */

    Tip_ShowPivotFieldsList: "显示导航面板",
    Tip_HidePivotFieldsList: "隐藏导航面板",
    
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

    Tip_CollapseRows: "收缩所有行",
    Tip_ExpandRows: "展开所有行",
    Tip_CollapseCols: "收缩所有列",
    Tip_ExpandCols: "收缩所有列",

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
    Lbl_DoubleClickToDrillThrough: "双击进行钻取。",

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

    Lbl_3DView: "3D视图",
    Lbl_Alpha: "阿尔法",
    Lbl_Beta: "贝塔",
    Lbl_Depth: "深度",
    Lbl_ViewDistance: "视图距离",

    /* DataPane.js  */

    Lbl_XmlaUrl: "XMLA服务器URL: ",
    Lbl_DataSource: "数据源: ",
    Lbl_Catalog: "目录: ",
    Lbl_CubeName: "多维数据集名字: ",

    /* DrillThroughPane.js  */    

    /* ReportPane.js  */    

    Btn_ExportToPdf: "输出到PDF文件",


    /* new */
    Lbl_Signin: "登录",
    Lbl_Signup: "注册",
    Lbl_Signout: "退出",
    Lbl_ForgotPassword: "忘记密码",
    Lbl_ChangePassword: "修改密码",
    Lbl_EditProfile: "修改个人资料",
    Lbl_Anonymous: "匿名用户",
    Lbl_Username: "用户名",
    Lbl_Password: "密码",
    Lbl_FirstName: "名",
    Lbl_LastName: "姓",
    Lbl_Email: "电子邮箱",
    Lbl_SignupEmail: "注册电子邮箱",
    Lbl_RetrieveToken: "获取盾牌",
    Lbl_VerifyToken: "校验盾牌",
    Lbl_Token: "盾牌",
    Lbl_CurrentPassword: "当前密码",
    Lbl_NewPassword: "新密码",
    Lbl_ConfirmPassword: "确定密码",
    Lbl_ResetPassword: "重设密码",
    Lbl_Save: "保存",

    //MESSAGE_SUBJECT_SEND_TOKEN_EMAIL: "重设WebPivotTable密码",
    //MESSAGE_CONTENT_SEND_TOKEN_EMAIL: "您收到此邮件是因为您（或者其他人）请求重设您的账户密码。<br/><br/>" +
    //"请使用下面的盾牌继续您的密码重设处理。<br/><br/>" +
    //"您的密码重设盾牌是：<b>  {{token}}  </b><br/><br/>"+
    //"如果您没有请求这个，请忽略此邮件，您的密码将保持不变。 <br/><br/>",
    //MESSAGE_SUBJECT_CHANGE_PASSWORD_EMAIL: "您的密码已经更改",
    //MESSAGE_CONTENT_CHANGE_PASSWORD_EMAIL: "您好！<br/><br/>" +
    //"此邮件是确认您的账户：<b> {{account}} </b>的密码刚被更改了。<br/><br/>",


    MESSAGE_RESET_PASSWORD_TOKEN_SENT: "密码重设盾牌已经发送到该邮件地址，请查收邮件！",
    MESSAGE_RESET_PASSWORD_TOKEN_VERIFIED: "密码重设盾牌已验证，您已经登录并可以重设密码。",
    MESSAGE_PROFILE_UPDATE_SUCCESS: "成功了！ 你的档案已被更改。",
    MESSAGE_PASSWORD_RESET_SUCCESS: "成功了！ 你的密码已被更改。",
    MESSAGE_SAVE_LOCAL_SUCCESS: "报表成功保存到本地文件。",
    MESSAGE_SAVE_SERVER_SUCCESS: "报表成功保存到服务器上。",
    MESSAGE_REPORT_SHARE_SUCCESS: "报表分享成功。",

    ERROR_SERVER_GENERAL: "服务器端出错！",
    ERROR_UNKNOWN_USER: "该用户还没有注册！",
    ERROR_INVALID_PASSWORD: "密码错误！",
    ERROR_USERNAME_EMAIL_DUPLICATE: "该用户名或者电子邮箱已经被注册！",
    ERROR_REQUIRED: "请输入{{field}}",
    ERROR_NO_USER_WITH_THIS_EMAIL: "该邮件地址没有对应的用户！",
    ERROR_RESET_TOKEN_INVALID: "密码重设盾牌不对或者已经过期！",
    ERROR_CONFIRM_PASSWORD: "两个密码不一样， 请重输！",
    ERROR_USER_NOT_SIGNIN: "用户还没有登录！",
    ERROR_CURRENT_PASSWORD: "当前密码不正确！",
    ERROR_NEW_PASSWORD: "请提供一个新密码！",
    ERROR_USER_NOT_FOUND: "用户没找到！",

    ERROR_VALIDATION_SERVER: "服务器错误导致请求失败！",
    ERROR_VADIDATION_NOT_FOUND: "没找到！",
    ERROR_VADIDATION_WAIT: "请等待！",
    ERROR_VADIDATION_REQUIRED: "这个字段是必须的！",
    ERROR_VADIDATION_TOO_SHORT: "这个字段太短！",
    ERROR_VADIDATION_TOO_LONG: "这个字段太长！",
    ERROR_VADIDATION_EMAIL: "Email不正确！",

    ERROR_UPLOAD_FILE: "上传文件失败！",
    ERROR_REQUEST_FILE_URL: "用URL请求文件内容失败！",
    ERROR_FILE_PICKER: "从云盘选取文件失败！",
    ERROR_FILE_TYPE: "文件类型选择错误！",
    ERROR_FILE_NOT_FOUND: "找不到文件！",
    ERROR_FILE_NOT_READABLE: "文件不可读！",
    ERROR_FILE_READ_SECURITY: "文件处于被锁定状态！",
    ERROR_FILE_READ_DEFAULT: "读取文件错误！",
    ERROR_EXCEL_NO_SHEET: "EXCEL文件中无表单！",
    ERROR_READ_EXCEL_FILE: "读取EXCEL文件失败！",

    ERROR_NOT_WPT_FILE: "这不是一个有效的WEB数据透视表文件！",

    ERROR_NO_DATA_IN_REPORT: "当前报表中还没有数据！",


    Mnu_WebService: "Web服务",
    Lbl_WebServiceUrl: "Web服务URL",
    Msg_InputWebServiceUrl: "请输入Web服务URL.",
    Msg_LoadingWSData: "从Web 服务加载数据",
    Msg_WrongWSData: "返回的数据不兼容。",
    Msg_NoDataLoaded: "没有数据被加载",
    Msg_DataLoaded: "数据已经加载好",
    Msg_SelectFileFromLocal: "请从本地驱动器选择一个文件",
    Msg_DiscoveringDataSources: "正在查找数据源: ",
    Msg_DiscoveringCatalogs: "正在查找分类: ",
    Msg_DiscoveringCubes: "正在查找多维数据集: ",
    Msg_LoadingDimensions: "正在加载所有的维度: ",
    Msg_LoadingHierarchies: "正在加载所有的层次结构: ",
    Msg_LoadingLevels: "正在加载所有的层级: ",
    Error_OLAP_NoDataSource: "没有找到数据源。",
    Error_OLAP_NoCatalog: "没有找到分类。",
    Error_OLAP_NoDimension: "没有找到维度。",

    Btn_ViewLoadedData: "查看已加载数据",


    Mnu_SaveToLocal: "到本地文件",
    Mnu_SaveToServer: "到服务器数据库中",

    Lbl_Title: "标题",
    Lbl_Description: "描述",
    Btn_Save: "保存",

    Btn_ExportReport: "输出报表",
    Btn_PdfFormatSetting: "PDF格式设置",

    Lbl_PaperSize: "纸张大小",
    Lbl_PaperOrientation: "方向",
    Lbl_PaperMargin: "页边",
    Lbl_Height: "高度",
    Lbl_Width: "宽度",
    Lbl_Header: "页头",
    Lbl_Footer: "页脚",
    Lbl_ZoomFactor: "放大因子",

    Btn_Export: "输出",
    Btn_ExportToHtml: "输出到HTML文件",
    Btn_ExportToPng: "输出到PNG图片文件",
    Btn_ExportToGif: "输出到GIF图片文件",
    Btn_ExportToJpeg: "输出到JPEG图片文件",
    Btn_ExportToCsv: "输出到CSV文件",

    Tip_AddCalculatedField: "增加新的计算字段",
    Tip_ChangeCalculatedField: "更改此计算字段",
    Tip_RemoveCalculatedField: "移除此计算字段",
    Lbl_CalculatedField: "计算字段",
    Lbl_Formula: "公式",
    Lbl_Space: "空格",
    Lbl_InsertField: "插入字段",
    Lbl_InsertMath: "插入数学函数和常数",
    Msg_AddCalculatedFieldNotAvailable: "数据还没有加载时或者对OLAP数据源不能增加计算字段。",



    Btn_PivotTable: "数据透视表",
    Tip_PivotTable: "切换到数据透视表视图",
    Btn_DataSource: "数据源",
    Tip_DataSource: "切换到数据源视图",
    Btn_Report: "报表",
    Tip_Report: "切换到报表视图",

    Lbl_Source: "数据源",
    Lbl_Sheet: "工作薄",
    Lbl_Report: "报表",

    Lbl_SourceName: "数据源名",
    Lbl_SheetName: "工作薄名",
    Lbl_ReportName: "报表名",
    Tip_RenameSourceName: "更换数据源名",
    Tip_RenameSheetName: "更换工作薄名",
    Tip_RenameReportName: "更换报表名",
    Lbl_Fields: "字段列表",
    Lbl_UsedBySheets: "使用该数据源的工作薄",
    Lbl_UsedByReports: "使用该数据源的报表",
    Lbl_NoSource: "尚无数据源。",

    Lbl_Stat_DistinctCount: "重复计数",

    Btn_Create: "创建",
    Btn_Add: "增加",
    Btn_Change: "更换",
    Btn_Remove: "移除",
    Btn_Delete: "删除",
    Btn_Open: "打开",

    Mnu_Memory: "内存模式",
    Lbl_Samples: "样例",
    Lbl_Format: "格式",
    Lbl_Delimiter: "定界符",

    Tip_SwitchGridChart: "切换表格与图形",

    Msg_SelectSource: "请选择一个数据源！",
    Msg_SelectSheet: "请选择一个现存的工作薄！",
    Msg_LeavingPage: "在离开页面前请保存你的WPT报表，否则你将丢失你所有的操作！",
    Msg_SheetUsedByReports: "有一些报表基于该工作薄， 那些报表会发生改变如果您确认移除。",
    Msg_SourceUsedBySheets: "有一些工作薄和报表基于该数据源， 那些工作薄和报表也会同时被移除。",

    Lbl_FileName: "文件名",
    Lbl_IgnoreData: "不保存数据，只保存操作选项。",

    Lbl_CreateSheetFromSource: "从数据源创建新的工作薄",
    Lbl_CopySheetFromSheet: "从已经存在的工作薄拷贝",
    Lbl_RemoveSheetConfirmation:"您确认要移除这个工作薄吗？",
    Lbl_RemoveSourceConfirmation:"您确认要移除这个数据源吗？",

    Lbl_AvailableComponents: "可用的组件",
    Lbl_ReportComponents: "报表组件",

    Tip_NewWptWithSource: "选择数据源以创建新的WEB数据透视表",
    Tip_AddSource: "增加新的数据源",
    Tip_RemoveSource: "移除当前数据源",
    Tip_ChangeSource: "更改当前数据源",
    Tip_DeleteWpt: "从数据库中删除该WPT",
    Tip_OpenWpt: "打开此WPT",

    Tip_AddSheet: "创建新工作薄",
    Tip_AddReport: "创建新报表",

    Lbl_Function_ConditionalOperator: '条件运算,语法： <br> 表达式 ? 表达式 : 表达式',
    Lbl_Function_Abs: '绝对值',
    Lbl_Function_Max: '最大值',
    Lbl_Function_Min: '最小值',
    Lbl_Function_Pow: 'x的y次方',
    Lbl_Function_Sqrt: '平方根',
    Lbl_Function_Exp: 'e的次方',
    Lbl_Function_Log: '自然对数',
    Lbl_Function_Random: '随机数',
    Lbl_Function_Round: '四舍五入为最接近的整数',
    Lbl_Function_Ceil: '向上舍数',
    Lbl_Function_Floor: '向下舍数',
    Lbl_Function_Sin: '正弦',
    Lbl_Function_Cos: '余弦',
    Lbl_Function_Tan: '正切',
    Lbl_Function_Asin: '反正弦',
    Lbl_Function_Acos: '反余弦',
    Lbl_Function_Atan: '反正切',
    Lbl_Function_Atan2: '从X轴到一个点的角度',
    Lbl_Math_E: '常数 e, 自然对数的基',
    Lbl_Math_LN10: '10的自然对数',
    Lbl_Math_LN2: '2的自然对数',
    Lbl_Math_LOG10E: 'e的以10为基的对数',
    Lbl_Math_LOG2E: 'e的以2为基的对数',
    Lbl_Math_PI: '常数 \u03c0',
    Lbl_Math_SQRT1_2: '2的平方根的倒数',
    Lbl_Math_SQRT_2: '2的平方根',

    Lbl_SortBy: "以...索引",
    Lbl_FilterBy: "以...过滤",
    Lbl_Filter: "过滤",
    Lbl_Label: "标签",
    Lbl_TopBottom: "前/后",
    Lbl_Top: "前",
    Lbl_Bottom: "后",
    Lbl_ShowItems: "显示满足...的项目",

    Lbl_Equals: "相等",
    Lbl_NotEquals: "不等",
    Lbl_GreatThan: "大于",
    Lbl_GreatEqual: "大于等于",
    Lbl_LessThan: "小于",
    Lbl_LessEqual: "小于等于",
    Lbl_BeginWith: "起始于",
    Lbl_NotBeginWith: "不起始于",
    Lbl_EndWith: "终止于",
    Lbl_NotEndWith: "不终止于",
    Lbl_Contains: "包含",
    Lbl_NotContains: "不包含",
    Lbl_Between: "在之间",
    Lbl_NotBetween: "不在之间",


    Lbl_ShowValuesAs: "值显示为",
    Lbl_NoCalculation:  "无计算",
    Lbl_Percent_GrandTotal: "总计的百分比",
    Lbl_Percent_ColumnTotal: "列小计的百分比",
    Lbl_Percent_RowTotal: "行小计的百分比",
    Lbl_Percent_ParentColumnTotal: "父亲列小计的百分比",
    Lbl_Percent_ParentRowTotal: "父亲行小计的百分比",

    Lbl_Category_General: "通用",
    Lbl_Category_Number: "数字",
    Lbl_Category_Currency: "货币",
    Lbl_Category_Accounting: "会计",
    Lbl_Category_Date: "日期",
    Lbl_Category_Time: "时间",
    Lbl_Category_Percentage: "百分比",
    Lbl_Category_Fraction: "分数",
    Lbl_Category_Scientific: "科学的",
    Lbl_Category_Text: "文本",
    Lbl_Category_Special: "特殊",
    Lbl_Category_Custom: "定制",

    Lbl_Prefix: "前缀",
    Lbl_Suffix: "后缀",
    Lbl_NegativeNumbers: "负数",
    Lbl_NoSpecificFormat: "没有特别格式。",

    Lbl_Mode: "模式",
    Lbl_Url: "URL",

    Lbl_GrandTotal: "总计",
    Lbl_Total: "小计",
    Lbl_HideSubtotal: "隐藏小计",

    Tip_CloseModal: "关闭并返回主视图",

    Lbl_RefineData: "净化数据",
    Tip_RefineData: "清洗, 转换, 净化数据"


});