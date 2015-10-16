define({
	Msg_LoadDataFirst: "Hiçbir veri yüklü değil, lütfen önce veri yükleyin.",
    Msg_LoadingData: "Veriler yükleniyor, Toplam Kayıt: ",
    Msg_LoadingCubeData: "OLAP veri kübü yükleniyor ",
    Msg_LoadingGSSData: "Google spreadsheet verileri yükleniyor ",
    Msg_ChooseFieldsFirst: "Rapor tasarlamak için PivotTablo alanlarından seçim yapın.",
    Msg_UpdatingPivotGridData: "Pivot grid verisi güncelleniyor ",
    Msg_QueryCubeRetrieveData: "OLAP kübü veri çekmek için sorgulanıyor ",
    Msg_RetrievingMembers: "Retrieving members of attribute ",    
    Msg_DrillingThrough: "Hücre detaylarına erişiliyor ",    
    Msg_ExportingReport: "Rapor dışarı aktarılıyor ",    
    
    Msg_LoadingFile: "Dosyalar yükleniyor: ",
    Msg_LoadingOlapCube: "OLAP küpleri getiriliyor :",
    Msg_PromptLoadCube: "Pivot Tablo' ya yüklemek için küplerden herhangi birisine tıklayın",
    Msg_InputFileUrl: "Lütfen dosya URL' sini girin.",
    Msg_InputXmlaServerUrl: "Lütfen  XMLA Sunucu URL' sini girin.",
    Msg_InputPublicSpreadsheetUrl: "Lütfen yayınlanan google spreadsheet URL' sini girin.",
    Msg_EmptyGoogleSpreadsheet: "Spreadsheet' de veri bulunamadı. ",

    Err_NotValidWptFormat: "Geçerli bir WebPivotTable dosyası değil.",
	Err_OLAP_NoDataSource: "Bu sunucuda hiçbir veri kaynağı bulunamadı: ",
	Err_OLAP_NoCatalog: "Bu veri kaynağında hiçbir katalog bulunamadı: ",
	Err_OLAP_NoDimension: "Bu küpte hiçbir boyut bulunamadı: ",

	Msg_Html5FileNotSupport: "Kullandığınız tarayıcı bu özelliği desteklemiyor, lütfen Chrome, Firefox, IE9, Safari gibi HTML5 destekleyen tarayıcı kullanın.",
	Msg_CloudDriveNotSupport: "Ağınız Cloud Drive' ı kullanmanıza engel oluyor.",

    /* WebPivotTable.js  */  
	Lbl_Stat_Sum: "Toplam",
	Lbl_Stat_Count: "Say",
	Lbl_Stat_Average: "Ortalama",
	Lbl_Stat_Max: "En Büyük",
	Lbl_Stat_Min: "En Küçük",
	Lbl_Stat_Median: "Bölen",
	Lbl_Stat_Mode: "Mod",
	Lbl_Stat_StdDev: "Standart Sapma",
	Lbl_Stat_Variance: "Vars",

	Tab_DrillThrough: "Detay Göster",

	Lbl_Rows: "Satırlar",
	Lbl_Cols: "Sütunlar",
	Lbl_Filters: "Filtreler",
	Lbl_Values: "Değerler",

	Lbl_DeferUpdate: "Biçimi Güncellemeyi Geciktir",
	Btn_Update: "Güncelle",

    /* TopBar.js  */

	Mnu_NewWpt: "Yeni WebPivotTable oluştur",
	Mnu_OpenWpt: "WebPivotTable dosyası aç (.wpt)",
	Mnu_SaveWpt: "WebPivotTable' ı kaydet",
	Mnu_SourceData: "Kaynak veri görünümünü aç",
	Mnu_Report: "Rapor Oluştur ve dışarı aktar",

	Mnu_Setting: "Ayarlar",
	Dlg_Setting: "Ayarlar",

	Btn_LoadData: "Veri Yükle",
	Tip_LoadData: "Yeni bir WebPivotTable oluşturmak için tüm veri kaynaklarından veri yükle.",
	Dlg_LoadData: "Veri Kaynağından Veri Yükle",

	Mnu_CsvFile: "CSV Dosyası (.csv)",
	Mnu_XlsFile: "XLS Dosyası (Excel 97-2004)",
	Mnu_XlsxFile: "XLSX Dosyası (Excel 2007+)",
	Mnu_OlapCube: "OLAP Modu",
	Mnu_GssFile: "Google Spreadsheet",

	Mnu_Internet: "Internet Linki",
	Mnu_LocalDrive: "Lokal Dosya",
	Mnu_CopyPaste: "Kopyala & Yapıştır",
	Mnu_CloudDrive: "Cloud Drive",

	Lbl_EnterWptUrl: "WPT dosya URL' si:",
	Lbl_FileProxy: "Use File Proxy (For cross domain access)",

	Lbl_EnterFileUrl: "Dosya URL' si:",

	Lbl_CopyPasteCsv: "CSV verisini Kopyala&Yapıştır veya elle gir:",
	Lbl_CopyPasteWpt: "WPT verisini Kopyala&Yapıştır veya elle gir:",
	Btn_Load: "Yükle",

	Btn_GotoCloudDrive: "Cloud Drive' a Git",

	Lbl_XmlaServerUrl: "XMLA Sunucu URL' si:",
	Btn_GetCubes: "Küpleri Getir",
	Lbl_XmlaProxy: "Use Xmla Proxy (For cross domain access)",

	Lbl_PublicSpreadsheetUrl: "Yayınlanan Spreadsheet URL' si:",

	Tip_About: "Hakkında",
	Dlg_About: "Hakkında",

	Tip_Help: "Yardım",

	Lbl_Language: "Dil",
	Lbl_English: "İngilizce",
	Lbl_Chinese: "Çince",
    Lbl_Turkish: "Türk",
	Lbl_French: "Fransızca",
	Lbl_German: "Almanca",
	Lbl_Spanish: "İspanyolca",
	Lbl_Portuguese: "Portekizce",
	Lbl_Arabic: "Arapça",
	Lbl_Russian: "Rusça",
	Lbl_Italian: "İtalyanca",
	Lbl_Dutch: "Felemenkçe",
	Lbl_Greek: "Yunanca",
	Lbl_Hebrew: "Yahudice",
	Lbl_Hindi: "Hintçe",
	Lbl_Hungarian: "Macarca",
	Lbl_Swedish: "İsveççe",
	Lbl_Japanese: "Japonca",
	Lbl_Korean: "Korece",
	Lbl_Polish: "Lehçe",


	Lbl_DecimalPoint: "Ondalık Ayıracı",
	Lbl_ThousandsSep: "Binlik Ayıracı",
	Lbl_DrillThroughMaxRows: "Default Olap Cube Drill Through Max Rows:",

	Btn_OK: "Tamam",
	Btn_Cancel: "Vazgeç",

    /* SheetBar.js  */

	Tip_ShowPivotFieldsList: "Pivot Alan Listesini Göster",
	Tip_HidePivotFieldsList: "Pivot Alan Listesini Gizle",

	Tip_TileHorizontal: "Dikey Döşe",
	Tip_TileVertical: "Yatay Döşe",
	Tip_GridOnly: "Sadece Pivot Grid' i Göster",
	Tip_ChartOnly: "Sadece Pivot Grafiği' ı Göster",

	Btn_PivotFields: "Pivot Alanları",
	Tip_PivotFields: "Pivot Alanlarını Değiştir veya Filtrele",
	Lbl_NoneSelected: "(Hiçbiri)",
	Mnu_FieldFiltering: "Alan Filtreleniyor...",

	Tip_ShowEmpty: "Boş elemanları göster",
	Tip_ShowNonEmpty: "Sadece dolu elemanları göster",

	Btn_Mdx: "MDX",
	Tip_Mdx: "MDX Durumu",

	Btn_Run: "Çalıştır",
	Tip_Run: "Bu MDX durumunu OLAP Küpünde çalıştır",

	Tip_SwapAxis: "Satır ile Sütunları Yer Değiştir",
	Tip_ClearAll: "Hepsini Temizle",
	Tip_ClearFilter: "Filtreleri Temizle",



    /* PivotFields.js  */    
    
	Lbl_PivotFieldsList: "Pivot Alanlarının Listesi",
	Lbl_DragFields: "Alanları aşağıdaki bölgelere sürükleyin:",

	Tip_FieldsListLayout: "Pivot Alanlarının Listesinin Görünümü",
	Lbl_FieldsListPosition: "Position on",
	Btn_OnTop: "Üst",
	Btn_OnBottom: "Alt",
	Btn_OnLeft: "Sol",
	Btn_OnRight: "Sağ",
	Lbl_FieldsListStacked: "İstiflendi",

	Lbl_FieldsListWidth: "Genişlik (Sol/Sağ)",
	Lbl_FieldsListHeight: "Yükseklik (Yukarı/Aşağı)",

	Btn_SelectAll: "Hepsi",
	Tip_SelectAll: "Hepsini Seç",
	Btn_SelectNone: "Hiçbiri",
	Tip_SelectNone: "Hepsini Kaldır",

	Lbl_Search: "Ara",

	Tip_SortAscend: "Listele (Artan)",
	Tip_SortDescend: "Listele (Azalan)",

	Mnu_AddToFilters: "Filtrelere Ekle",
	Mnu_AddToRows: "Satırlara Ekle",
	Mnu_AddToCols: "Sütunlara Ekle",
	Mnu_AddToValues: "Değerlere Ekle",

	Mnu_MoveUp: "Yukarı Taşı",
	Mnu_MoveDown: "Aşağı Taşı",
	Mnu_MoveToBegin: "En Başa Taşı",
	Mnu_MoveToEnd: "En Sona Taşı",
	Mnu_MoveToFilters: "Filtrelere Taşı",
	Mnu_MoveToRows: "Satırlara Taşı",
	Mnu_MoveToCols: "Sütunlara Taşı",
	Mnu_MoveToValues: "Değerlere Taşı",

	Mnu_RemoveField: "Alan Sil",

	Mnu_FieldSettings: "Alan Özellikleri ...",
	Mnu_ValueFieldSettings: "Değer Alanı Özellikleri ...",

	Tab_Subtotal: "Ara Toplam & Filtreler",
	Tab_Layout: "Biçim & Yazdır",
	Tab_Summarize: "Değerleri Özetleme",
	Tab_ShowValueAs: "Değerleri Göster",
	Tab_NumberFormat: "Sayı Formatı",

	Lbl_SourceName: "Kaynak Adı: ",
	Lbl_CustomName: "Özel Ad: ",

	Lbl_OF: " of ",
	Lbl_Sample: "Örnek",
	Lbl_DecimalPlaces: "Ondalık Sayısı: ",
	Lbl_UseKSeparator: "Binlik Ayıracı Kullan",
	Lbl_Symbol: "Sembol($)",

    /* PivotGrid.js  */

	Tip_CollapseRows: "Tüm Satırları Kapat",
	Tip_ExpandRows: "Tüm Satırları Aç",
	Tip_CollapseCols: "Tüm Sütunları Kapat",
	Tip_ExpandCols: "Tüm Sütunları Aç",

	Lbl_AllRows: "Bütün Satırlar",
	Lbl_AllCols: "Bütün Sütunlar",
	Tip_ShowSign: "İşaretler(+/-)",
	Tip_ShowTotalRows: "Satır Genel Toplamı",
	Tip_ShowTotalCols: "Sütun Genel Toplamı",
	Tip_ShowSubtotalRows: "Satır Ara Toplam",
	Tip_ShowSubtotalCols: "Sütun Ara Toplam",
	Tip_TabularForm: "Cetvel form",
	Tip_CompactForm: "Sıkışık form",

	Lbl_ColHeader: "Sütun Başlığı",
	Lbl_RowHeader: "Satır Başlığı",
	Lbl_DataCell: "Veri",
	Lbl_SubtotalCell: "Ara Toplam",
	Lbl_TotalCell: "Genel Toplam",

	Lbl_Cells: " Hücreler",

	Lbl_HorizontalAlignment: "Yatay Döşe:",
	Lbl_VerticalAlignment: "Dikey Döşe:",
	Lbl_TextDecoration: "Yazı Biçimi:",
	Lbl_TextTransform: "Yazı Saydamlığı:",
	Lbl_FontWeight: "Font Genişliği:",
	Lbl_FontSize: "Font Boyutu:",
	Lbl_FontStyle: "Font Stili:",

	Tip_AlignTop: "Üste Hizala",
	Tip_AlignMiddle: "Ortaya Hizala",
	Tip_AlignBottom: "Alta Hizala",
	Tip_AlignLeft: "Sola Hizala",
	Tip_AlignCenter: "Ortala",
	Tip_AlignRight: "Sağa Hizala",
	Tip_None: "Hiçbiri",
	Tip_Underline: "Altı Çizili",
	Tip_Overline: "Üstü Çizili",
	Tip_Capitalize: "Büyük Harf",
	Tip_Uppercase: "Büyük Harf",
	Tip_Lowercase: "Küçük Harf",
	Tip_Lighter: "Lighter",
	Tip_Normal: "Normal",
	Tip_Bold: "Kalın",
	Tip_Bolder: "Daha Kalın",
	Tip_Italic: "Yatık",
	Tip_Oblique: "Eğik",


	Btn_Styles: "Stiller",
	Tip_Styles: "Grid Stilini Değiştir",

	Btn_ResetToDefault: "Varsayılana Geri Dön",
	Lbl_Background: "Arka Plan: ",

	Tip_RowHeadWidth: "Satır Başlık Genişliği",
	Tip_CellWidth: "Hücre Genişliği",
	Tip_CellHeight: "Hücre Yüksekliği",
	Tip_ZoomIn: "Yakınlaştır",
	Tip_ZoomOut: "Uzaklaştır",
	Tip_FullScreen: "Tam Ekran Modu",
	Tip_ExportToExcel: "Excel dosyasına aktar",

	Lbl_Row: "Satır",
	Lbl_Col: "Sütun",
	Lbl_Value: "Değer",
	Lbl_ClickToDrillThrough: "Detay için tıklayın.",

    /* PivotChart.js  */    
    
	Btn_ChartOptions: "Ayarlar",
	Tip_ChartOptions: "Grafik ayarlarını değiştir(türü, görünüm, özellikler)",

	Tip_ChartWidth: "Grafik Genişliği",
	Tip_ChartHeight: "Grafik Yüksekliği",

	Tip_ColumnChart: "Sütun Grafiği",
	Tip_BarChart: "Bar Grafiği",
	Tip_LineChart: "Çizgi Grafiği",
	Tip_SplineChart: "Çubuk Grafiği",
	Tip_AreaChart: "Alan Grafiği",
	Tip_AreaSplineChart: "Alan Çubuk Grafiği",
	Tip_PieChart: "Pasta Grafiği",  //to be fixed in other language file

	Lbl_ChartStacked: "İstiflendi",
	Lbl_NoStacked: "No",
	Lbl_ValueStacked: "Değere Göre",
	Lbl_PercentStacked: "Orana Göre",

	Lbl_ChartType: "Tip",
	Lbl_ChartTheme: "Tema",
	Lbl_Legend: "Açıklama",
	Lbl_Floating: "Floating",
	Lbl_Reverse: "Reserve",
	Lbl_ShowLabels: "Label",
	Lbl_Rotation: "Açı",
	Lbl_Tooltip: "Tooltip",
	Lbl_Shadow: "Gölge",
	Lbl_ExportMenu: "Export Menu",

	Lbl_LegendHorizontal: "Yatay",
	Lbl_LegendVertical: "Düşey",

	Lbl_High_Loading: 'Veri Yükleniyor ...',
	Lbl_High_ContextButtonTitle: 'Chart context menu',
	Lbl_High_DownloadJPEG: 'JPEG olarak indir',
	Lbl_High_DownloadPDF: 'PDF olarak indir',
	Lbl_High_DownloadPNG: 'PNG olarak indir',
	Lbl_High_DownloadSVG: 'SVG vektörel olarak indir',
	Lbl_High_PrintChart: 'Grafiği yazdır',
	Lbl_High_ResetZoom: 'Zumu sıfırla',
	Lbl_High_ResetZoomTitle: 'Zum seviyesini 1:1 e sıfırla',


	Lbl_3DView: "3D Görünüm",
	Lbl_Alpha: "Alpha",
	Lbl_Beta: "Beta",
	Lbl_Depth: "Derinlik",
	Lbl_ViewDistance: "Uzaklık",

    /* DataPane.js  */

	Lbl_XmlaUrl: "XMLA Sunucu URL' si: ",
	Lbl_DataSource: "Veri Kaynağı: ",
	Lbl_Catalog: "Katalog: ",
	Lbl_CubeName: "Küp Adı: ",

    /* DrillThroughPane.js  */    

    /* ReportPane.js  */    

    Btn_ExportToPdf: "PDF' e çevir",


    /* new */
	Lbl_Signin: "Giriş Yap",
	Lbl_Signup: "Üye Ol",
	Lbl_Signout: "Çıkış Yap",
	Lbl_ForgotPassword: "Şifremi Unuttum",
	Lbl_ChangePassword: "Şifreyi Değiştir",
	Lbl_EditProfile: "Profili Düzenle",
	Lbl_Anonymous: "Anonim",
	Lbl_Username: "Kullanıcı Adı",
	Lbl_Password: "Şifre",
	Lbl_FirstName: "Adı",
	Lbl_LastName: "Soyadı",
	Lbl_Email: "Email",
	Lbl_SignupEmail: "Signup Email",
	Lbl_RetrieveToken: "Token Şifresi Al",
	Lbl_VerifyToken: "Token Şifresini Doğrula",
	Lbl_Token: "Token",
	Lbl_CurrentPassword: "Şimdiki Şifre",
	Lbl_NewPassword: "Yeni Şifre",
	Lbl_ConfirmPassword: "Şifreyi Doğrula",
	Lbl_ResetPassword: "Şifreyi Sıfırla",
	Lbl_Save: "Kaydet",

	//MESSAGE_SUBJECT_SEND_TOKEN_EMAIL: "Your Password Reset Token",
	//MESSAGE_CONTENT_SEND_TOKEN_EMAIL: "You are receiving this because you (or someone else) have requested the reset of the password for your account.<br/><br/>" +
	//	"Please paste list below token to continue your password reset process.<br/><br/>" +
	//	"Your password reset token:<b>  {{token}} </b> <br/><br/>"+
	//	"If you did not request this, please ignore this email and your password will remain unchanged.<br/><br/>",
	//MESSAGE_SUBJECT_CHANGE_PASSWORD_EMAIL: "Your password has been changed",
	//MESSAGE_CONTENT_CHANGE_PASSWORD_EMAIL: "Hello,<br/><br/>" +
	//	"This is a confirmation that the password for your account<b> {{account}} </b>has just been changed.<br/>",

	MESSAGE_RESET_PASSWORD_TOKEN_SENT: "Şifre sıfırlama token' ı bu email adresine gönderildi. Lütfen mailinizi kontrol ediniz.",
	MESSAGE_RESET_PASSWORD_TOKEN_VERIFIED: "Şifre sıfırlama token' ı doğrulandı, giriş yaptınız, şifrenizi değiştirebilirsiniz.",
	MESSAGE_PROFILE_UPDATE_SUCCESS: "Tebrikler! Profiliniz güncellendi.",
	MESSAGE_PASSWORD_RESET_SUCCESS: "Tebrikler! Şifreniz değiştirildi.",
	MESSAGE_SAVE_LOCAL_SUCCESS: "Rapor lokale başarıyla kaydedildi.",
	MESSAGE_SAVE_SERVER_SUCCESS: "Rapor sunucuya başarıyla kaydedildi.",
	MESSAGE_REPORT_SHARE_SUCCESS: "Rapor başarıyla paylaşıldı.",

	ERROR_SERVER_GENERAL: "Sunucu taraflı hata!",
	ERROR_UNKNOWN_USER: "Bu kullanıcı daha üye olmadı!",
	ERROR_INVALID_PASSWORD: "Hatalı şifre!",
	ERROR_USERNAME_EMAIL_DUPLICATE: "Bu kullanıcı veya email zaten kayıtlı!",
	ERROR_REQUIRED: "Lütfen Giriş Yapın {{field}}.",
	ERROR_NO_USER_WITH_THIS_EMAIL: "Bu email adresiyle kayıtlı kullanıcı bulunamadı!",
	ERROR_RESET_TOKEN_INVALID: "Şifre sıfırlama token' ı geçerli değil ya da süresi dolmuş!",
	ERROR_CONFIRM_PASSWORD: "Şifreler uyuşmuyor, lütfen şifrenizi tekrar girin!",
	ERROR_USER_NOT_SIGNIN: "Kullanıcı daha giriş yapmadı!",
	ERROR_CURRENT_PASSWORD: "Geçerli şifre yanlış!",
	ERROR_NEW_PASSWORD: "Lütfen yeni bir şifre tedarik edin!",
	ERROR_USER_NOT_FOUND: "Kullanıcı bulunamadı!",

	ERROR_VALIDATION_SERVER: "İstek sunucu hatası yüzünden başarısız oldu!",
	ERROR_VADIDATION_NOT_FOUND: "Bulunamadı!",
	ERROR_VADIDATION_WAIT: "Lütfen Bekleyin!",
	ERROR_VADIDATION_REQUIRED: "Bu alan zorunlu!",
	ERROR_VADIDATION_TOO_SHORT: "Bu alan çok kısa!",
	ERROR_VADIDATION_TOO_LONG: "Bu alan çok uzun!",
	ERROR_VADIDATION_EMAIL: "Email geçerli değil!",

	ERROR_UPLOAD_FILE: "Dosya yüklemesi başarısız oldu!",
	ERROR_REQUEST_FILE_URL: "URL' den dosya alınamadı!",
	ERROR_FILE_PICKER: "Cloud drive' dan dosya seçilemedi!",
	ERROR_FILE_TYPE: "Yanlış dosya tipi seçildi!",
	ERROR_FILE_NOT_FOUND: "Dosya bulunamadı!",
	ERROR_FILE_NOT_READABLE: "Dosya okunamaz halde!",
	ERROR_FILE_READ_SECURITY: "Dosya kilitli!",
	ERROR_FILE_READ_DEFAULT: "Dosya okuma hatası!",
	ERROR_EXCEL_NO_SHEET: "Excel dosyasında sayfa bulunamadı!",
	ERROR_READ_EXCEL_FILE: "Excel dosyası okunamadı!",

	ERROR_NOT_WPT_FILE: "Bu geçerli bir WebPivotTable dosyası değil!",

	ERROR_NO_DATA_IN_REPORT: "Henüz raporda veri yok!",


	Mnu_WebService: "Web Servis",
	Lbl_WebServiceUrl: "Web Servis URL' si",
	Msg_InputWebServiceUrl: "Lütfen Web Servis URL' sini giriniz.",
	Msg_LoadingWSData: "Web Servis' den veri yükleniyor",
	Msg_WrongWSData: "Dönen veri uyumlu değil. ",
	Msg_NoDataLoaded: "Hiç veri yüklenmedi",
	Msg_DataLoaded: "Veri başarıyla yüklendi",
	Msg_SelectFileFromLocal: "Lütfen lokal sürücüden bir dosya seçin",
	Btn_ViewLoadedData: "Yüklenmiş Veriyi Gör",

	Mnu_SaveToLocal: "Lokal dosyaya",
	Mnu_SaveToServer: "Sunucu veritabanına",

	Lbl_Title: "Başlık",
	Lbl_Description: "Açıklama",
	Btn_Save: "Kaydet",

	Btn_ExportReport: "Raporu Dışa Aktar",
	Btn_PdfFormatSetting: "PDF Format Formatı",

	Lbl_PaperSize: "Sayfa Sırası",
	Lbl_PaperOrientation: "Uyum",
	Lbl_PaperMargin: "Kenar Boşluğu",
	Lbl_Height: "Yükseklik",
	Lbl_Width: "Genişlik",
	Lbl_Header: "Başlık",
	Lbl_Footer: "Alt Bilgi",
	Lbl_ZoomFactor: "Zoom Factor",

	Btn_ExportToHtml: "HTML olarak kaydet",
	Btn_ExportToPng: "PNG olarak kaydet",
	Btn_ExportToGif: "GIF olarak kaydet",
	Btn_ExportToJpeg: "JPEG olarak kaydet",

	Tip_AddCalculatedField: "Yeni hesaplanmış alan ekle",
	Tip_ChangeCalculatedField: "Bu hesaplanmış alanı değiştir",
	Tip_RemoveCalculatedField: "Bu hesaplanmış alanı sil",
	Lbl_CalculatedField: "Hesaplanmış Alanlar",
	Lbl_Formula: "Formül",
	Lbl_Space: "Boşluk",
	Lbl_InsertField: "Alan Ekle",
	Lbl_InsertMath: "Matematik Fonksiyon ve Değişkenleri Ekle",
	Msg_AddCalculatedFieldNotAvailable: "OLAP küpleri veya veri olmadan hesaplanmış alan eklenemez.",

	Btn_PivotTable: "PivotTablo",
	Tip_PivotTable: "Pivot Tablo Görünümüne Geç",
	Btn_DataSource: "Veri Kaynağı",
	Tip_DataSource: "Veri Kaynağı Görünümüne Geç",
	Btn_Report: "Rapor",
	Tip_Report: "Rapor Görünümüne Geç",

	Lbl_Source: "Kaynak",
	Lbl_Sheet: "Sayfa",
	Lbl_Report: "Rapor",
	Lbl_SourceName: "Kaynak Adı",
	Lbl_SheetName: "Sayfa Adı",
	Lbl_ReportName: "Rapor Adı",
	Tip_RenameSourceName: "Veri Kaynağı adını değiştir",
	Tip_RenameSheetName: "Sayfa adını değiştir",
	Tip_RenameReportName: "Rapor adını değiştir",
	Lbl_Fields: "Alanların Listesi",
	Lbl_UsedBySheets: "Sayfalar tarafından kullanılan",
	Lbl_UsedByReports: "Raporlar tarafından kullanılan",
	Lbl_NoSource: "Daha veri kaynağı seçilmemiş",

	Lbl_Stat_DistinctCount: "Distinct Count",

	Btn_Create: "Oluştur",
	Btn_Add: "Ekle",
	Btn_Change: "Değiştir",
	Btn_Remove: "Sil",
	Btn_Delete: "Sil",
	Btn_Open: "Aç",

	Mnu_Memory: "Hafıza Modu",
	Lbl_Samples: "Örnekler",
	Lbl_Format: "Format",
	Lbl_Delimiter: "Delimiter",

	Tip_SwitchGridChart: "Grid & Grafik Yer Değiştir",

	Msg_SelectSource: "Lütfen veri kaynağı seçin.",
	Msg_SelectSheet: "Lütfen varolan bir sayfa seçin.",
	Msg_LeavingPage: "Lütfen WPT rapor sayfasını çıkmadan önce kaydedin, yoksa çalışmanızı kaybedebilirsiniz!",
	Msg_SheetUsedByReports: "Bu sayfaya bağlı raporlar bulunmakta. Eğer sayfayı silerseniz bu raporlar da değişecektir.",
	Msg_SourceUsedBySheets: "Bu veri kaynağına bağlı bazı sayfa ve/veya raporlar bulunmakta. Eğer veri kaynağını silerseniz bu raporlar da değişecektir.",

	Lbl_FileName: "Dosya Adı",
	Lbl_IgnoreData: "Veri kaydetme, sadece pivot biçimini kaydet.",

	Lbl_CreateSheetFromSource: "Kaynaktan yeni sayfa oluştur",
	Lbl_CopySheetFromSheet: "Varolan sayfayı kopyala",
	Lbl_RemoveSheetConfirmation:"Sayfayı silmek istediğinizden emin misiniz?",
	Lbl_RemoveSourceConfirmation:"Kaynağı silmek istediğinizden emin misiniz?",

	Lbl_AvailableComponents: "Uygun Componentler",
	Lbl_ReportComponents: "Rapor Componentleri",

	Tip_NewWptWithSource: "Yeni WebPivotTable oluşturmak için veri kaynağı seçin.",
	Tip_AddSource: "Yeni veri kaynağı ekle",
	Tip_RemoveSource: "Bu veri kaynağını sil",
	Tip_ChangeSource: "Bu veri kaynağını değiştir",
	Tip_DeleteWpt: "Bu WPT' yi veritabanından sil",
	Tip_OpenWpt: "Bu WPT' yi aç",

	Tip_AddSheet: "Yeni sayfa oluştur",
	Tip_AddReport: "Yeni rapor oluştur",

	Lbl_Function_ConditionalOperator: 'Conditional Operator,syntax: <br> expression ? expression : expression',
	Lbl_Function_Abs: 'Kesin değer',
	Lbl_Function_Max: 'İki sayıdan en büyüğü',
	Lbl_Function_Min: 'İki sayıdan en küçüğü',
	Lbl_Function_Pow: 'Power y of x',
	Lbl_Function_Sqrt: 'Square root',
	Lbl_Function_Exp: 'Power of e',
	Lbl_Function_Log: 'Natual logarithm',
	Lbl_Function_Random: 'Rastgele sayı',
	Lbl_Function_Round: 'En yakın tam sayıya yuvarla',
	Lbl_Function_Ceil: 'Hep üste yuvarla',
	Lbl_Function_Floor: 'Hep alta yuvarla',
	Lbl_Function_Sin: 'Sine',
	Lbl_Function_Cos: 'Cosine',
	Lbl_Function_Tan: 'Tangent',
	Lbl_Function_Asin: 'Arcsine',
	Lbl_Function_Acos: 'Arccosine',
	Lbl_Function_Atan: 'Arctangent',
	Lbl_Function_Atan2: 'Angle from the X axis to a point',
	Lbl_Math_E: 'Constant e, base of the natural logarithm',
	Lbl_Math_LN10: 'Natural logarithm of 10',
	Lbl_Math_LN2: 'Natural logarithm of 2',
	Lbl_Math_LOG10E: 'Base-10 logarithm of e',
	Lbl_Math_LOG2E: 'Base-2 logarithm of e',
	Lbl_Math_PI: 'Constant \u03c0',
	Lbl_Math_SQRT1_2: '1 divided by square root of 2',
	Lbl_Math_SQRT_2: 'Square root of 2',

	Lbl_SortBy: "Sırala",
	Lbl_FilterBy: "Filtrele",
	Lbl_Filter: "Filtre",
	Lbl_Label: "Label",
	Lbl_TopBottom: "Üst/Alt",
	Lbl_Top: "Üst",
	Lbl_Bottom: "Alt",
	Lbl_ShowItems: "Show items for which",

	Lbl_Equals: "eşittir",
	Lbl_NotEquals: "eşit değildir",
	Lbl_GreatThan: "büyüktür",
	Lbl_GreatEqual: "büyük veya eşittir",
	Lbl_LessThan: "küçüktür",
	Lbl_LessEqual: "küçük veya eşittir",
	Lbl_BeginWith: "başlar",
	Lbl_NotBeginWith: "başlamaz",
	Lbl_EndWith: "biter",
	Lbl_NotEndWith: "bitmez",
	Lbl_Contains: "içerir",
	Lbl_NotContains: "içermez",
	Lbl_Between: "arasında",
	Lbl_NotBetween: "arasında değil",

	Lbl_ShowValuesAs: "Özel Görünüm",
	Lbl_NoCalculation:  "Hesaplama Yok",
	Lbl_Percent_GrandTotal: "% Genel Toplamın",
	Lbl_Percent_ColumnTotal: "% Sütun Toplamın",
	Lbl_Percent_RowTotal: "% Satır Toplamın",
	Lbl_Percent_ParentColumnTotal: "% of Parent Column Total",
	Lbl_Percent_ParentRowTotal: "% of Parent Row Total",

	Lbl_Category_General: "Genel",
	Lbl_Category_Number: "Sayı",
	Lbl_Category_Currency: "Para Birimi",
	Lbl_Category_Accounting: "Finansal",
	Lbl_Category_Date: "Tarih",
	Lbl_Category_Time: "Saat",
	Lbl_Category_Percentage: "Yüzde Oranı",
	Lbl_Category_Fraction: "Kesir",
	Lbl_Category_Scientific: "Bilimsel",
	Lbl_Category_Text: "Metin",
	Lbl_Category_Special: "Özel",
	Lbl_Category_Custom: "İsteğe Uyarlanmış",

	Lbl_Prefix: "Başına",
	Lbl_Suffix: "Sonuna",
	Lbl_NegativeNumbers: "Negatif Sayılar",
	Lbl_NoSpecificFormat: "Belirli bir formatı yok.",

	Lbl_Mode: "Mod",
	Lbl_Url: "URL",
	Lbl_ShowDimensionInfo: "Show Dimension Info When Hover",

	Lbl_GrandTotal: "Genel Toplam",
	Lbl_Total: "Toplam",
    Lbl_HideSubtotal: "Gizle Ara Toplam",

	Lbl_RefineData: "Refine Data",
	Tip_RefineData: "Clean, transform, refine the data"


});