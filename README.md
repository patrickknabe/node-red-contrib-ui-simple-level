# node-red-contrib-ui-simple-level

A simple level indicator for the Node-RED Dashboard.

![](pics/level.png)

## Installation

Open Node-RED and select `Manage palette` from the menu to open the Palette Manager. Go to the `Install` tab, search for `node-red-contrib-ui-simple-level` and click `install`.

Alternatively, you can run the following command in your Node-RED user directory (typically `~/.node-red`):

```
npm i node-red-contrib-ui-simple-level
```

## Example

![](pics/example.png)

```
[{"id":"4d3e8780062da62c","type":"tab","label":"Flow 1","disabled":false,"info":"","env":[]},{"id":"9a814867623b40aa","type":"ui_tab","name":"Home","icon":"dashboard","disabled":false,"hidden":false},{"id":"7522495286bd6840","type":"ui_base","theme":{"name":"theme-light","lightTheme":{"default":"#0094CE","baseColor":"#0094CE","baseFont":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif","edited":true,"reset":false},"darkTheme":{"default":"#097479","baseColor":"#097479","baseFont":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif","edited":false},"customTheme":{"name":"Untitled Theme 1","default":"#4B7930","baseColor":"#4B7930","baseFont":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"},"themeState":{"base-color":{"default":"#0094CE","value":"#0094CE","edited":false},"page-titlebar-backgroundColor":{"value":"#0094CE","edited":false},"page-backgroundColor":{"value":"#fafafa","edited":false},"page-sidebar-backgroundColor":{"value":"#ffffff","edited":false},"group-textColor":{"value":"#1bbfff","edited":false},"group-borderColor":{"value":"#ffffff","edited":false},"group-backgroundColor":{"value":"#ffffff","edited":false},"widget-textColor":{"value":"#111111","edited":false},"widget-backgroundColor":{"value":"#0094ce","edited":false},"widget-borderColor":{"value":"#ffffff","edited":false},"base-font":{"value":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"}},"angularTheme":{"primary":"indigo","accents":"blue","warn":"red","background":"grey","palette":"light"}},"site":{"name":"Node-RED Dashboard","hideToolbar":"false","allowSwipe":"false","lockMenu":"false","allowTempTheme":"true","dateFormat":"DD.MM.YYYY","sizes":{"sx":48,"sy":48,"gx":6,"gy":6,"cx":6,"cy":6,"px":0,"py":0}}},{"id":"b80f99e21dcaab60","type":"ui_group","name":"Standard","tab":"9a814867623b40aa","order":1,"disp":false,"width":"6","collapse":false,"className":""},{"id":"708a130614c338e0","type":"ui_simple_level","z":"4d3e8780062da62c","name":"Level","green":"50","orange":"75","group":"b80f99e21dcaab60","order":2,"width":"2","height":"4","x":330,"y":160,"wires":[]},{"id":"2a5f4c884b8a1c99","type":"inject","z":"4d3e8780062da62c","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"59","payloadType":"num","x":130,"y":160,"wires":[["708a130614c338e0"]]},{"id":"ab2418bd8be4a2b7","type":"inject","z":"4d3e8780062da62c","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"13","payloadType":"num","x":130,"y":80,"wires":[["708a130614c338e0"]]},{"id":"708947dc66a9dfb6","type":"inject","z":"4d3e8780062da62c","name":"","props":[{"p":"payload"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"95","payloadType":"num","x":130,"y":240,"wires":[["708a130614c338e0"]]}]
```

## License

[MIT](LICENSE)

## Projects

Also take a look at my other dashboard projects:

### [node-red-contrib-ui-clock](https://github.com/patrickknabe/node-red-contrib-ui-clock)

An analog clock for the Node-RED Dashboard.

![](pics/clock.png)

### [node-red-contrib-ui-digital-clock](https://github.com/patrickknabe/node-red-contrib-ui-digital-clock)

A digital clock for the Node-RED Dashboard.

![](pics/digital-clock.png)

### [node-red-contrib-ui-digital-display](https://github.com/patrickknabe/node-red-contrib-ui-digital-display)

A digital display, with adjustable number of digits and decimals, for the Node-RED Dashboard.

![](pics/pi.png)