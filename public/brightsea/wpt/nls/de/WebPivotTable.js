define({
	Msg_LoadDataFirst: "Keine Daten vorhanden, laden Sie bitte zuerst Daten.",
	Msg_LoadingData: "Daten werden geladen, Anzahl der Zeilen: ",
	Msg_LoadingCubeData: "OLAP-Cube Daten werden geladen ",
	Msg_LoadingGSSData: "Google Spreadsheet Daten werden geladen ",
	Msg_ChooseFieldsFirst: "Um einen Bericht zu erstellen, wählen Sie aus der Felder-Liste.",
	Msg_UpdatingPivotGridData: "Pivot-Tabelle wird aktualisiert ",
	Msg_QueryCubeRetrieveData: "Daten für den OLAP-Cube werden geladen ",
	Msg_RetrievingMembers: "Abrufen von Mitgliedern des Attributs ",
	Msg_DrillingThrough: "Drilling through der Zelldetails ",
	Msg_ExportingReport: "Berichtexport ",

	Msg_LoadingFile: "Datei wird geladen: ",
	Msg_LoadingOlapCube: "OLAP-Cubes werden geladen :",
	Msg_PromptLoadCube: "Cube auswählen um ihn in die Pivot-Tabelle zu laden",
	Msg_InputFileUrl: "Bitte URL für die Datei eingeben.",
	Msg_InputXmlaServerUrl: "Bitte XMLA Server URL eingeben.",
	Msg_InputPublicSpreadsheetUrl: "Bitte Google Spreadsheet URL eingeben.",
	Msg_EmptyGoogleSpreadsheet: "Es wurden keine Daten in diesem Spreadsheet gefunden. ",

	Err_NotValidWptFormat: "Das ist keine gültige WebPivotTable Datei.",
	Err_OLAP_NoDataSource: "Es wurde keine Datenquelle auf diesem Server gefunden: ",
	Err_OLAP_NoCatalog: "Es wurde kein Catalog für diese Datenquelle gefunden: ",
	Err_OLAP_NoDimension: "Es wurde keine Dimension für den Cube gefunden: ",

	Msg_Html5FileNotSupport: "Der Browser den Sie verwenden unterstützt dieses Feature nicht. Bitte einen HTML5-Browser wie Chrome, Firefox, IE9, Safari verwenden.",
	Msg_CloudDriveNotSupport: "Ihre Netzwerkverbindung hat den Zugriff auf den Cloudspeicher verhindert.",

	/* WebPivotTable.js  */
	Lbl_Stat_Sum: "Summe",
	Lbl_Stat_Count: "Anzahl",
	Lbl_Stat_Average: "Durchschnitt",
	Lbl_Stat_Max: "Max",
	Lbl_Stat_Min: "Min",
	Lbl_Stat_Median: "Median",
	Lbl_Stat_Mode: "Mode",
	Lbl_Stat_StdDev: "Standardabweichung",
	Lbl_Stat_Variance: "Varianz",

	Tab_DrillThrough: "DrillThrough",

	Lbl_Rows: "Zeile",
	Lbl_Cols: "Spalte",
	Lbl_Filters: "Filter",
	Lbl_Values: "Werte",

	Lbl_DeferUpdate: "Layout-Update verzögern",
	Btn_Update: "Aktualisieren",

	/* TopBar.js  */

	Mnu_NewWpt: "Neuen WebPivotTable erstellen",
	Mnu_OpenWpt: "WebPivotTable Datei öffnen (.wpt)",
	Mnu_SaveWpt: "WebPivotTable speichern",
	Mnu_SourceData: "Open Source data view",
	Mnu_Report: "Report erstellen und exportieren",

	Mnu_Setting: "Einstellungen",
	Dlg_Setting: "Einstellungen",

	Btn_LoadData: "Daten laden",
	Tip_LoadData: "Daten aus unterschiedlichsten Quellen öffnen.",
	Dlg_LoadData: "Daten aus Datenquelle laden",

	Mnu_CsvFile: "CSV Datei (.csv)",
	Mnu_ExcelFile: "Excel Datei (.xlsx/.xlsm/.xlsb/.xls)",
	Mnu_OdsFile: "Open Office SpreadSheet File (.ods)",
	Mnu_OlapCube: "OLAP Mode",
	Mnu_GssFile: "Google Spreadsheet",

	Mnu_Internet: "Internet Link",
	Mnu_LocalDrive: "lokale Datei",
	Mnu_CopyPaste: "Kopieren und Einfügen",
	Mnu_CloudDrive: "Cloud-Speicher",

	Lbl_EnterWptUrl: "WPT Datei URL:",
	Lbl_FileProxy: "Verwenden Sie Datei Proxy (für domänenübergreifenden Zugriff )",

	Lbl_EnterFileUrl: "Datei URL:",

	Lbl_CopyPasteCsv: "Eingang oder Copy & Paste von CSV-Daten:",
	Lbl_CopyPasteWpt: "Eingang oder Copy & Paste von WPT-Daten:",
	Btn_Load: "Laden",

	Btn_GotoCloudDrive: "Zum Cloud Drive gehen",

	Lbl_XmlaServerUrl: "XMLA Server URL:",
	Btn_GetCubes: "Holen Sie Cubes",
	Lbl_XmlaProxy: "Verwenden XMLA Proxy (für domänenübergreifenden Zugriff )",

	Lbl_PublicSpreadsheetUrl: "Öffentliche Spreadsheet URL:",

	Tip_About: "Über",
	Dlg_About: "Über",

	Tip_Help: "Hilfe",

	Lbl_Language: "Sprache",
	Lbl_English: "Englisch",
	Lbl_Chinese: "Chinesisch",
	Lbl_Turkish: "Türkisch",
	Lbl_French: "Französisch",
	Lbl_German: "Deutsch",
	Lbl_Spanish: "Spanisch",
	Lbl_Portuguese: "Portugiesisch",
	Lbl_Arabic: "Arabisch",
	Lbl_Russian: "Russisch",
	Lbl_Italian: "Italienisch",
	Lbl_Dutch: "Niederländisch",
	Lbl_Greek: "Griechisch",
	Lbl_Hebrew: "Hebräisch",
	Lbl_Hindi: "Hindi",
	Lbl_Hungarian: "Ungarisch",
	Lbl_Swedish: "Schwedisch",
	Lbl_Japanese: "Japanisch",
	Lbl_Korean: "Koreanisch",
	Lbl_Polish: "Polieren",
	Lbl_Vietnamese: "Vietnamesisch",


	Lbl_DecimalPoint: "Dezimalpunkt",
	Lbl_ThousandsSep: "Tausendertrennzeichen",
	Lbl_DrillThroughMaxRows: "Standard-OLAP-Cube Drill Through maximale Zeilenanzahl:",

	Btn_OK: "OK",
	Btn_Cancel: "Abbrechen",

	/* SheetBar.js  */

	Tip_ShowNavigationPanel: "Navigationsleiste anzeigen",
	Tip_HideNavigationPanel: "Navigationsleiste verbergen",

	Tip_TileHorizontal: "Horizontal anordnen",
	Tip_TileVertical: "Vertikal anordnen",
	Tip_GridOnly: "Nur die Tabelle anzeigen",
	Tip_ChartOnly: "Nur das Diagramm anzeigen",

	Lbl_NoneSelected: "(Nichts)",
	Mnu_FieldFiltering: "Felder werden gefiltert...",

	Tip_ShowEmpty: "Leer Members anzeigen",
	Tip_ShowNonEmpty: "Nur nicht leere Members zeigen",

	Btn_Mdx: "MDX",
	Tip_Mdx: "MDX Statement",

	Btn_Run: "Ausführen",
	Tip_Run: "Diese MDX-Anweisung auf dem OLAP-Cube ausführen",

	Tip_SwapAxis: "Zeilen und Spalten vertauschen",
	Tip_ClearAll: "Alles zurücksetzen",
	Tip_ClearFilter: "Alle Filter zurücksetzen",

	/* PivotFields.js  */

	Lbl_FieldsList: "Felder Liste",
	Lbl_DragFields: "Ziehen Sie die Felder zwischen den Bereichen",

	Tip_FieldsListLayout: "Layout Felder Liste",
	Lbl_FieldsListPosition: "Position auf",
	Btn_OnTop: "Oben",
	Btn_OnBottom: "Unten",
	Btn_OnLeft: "Links",
	Btn_OnRight: "Recht",
	Lbl_FieldsListStacked: "Gestapelt",

	Lbl_FieldsListWidth: "Breite (Links/Recht Position)",
	Lbl_FieldsListHeight: "Höhe (Oben/Unten Position)",

	Btn_SelectAll: "Alle",
	Tip_SelectAll: "Alle Elemente wählen",
	Btn_SelectNone: "Keine",
	Tip_SelectNone: "Auswahl Alle Elemente aufheben",

	Lbl_Search: "Suche",

	Tip_SortAscend: "Aufsteigend sortieren",
	Tip_SortDescend: "Absteigend sortieren",

	Mnu_AddToFilters: "Zu Filter hinzuzufügen",
	Mnu_AddToRows: "Zur Zeile hinzufügen",
	Mnu_AddToCols: "Zur Spalte hinzufügen",
	Mnu_AddToValues: "Im Wertebereich hinzufügen",

	Mnu_MoveUp: "Nach oben",
	Mnu_MoveDown: "Sich abwärts bewegen",
	Mnu_MoveToBegin: "An den Anfang verschieben",
	Mnu_MoveToEnd: "Zum Ende",
	Mnu_MoveToFilters: "Verschieben nach Filter",
	Mnu_MoveToRows: "Verschieben nach Zeile",
	Mnu_MoveToCols: "Verschieben nach Spalte",
	Mnu_MoveToValues: "Verschieben nach Werte",

	Mnu_RemoveField: "Feld entfernen",

	Mnu_FieldSettings: "Feld Einstellung ...",
	Mnu_ValueFieldSettings: "Werte-Einstellung des Feldes ...",

	Tab_Subtotal: "Zwischensumme und Filter",
	Tab_Layout: "Layout & Druck",
	Tab_Summarize: "Werte zusammenfassen durch",
	Tab_ShowValueAs: "Werte anzeigen als",
	Tab_NumberFormat: "Zahlenformat",

	Lbl_SourceName: "Quellenname: ",
	Lbl_CustomName: "Custom Name: ",

	Lbl_OF: " von ",
	Lbl_Sample: "Beispiel",
	Lbl_DecimalPlaces: "Dezimalstellen: ",
	Lbl_UseKSeparator: "Verwenden Sie Tausendertrennzeichen",
	Lbl_Symbol: "Symbol($)",

	/* PivotGrid.js  */

	Tip_CollapseRows: "Alle Zeilen einklappen",
	Tip_ExpandRows: "Alle Zeilen ausklappen",
	Tip_CollapseCols: "Alle Spalten einklappen",
	Tip_ExpandCols: "Alle Spalten ausklappen",

	Lbl_AllRows: "Alle Zeilen",
	Lbl_AllCols: "Alle Spalten",
	Tip_ShowSign: "Zeichen(+/-)",
	Tip_ShowTotalRows: "Gesamtsumme Zeilen",
	Tip_ShowTotalCols: "Gesamtsumme Spalten",
	Tip_ShowSubtotalRows: "Zwischensumme Zeilen",
	Tip_ShowSubtotalCols: "Zwischensumme Spalten",
	Tip_TabularForm: "Tabellarische Form",
	Tip_CompactForm: "Kompakte Form",

	Lbl_ColHeader: "Spaltenüberschrift",
	Lbl_RowHeader: "Zeilenüberschrift",
	Lbl_DataCell: "Daten",
	Lbl_SubtotalCell: "Zwischensumme",
	Lbl_TotalCell: "Gesamtsumme",

	Lbl_Cells: " Zellen",

	Lbl_HorizontalAlignment: "Horizontale Ausrichtung:",
	Lbl_VerticalAlignment: "Vertikale Ausrichtung:",
	Lbl_TextDecoration: "Text -Dekoration:",
	Lbl_TextTransform: "Text Trans:",
	Lbl_FontWeight: "Schriftschnitt:",
	Lbl_FontSize: "Schriftgröße:",
	Lbl_FontStyle: "Schriftstil:",

	Tip_AlignTop: "Oben ausrichten",
	Tip_AlignMiddle: "Mitte ausrichten",
	Tip_AlignBottom: "Unten ausrichten",
	Tip_AlignLeft: "Links ausrichten",
	Tip_AlignCenter: "Zentriert ausrichten",
	Tip_AlignRight: "Rechts ausrichten",
	Tip_None: "Keine",
	Tip_Underline: "Unterstreichen",
	Tip_Overline: "Überstrich",
	Tip_Capitalize: "Kapitälchen",
	Tip_Uppercase: "Großbuchstaben",
	Tip_Lowercase: "Kleinbuchstaben",
	Tip_Lighter: "Schmäler",
	Tip_Normal: "Normal",
	Tip_Bold: "Fett",
	Tip_Bolder: "Bolder",
	Tip_Italic: "Kursiv",
	Tip_Oblique: "Schräg",


	Btn_Styles: "Styles",
	Tip_Styles: "Ändern Grid Arten",

	Btn_ResetToDefault: "Auf Werkseinstellungen zurücksetzen",
	Lbl_Background: "Hintergrund: ",

	Tip_RowHeadWidth: "Breite Kopfzeile der Zeile",
	Tip_CellWidth: "Zellbreite",
	Tip_CellHeight: "Zellhöhe",
	Tip_ZoomIn: "Hineinzoomen",
	Tip_ZoomOut: "Rauszoomen",
	Tip_FullScreen: "Vollbild-Modus",
	Tip_ExportToExcel: "Export als Excel-Datei",

	Lbl_Row: "Zeile",
	Lbl_Col: "Spalte",
	Lbl_Value: "Wert",
	Lbl_ClickToDrillThrough: "Für DrillThrough klicken.",
	Lbl_DoubleClickToDrillThrough: "Für DrillThrough klicken doppelklicken.",

	/* PivotChart.js  */

	Btn_ChartOptions: "Optionen",
	Tip_ChartOptions: "Ändern Diagrammoptionen (Art, Theme, Attribute)",

	Tip_ChartWidth: "Diagramm Breite",
	Tip_ChartHeight: "Diagramm Höhe",

	Tip_ColumnChart: "Säulendiagramm",
	Tip_BarChart: "Balkendiagramm",
	Tip_LineChart: "Liniendiagramm",
	Tip_SplineChart: "Spline-Diagramm",
	Tip_AreaChart: "Flächendiagramm",
	Tip_AreaSplineChart: "Bereich Spline-Diagramm",
	Tip_PieChart: "Kreisdiagramm",  //to be fixed in other language file

	Lbl_ChartStacked: "Gestapelt",
	Lbl_NoStacked: "Nein",
	Lbl_ValueStacked: "nach Wert",
	Lbl_PercentStacked: "nach Prozent",

	Lbl_ChartType: "Diagrammtyp",
	Lbl_ChartTheme: "Theme",
	Lbl_Legend: "Legende",
	Lbl_Floating: "Schwimmende",
	Lbl_Reverse: "Umkehren",
	Lbl_ShowLabels: "Beschriftung",
	Lbl_Rotation: "Drehung",
	Lbl_Tooltip: "Tooltip",
	Lbl_Shadow: "Schatten",
	Lbl_ExportMenu: "Export Menu",

	Lbl_LegendHorizontal: "Horizontal",
	Lbl_LegendVertical: "Vertikal",

	Lbl_High_Loading: 'Daten werden geladen ...',
	Lbl_High_ContextButtonTitle: 'Chart context menu',
	Lbl_High_DownloadJPEG: 'Download JPEG Bild',
	Lbl_High_DownloadPDF: 'Download PDF Dokument',
	Lbl_High_DownloadPNG: 'Download PNG Bild',
	Lbl_High_DownloadSVG: 'Download SVG Vektorgrafik',
	Lbl_High_PrintChart: 'Diagramm drucken',
	Lbl_High_ResetZoom: 'Zoom zurücksetzen',
	Lbl_High_ResetZoomTitle: 'Reset zoom level 1:1',


	Lbl_3DView: "3D-Ansicht",
	Lbl_Alpha: "Alpha",
	Lbl_Beta: "Beta",
	Lbl_Depth: "Tiefe",
	Lbl_ViewDistance: "Sichtweite",

	/* DataPane.js  */

	Lbl_XmlaUrl: "XMLA Server URL: ",
	Lbl_DataSource: "Datenquelle: ",
	Lbl_Catalog: "Catalog: ",
	Lbl_CubeName: "Cube Name: ",

	/* DrillThroughPane.js  */

	/* ReportPane.js  */

	Btn_ExportToPdf: "Export als PDF Datei",


	/* new */
	Lbl_Signin: "Einloggen",
	Lbl_Signup: "Registrieren",
	Lbl_Signout: "Ausloggen",
	Lbl_ForgotPassword: "Passwort vergessen",
	Lbl_ChangePassword: "Passwort ändern",
	Lbl_EditProfile: "Profil bearbeiten",
	Lbl_Anonymous: "Anonym",
	Lbl_Username: "Benutzername",
	Lbl_Password: "Passwort",
	Lbl_FirstName: "Vorname",
	Lbl_LastName: "Nachname",
	Lbl_Email: "Email",
	Lbl_SignupEmail: "Registrierungsemail",
	Lbl_RetrieveToken: "Token anfordern",
	Lbl_VerifyToken: "Token verifizieren",
	Lbl_Token: "Token",
	Lbl_CurrentPassword: "Aktuelles Passwort",
	Lbl_NewPassword: "Neues Passwort",
	Lbl_ConfirmPassword: "Passwort nochmals eingeben",
	Lbl_ResetPassword: "Passwort zurücksetzen",
	Lbl_Save: "Speichern",


	MESSAGE_SUBJECT_SEND_TOKEN_EMAIL: "Passwort zurücksetzen",
	MESSAGE_CONTENT_SEND_TOKEN_EMAIL: "You are receiving this because you (or someone else) have requested the reset of the password for your account.<br/><br/>" +
	"Please paste list below token to continue your password reset process.<br/><br/>" +
	"Your password reset token:<b>  {{token}} </b> <br/><br/>"+
	"If you did not request this, please ignore this email and your password will remain unchanged.<br/><br/>",
	MESSAGE_SUBJECT_CHANGE_PASSWORD_EMAIL: "Your password has been changed",
	MESSAGE_CONTENT_CHANGE_PASSWORD_EMAIL: "Hello,<br/><br/>" +
	"This is a confirmation that the password for your account<b> {{account}} </b>has just been changed.<br/>",

	MESSAGE_RESET_PASSWORD_TOKEN_SENT: "A password reset token has been sent to this email address. Please check your email!",
	MESSAGE_RESET_PASSWORD_TOKEN_VERIFIED: "Password reset token verified, you are signed in and can reset your password.",
	MESSAGE_PROFILE_UPDATE_SUCCESS: "Success! Your profile has been updated.",
	MESSAGE_PASSWORD_RESET_SUCCESS: "Success! Your password has been changed.",
	MESSAGE_SAVE_LOCAL_SUCCESS: "Report saved to local successfully.",
	MESSAGE_SAVE_SERVER_SUCCESS: "Report saved to server successfully.",
	MESSAGE_REPORT_SHARE_SUCCESS: "Report shared successfully.",

	ERROR_SERVER_GENERAL: "Server side error!",
	ERROR_UNKNOWN_USER: "This user has not signed up yet!",
	ERROR_INVALID_PASSWORD: "Password is wrong!",
	ERROR_USERNAME_EMAIL_DUPLICATE: "This username or email signed up already!",
	ERROR_REQUIRED: "Please input {{field}}.",
	ERROR_NO_USER_WITH_THIS_EMAIL: "No user with this email address!",
	ERROR_RESET_TOKEN_INVALID: "Password reset token is invalid or has expired!",
	ERROR_CONFIRM_PASSWORD: "Two passwords are not the same, please input again!",
	ERROR_USER_NOT_SIGNIN: "User is not signed in yet!",
	ERROR_CURRENT_PASSWORD: "Current password is incorrect!",
	ERROR_NEW_PASSWORD: "Please provide a new password!",
	ERROR_USER_NOT_FOUND: "User is not found!",

	ERROR_VALIDATION_SERVER: "Request Failed Due to Server Error!",
	ERROR_VADIDATION_NOT_FOUND: "Not Found!",
	ERROR_VADIDATION_WAIT: "Please Wait!",
	ERROR_VADIDATION_REQUIRED: "This field is required!",
	ERROR_VADIDATION_TOO_SHORT: "This field is too short!",
	ERROR_VADIDATION_TOO_LONG: "This field is too long!",
	ERROR_VADIDATION_EMAIL: "Email is not valid!",

	ERROR_UPLOAD_FILE: "Die Datei konnte nicht hochgeladen werden!",
	ERROR_REQUEST_FILE_URL: "Auf die Datei unter der Adresse konnte nicht zugegriffen werden!",
	ERROR_FILE_PICKER: "Auf die Datei in der Cloud konnte nicht zugegriffen werden!",
	ERROR_FILE_TYPE: "Falscher Dateityp ausgewählt!",
	ERROR_FILE_NOT_FOUND: "Datei nicht gefunden!",
	ERROR_FILE_NOT_READABLE: "Datei ist nicht lesbar!",
	ERROR_FILE_READ_SECURITY: "Datei konnte nicht gelesen werden!",
	ERROR_FILE_READ_DEFAULT: "Datei konnte nicht gelesen werden!",
	ERROR_EXCEL_NO_SHEET: "Kein Tabellenblatt in der Excel-Datei vorhanden!",
	ERROR_READ_EXCEL_FILE: "Excel-Datei konnte nicht gelesen werden!",

	ERROR_NOT_WPT_FILE: "Diese Datei ist keine gültige WebPivotTable-Datei!",

	ERROR_NO_DATA_IN_REPORT: "Es wurden noch keine Daten für den Rport ausgewählt!",

	Mnu_WebService: "Web Service",
	Lbl_WebServiceUrl: "Web-Service-URL",
	Msg_InputWebServiceUrl: "Bitte geben Sie eine Web-Service-URL ein.",
	Msg_LoadingWSData: "Laden von Daten aus Web-Service",
	Msg_WrongWSData: "Die zurückgelieferten Daten sind nicht kompatibel. ",
	Msg_NoDataLoaded: "Keine Daten geladen",
	Msg_DataLoaded: "Daten erfolgreich geladen",
	Msg_SelectFileFromLocal: "Bitte wählen Sie eine Datei von der Festplatte",
	Msg_DiscoveringDataSources: "Entdecken datasources: ",
	Msg_DiscoveringCatalogs: "Entdecken catalogs: ",
	Msg_DiscoveringCubes: "Entdecken cubes: ",
	Msg_LoadingDimensions: "Lädt alle Dimensionen: ",
	Msg_LoadingHierarchies: "Lädt aller Hierarchien: ",
	Msg_LoadingLevels: "Lädt alle Ebenen: ",
	Error_OLAP_NoDataSource: "Keine Datenquellen gefunden.",
	Error_OLAP_NoCatalog: "Kein Kataloge gefunden",
	Error_OLAP_NoDimension: "Keine Dimensionen gefunden.",

	Btn_ViewLoadedData: "Geladene Daten anzeigen",

	Mnu_SaveToLocal: "Als lokale Datei speichern",
	Mnu_SaveToServer: "In Server-Datenbank",

	Lbl_Title: "Titel",
	Lbl_Description: "Beschreibung",
	Btn_Save: "Speichern",

	Btn_ExportReport: "Bericht exportieren",
	Btn_PdfFormatSetting: "PDF-Einstellungen",

	Lbl_PaperSize: "Papiergröße",
	Lbl_PaperOrientation: "Ausrichtung",
	Lbl_PaperMargin: "Abstand",
	Lbl_Height: "Höhe",
	Lbl_Width: "Breite",
	Lbl_Header: "Kopfzeile",
	Lbl_Footer: "Fußzeile",
	Lbl_ZoomFactor: "Zoomfaktor",

	Btn_Export: "Export",
	Btn_ExportToHtml: "Export als HTML-Datei",
	Btn_ExportToPng: "Export als PNG-Bilddatei",
	Btn_ExportToGif: "Export als GIF-Bilddatei",
	Btn_ExportToJpeg: "Export als JPEG-Bilddatei",
	Btn_ExportToCsv: "Export als CSV-Datei",

	Tip_AddCalculatedField: "Neues berechnetes Feld hinzufügen",
	Tip_ChangeCalculatedField: "Dieses berechnete Feld ändern",
	Tip_RemoveCalculatedField: "Dieses berechneten Feld entfernen",
	Lbl_CalculatedField: "Berechnetes Feld",
	Lbl_Formula: "Formel",
	Lbl_Space: "Raum",
	Lbl_InsertField: "Feld einfügen",
	Lbl_InsertMath: "Mathematische Funktionen und Konstanten einfügen",
	Msg_AddCalculatedFieldNotAvailable: "Kann nicht berechneten Felder ohne Daten oder für OLAP-Cubes hinzufügen.",

	Btn_PivotTable: "PivotTable",
	Tip_PivotTable: "Zur Pivot Tabellenansicht wechseln",
	Btn_DataSource: "Datenquelle",
	Tip_DataSource: "Zur Datenquellenansicht wechseln",
	Btn_Report: "Bericht",
	Tip_Report: "Zur Reportansicht wechseln",

	Lbl_Source: "Quelle",
	Lbl_Sheet: "Blatt",
	Lbl_Report: "Bericht",
	Lbl_SourceName: "Quellname",
	Lbl_SheetName: "Blattname",
	Lbl_ReportName: "Berichtsname",
	Tip_RenameSourceName: "Ändern Sie Datenquellenname",
	Tip_RenameSheetName: "Namen des Tabellenblattes ändern",
	Tip_RenameReportName: "Änderung des Berichtsnamens",
	Lbl_Fields: "Liste der Felder",
	Lbl_UsedBySheets: "Wird von Blättern verwendet",
	Lbl_UsedByReports: "Wird von Berichten verwendet",
	Lbl_NoSource: "Noch keine Datenquelle ausgewählt.",

	Lbl_Stat_DistinctCount: "Eindeutige Werte",

	Btn_Create: "Erstellen",
	Btn_Add: "Hinzufügen",
	Btn_Change: "Veränderung",
	Btn_Remove: "Entfernen",
	Btn_Delete: "Löschen",
	Btn_Open: "Öffnen",

	Mnu_Memory: "Memory Mode",
	Lbl_Samples: "Proben",
	Lbl_Format: "Format",
	Lbl_Delimiter: "Trennzeichen",

	Tip_SwitchGridChart: "Tabelle & Diagramm tauschen",

	Msg_SelectSource: "Bitte wählen Sie eine Datenquelle.",
	Msg_SelectSheet: "Bitte wählen Sie einen existieren Blatt.",
	Msg_LeavingPage: "Bitte den WPT-Bericht vor verlassen speichern. Nicht gespeicherte Daten gehen verloren!",
	Msg_SheetUsedByReports: "Es gibt einige Berichte , basierend auf diesem Blatt . Diese Berichte werden geändert werden, wenn Sie bestätigen, zu entfernen.",
	Msg_SourceUsedBySheets: "Es gibt einige Blätter und / oder Berichte auf der Grundlage dieser Quelle. Das Entfernen dieser Quelle hat den Verlust der Blätter und Reports zur Folge.",

	Lbl_FileName: "Dateiname",
	Lbl_IgnoreData: "Nur Pivotoptionen speichern und die Daten nicht speichern.",

	Lbl_CreateSheetFromSource: "Erstellen Sie neues Blatt von der Quelle",
	Lbl_CopySheetFromSheet: "Ein vorhandenes Blatt kopieren",
	Lbl_RemoveSheetConfirmation: "Dieses Blatt wirklich entfernen?",
	Lbl_RemoveSourceConfirmation: "Diese Quelle wirklich entfernen?",

	Lbl_AvailableComponents: "Verfügbare Komponenten",
	Lbl_ReportComponents: "Berichtskomponenten",

	Tip_NewWptWithSource: "Datenquelle auswählen um neuen WebPivotTable zu erstellen",
	Tip_AddSource: "Fügen Sie eine neue Datenquelle hinzu",
	Tip_RemoveSource: "Entfernen Sie diese Datenquelle",
	Tip_ChangeSource: "Ändern Sie diese Datenquelle",
	Tip_DeleteWpt: "Diesen WPT aus der Datenbank löschen",
	Tip_OpenWpt: "Alles zu diesem WPT",

	Tip_AddSheet: "Neues Tabellenblatt erstellen",
	Tip_AddReport: "Neuen Report erstellen",

	Lbl_Function_ConditionalOperator: 'Bedingter Operator, Syntax: <br> Ausdruck ? Ausdruck : Ausdruck',
	Lbl_Function_Abs: 'Absolutbetrag',
	Lbl_Function_Max: 'Die größere von zwei Zahlen',
	Lbl_Function_Min: 'Die kleinere von zwei Zahlen',
	Lbl_Function_Pow: 'Potenz y von x',
	Lbl_Function_Sqrt: 'Quadratwurzel',
	Lbl_Function_Exp: 'Potenz von e',
	Lbl_Function_Log: 'natürlicher Logarithmus',
	Lbl_Function_Random: 'Zufallszahl',
	Lbl_Function_Round: 'Auf die nächste Ganzzahl runden',
	Lbl_Function_Ceil: 'Rundet eine Zahl auf',
	Lbl_Function_Floor: 'Rundet eine Zahl ab',
	Lbl_Function_Sin: 'Sinus',
	Lbl_Function_Cos: 'Cosinus',
	Lbl_Function_Tan: 'Tangens',
	Lbl_Function_Asin: 'Arkussinus',
	Lbl_Function_Acos: 'Arkuscosinus',
	Lbl_Function_Atan: 'Arkustanges',
	Lbl_Function_Atan2: 'Winkel von der X-Achse zu einem Punkt',
	Lbl_Math_E: 'Konstante e, Basis des natürlichen Logarithmus',
	Lbl_Math_LN10: 'natürlichen Logarithmus von 10',
	Lbl_Math_LN2: 'natürlichen Logarithmus von 2',
	Lbl_Math_LOG10E: 'Basis-10 Logarithmus von e',
	Lbl_Math_LOG2E: 'Basis-2 Logarithmus von e',
	Lbl_Math_PI: 'Konstante \u03c0',
	Lbl_Math_SQRT1_2: '1 dividiert durch die Quadratwurzel von 2',
	Lbl_Math_SQRT_2: 'Quadratwurzel von 2',

	Lbl_SortBy: "Sortieren",
	Lbl_FilterBy: "Filtern",
	Lbl_Filter: "Filter",
	Lbl_Label: "Beschriftung",
	Lbl_TopBottom: "Oben/Unten",
	Lbl_Top: "Oben",
	Lbl_Bottom: "Unten",
	Lbl_ShowItems: "Elemente anzeigen für die",

	Lbl_Equals: "ist gleich",
	Lbl_NotEquals: "ist nicht gleich",
	Lbl_GreatThan: "ist größer als",
	Lbl_GreatEqual: "ist größer als oder gleich",
	Lbl_LessThan: "ist kleiner als",
	Lbl_LessEqual: "ist kleiner als oder gleich",
	Lbl_BeginWith: "beginnt mit",
	Lbl_NotBeginWith: "beginnt nicht mit",
	Lbl_EndWith: "endet mit",
	Lbl_NotEndWith: "endet nicht mit",
	Lbl_Contains: "beinhaltet",
	Lbl_NotContains: "beinhaltet nicht",
	Lbl_Between: "ist zwischen",
	Lbl_NotBetween: "ist nicht zwischen",

	Lbl_ShowValuesAs: "Ziege den Wert als",
	Lbl_NoCalculation:  "Keine Berechnung",
	Lbl_Percent_GrandTotal: "% der Gesamtsumme",
	Lbl_Percent_ColumnTotal: "% der Spaltensumme",
	Lbl_Percent_RowTotal: "% der Zeilensumme",
	Lbl_Percent_ParentColumnTotal: "% der Spaltensumme des Elternelements",
	Lbl_Percent_ParentRowTotal: "% der Zeilensumme des Elternelements",

	Lbl_Category_General: "Standard",
	Lbl_Category_Number: "Zahl",
	Lbl_Category_Currency: "Währung",
	Lbl_Category_Accounting: "Buchhaltung",
	Lbl_Category_Date: "Datum",
	Lbl_Category_Time: "Uhrzeit",
	Lbl_Category_Percentage: "Prozent",
	Lbl_Category_Fraction: "Bruch",
	Lbl_Category_Scientific: "Wissenschaft",
	Lbl_Category_Text: "Text",
	Lbl_Category_Special: "Sonderformat",
	Lbl_Category_Custom: "Benutzerdefiniert",

	Lbl_Prefix: "Prefix",
	Lbl_Suffix: "Suffix",
	Lbl_NegativeNumbers: "Negative Zahl",
	Lbl_NoSpecificFormat: "Kein bestimmtes Format.",

	Lbl_Mode: "Mode",
	Lbl_Url: "URL",

	Lbl_GrandTotal: "Endsumme",
	Lbl_Total: "Gesamt",
	Lbl_HideSubtotal: "Zwischensumme ausblenden",

	Lbl_SourceDataMaxRows: "Maximal unterstützte Zeilen für Quelldaten",

	Tip_CloseModal: "Schließen und zurückkehren zu Hauptansicht",

	Lbl_RefineData: "Erweiterte Daten",
	Tip_RefineData: "Sauber, zu transformieren , zu verfeinern, die Daten"




});