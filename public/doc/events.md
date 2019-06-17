---
title: Events
description: "Listen to Events"
---

  
<div class="Alert Alert--orange">
Events are available in Pro edition only.
</div>


<h2 id="how-to-listen-to-events"> How to listen to events? </h2>

Below is standard syntax for listen to events:  

```javascript
var wpt = document.getElementsByTagName('web-pivot-table')[0];

wpt.addEventListener(eventName, eventHandler);
```

<div class="Alert Alert--orange">
In order to listen to events, we need enable corresponding custom handler first,
see [customHandlers Option](/doc/options#custom-handlers) for more details.
</div>


<h2 id="new-wpt">`EVENT_CONNECT_SOURCE`</h2>

```javascript
wpt.addEventListener(wpt.events.EVENT_CONNECT_SOURCE, function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="open-wpt">`openWpt`</h2>

```javascript
wpt.addEventListener(wpt.events.EVENT_OPEN_WPT, function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="save-wpt">`saveWpt`</h2>

```javascript
wpt.addEventListener(wpt.events.EVENT_SAVE_WPT, function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="drill-through">`drillThrough`</h2>

```javascript
wpt.addEventListener(wpt.events.EVENT_DRILL_THROUGH, function(payload){});
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





 
