---
title: Internationalization
description: "Translation of all language files"
---

WebPivotTable support internationalization and end users can switch languages right away without reload whole page.

Currently WebPivotTable ships with the following languages:

English (en)
Simplified Chinese (zh-CN)
German (de)
Portuguese (pt)
Spanish (es)
Italian (it)
Turkish (tr-TR)

```
webpivotptable
       ├─-- public
       |       |--- lang  
       |       |      ├─-- de.json
       |       |      ├─-- en.json
       |       |      ├─-- es.json
       |       |      ├─-- it.json
       |       |      ├─-- pt.json
       |       |      ├─-- tr-TR.json
       |       |      └─-- zh-CN.json

```

<h2 id="set-locale-file-path"> Set localeFilePath </h2>

All language files were under public/lang directory, default `localeFilePath` option set to './lang', this is OK if we put
whole lang directory under root public directory of our Web Server and put our web page under root public.

But if we need put this lang directory to some other path or we need put our web page which integrate WebPivotTable to some other
path, we should set correct `localFilePath`, otherwise, all languages file can't be loaded.

Correct `localeFilePath` value should be a relative path of lang directory to path of web page and can be set by
[set localeFilePath option](/doc/options#locale-file-path).


<h2 id="set-default-locale"> Set Default Locale </h2>

Default `locale` was set to 'en' internally. You can set this default locale when user open WebPivotTable by
[set locale option](/doc/options#locale).


<h2 id="set-available-locales"> Set Available Locales </h2>



  


<h2 id="add-other-languages"> Add other languages </h2>

Danish (da)
French (fr)
Norwegian (nb-NO)
Traditional Chinese (zh-TW)
Korean (ko)
Japanese (ja)
Dutch (nl)
Vietnamese (vi)
Russian (ru-RU)
Brazilian Portuguese (pt-br)
Farsi (fa)
Thai (th)
Indonesian (id)
Bulgarian (bg)
Polish (pl)
Finnish (fi)
Swedish (sv-SE)
Greek (el)
Slovak (sk)
Catalunya (ca)
Czech (cs-CZ)
Ukrainian (ua)
Turkmen (tk)
Tamil (ta)
Latvian (lv)
Afrikaans (af-ZA)
Estonian (ee)
Slovenian (sl)
Arabic (ar)
Hebrew (he)
Lithuanian (lt)
Mongolian (mn)
Kazakh (kz)
Hungarian (hu)
Romanian (ro)
Kurdish (ku)
Uighur (ug-CN)

