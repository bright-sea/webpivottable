# WebPivotTable (WPT)

A full-featured pivot table and pivot chart **Web Component** built with React.
Drop it into any web page — no framework required.

- [Live Demo](https://webpivottable.com/demo)
- [Quick Start](https://webpivottable.com/quick-start)
- [Documentation](https://webpivottable.com/docs)


## Install

### CDN (simplest)

```html
<script type="module" src="https://cdn.webpivottable.com/wpt/latest/web-pivot-table.js"></script>
```

### npm

```bash
npm install webpivottable
# or
yarn add webpivottable
```

### GitHub

```
https://github.com/bright-sea/webpivottable
```


## Quick Start

Add a single `<script>` tag and a `<web-pivot-table>` element — that's it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WebPivotTable</title>
  <style>
    html, body, #wpt-container { width: 100%; height: 100%; padding: 0; margin: 0; }
  </style>
  <script type="module" src="https://cdn.webpivottable.com/wpt/latest/web-pivot-table.js"></script>
</head>
<body>
  <div id="wpt-container">
    <web-pivot-table></web-pivot-table>
  </div>
</body>
</html>
```

See the full [Quick Start guide](https://webpivottable.com/quick-start) for
npm usage, React/Vue integration, and pre-loading data sources.


## Cross-Domain Proxy

WebPivotTable includes a default proxy server for loading remote files and
connecting to OLAP servers across origins:

```javascript
const wpt = document.querySelector('web-pivot-table');
wpt.setOptions({
  server: {
    fileProxyEnabled: 1,
    fileProxy: 'https://webpivottable.com/api/wpt/file-proxy',
    fileTimeout: 30000,
    xmlaProxyEnabled: 1,
    xmlaProxy: 'https://webpivottable.com/api/wpt/xmla-proxy',
    xmlaTimeout: 30000,
  },
});
```

If you don't need cross-origin access, disable the proxies by setting
`fileProxyEnabled` and `xmlaProxyEnabled` to `0`.

To run your own proxy, see the `server/` directory in this repo for a Node.js
Express example, or read the
[Cross-Domain Access docs](https://webpivottable.com/docs/cross-domain-access).


## Links

- [Live Demo](https://webpivottable.com/demo)
- [Quick Start](https://webpivottable.com/quick-start)
- [Documentation](https://webpivottable.com/docs)
- [APIs](https://webpivottable.com/docs/apis)
- [Options](https://webpivottable.com/docs/options)
- [Events](https://webpivottable.com/docs/events)


## License

© 2026 Brightsea Inc.

