---
title: Events
description: "Listen to Events"
---

  
<h2 id="how-to-listen-to-events"> How to listen to events? </h2>

Below is standard syntax for listen to events:  

```javascript
var wpt = document.getElementsByTagName('web-pivot-table')[0];

wpt.addEventListener(eventName, eventHandler);
```

<h2 id="new-wpt">`CONNECT_SOURCE`</h2>

```javascript
wpt.addEventListener(wpt.Constants.eventType.CONNECT_SOURCE, function(source){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`source`         | `object`       | no         | payload object             |


<h2 id="open-wpt">`openWpt`</h2>

```javascript
wpt.addEventListener(wpt.Constants.eventType.OPEN_WPT, function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="save-wpt">`saveWpt`</h2>

```javascript
wpt.addEventListener(wpt.Constants.eventType.SAVE_WPT, function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="drill-through">`drillThrough`</h2>

```javascript
wpt.addEventListener(wpt.Constants.eventType.DRILL_THROUGH, function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


```
payload: {
  sheet,
  row,
  column,
  event
} 
```





 
