---
title: Events
description: "Listen to Events"
---

  
<div class="Alert Alert--orange">
Events are available in Pro edition only.
</div>


<h2 id="how-to-listen-to-events"> How to listen to events? </h2>

Like [Calling APIs](/doc/apis#how-to-call-apis), Listen to WebPivotTable Events is implemented based on event bus mechanism as well.

There is an "$eventBus" property of initialed WebPivotTable object. This property is an event bus.
We can use "$on" method to listen to all events emit from WebPivotTable.

Below is standard syntax for listen to events:  

```javascript
var wpt = document.getElementsByTagName('web-pivot-table')[0];

wpt.$eventBus.$on(eventName, eventHandler);
```
First, we need get WebPivotTable object, then call $on method of this object's $eventBus props,
passing with event name together with event handler.

<div class="Alert Alert--orange">
In order to listen to events, we need enable corresponding custom handler first,
see [customHandlers Option](/doc/options#custom-handlers) for more details.
</div>


<h2 id="new-wpt">`newWpt`</h2>

```javascript
wpt.$eventBus.$on("newWpt", function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="open-wpt">`openWpt`</h2>

```javascript
wpt.$eventBus.$on("openWpt", function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="save-wpt">`saveWpt`</h2>

```javascript
wpt.$eventBus.$on("saveWpt", function(payload){});
```

| Param Name       | Param Type    | Optional   | Description                 |
|------------------|---------------|------------|-----------------------------|
|`payload`         | `object`       | no         | payload object             |


<h2 id="drill-through">`drillThrough`</h2>

```javascript
wpt.$eventBus.$on("drillThrough", function(payload){});
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





 
