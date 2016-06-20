/**
     * Custom events v1.1.10 (2015-12-09)
     *
     * (c) 2012-2015 Black Label
     *
     * License: Creative Commons Attribution (CC)
     */

    (function (HC) {
        /*jshint expr:true, boss:true */
        var UNDEFINED,
            _tick   = HC.Tick.prototype,
            _axis   = HC.Axis.prototype,
            _chart  = HC.Chart.prototype,
            _legend = HC.Legend.prototype,
            _series = HC.Series.prototype,
            _column = HC.seriesTypes.column && HC.seriesTypes.column.prototype,
            _bar    = HC.seriesTypes.bar && HC.seriesTypes.bar.prototype,
            _pie    = HC.seriesTypes.pie &&  HC.seriesTypes.pie.prototype,
            _bubble = HC.seriesTypes.bubble && HC.seriesTypes.bubble.prototype,
            _plotBands    = HC.PlotLineOrBand && HC.PlotLineOrBand.prototype,
            _flags        = HC.seriesTypes.flags && HC.seriesTypes.flags.prototype,
            seriesAnimate = _series.animate,
            columnAnimate = _column.animate,
            barAnimate    = _bar.animate,
            pieAnimate    = _pie.animate,
            noop          = function() { };

        //Highcharts functions
        function isArray(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }

        //reanimate
        var reanimate = HC.Chart.prototype.reAnimate = function() {
            var chart = this;
                Highcharts.each(chart.series, function (s) {
                    var animation = s.options.animation,
                        clipBox = s.clipBox || chart.clipBox,
                        sharedClipKey = ['_sharedClip', animation.duration, animation.easing, clipBox.height].join(','),
                        clipRect = chart[sharedClipKey],
                        markerClipRect = chart[sharedClipKey + 'm'];
                
                    if(!clipRect) { // HC < 4.0.0
                        chart.redraw();
                        return;
                    }
                
                    if (clipRect) {
                        clipRect.attr({
                            width: 0
                        });
                    }
                    if (markerClipRect) {
                        markerClipRect.attr({
                            width: 0
                        });
                    }

                    switch(s.type) {
                        case 'pie':
                            s.animate = pieAnimate;
                            break;
                        case 'column':
                            s.animate = columnAnimate;
                            break;
                         case 'bar':
                            s.animate = barAnimate;
                            break;
                        default:
                            s.animate = seriesAnimate;
                            break;
                    }
                    
                    s.animate(true);
                    s.isDirty = true;
                });

                chart.redraw();
        };

        //reseting all events, fired by Highcharts
        HC.Chart.prototype.callbacks.push(function (chart) {
            var resetAxisEvents = chart.customEvent.resetAxisEvents,
                forExport = chart.renderer.forExport,
                series = chart.series,
                serLen = series.length,
                xAxis = chart.xAxis,
                yAxis = chart.yAxis,
                i = 0;

            if(forExport) //skip custom events when chart is exported
                return false;

            resetAxisEvents(xAxis, 'xAxis', chart);
            resetAxisEvents(yAxis, 'yAxis', chart);

            for (; i < serLen; i++) {
                series[i].update({
                    animation:{
                        enabled: true
                    },
                    customEvents: {
                        series: series[i].options.events,
                        point: series[i].options.point.events
                    },
                    events: {
                        click: noop
                    },
                    point: {
                        events: {
                            click: noop
                        }
                    }
                }, false);
            }

            chart.xAxis[0].isDirty = true;
            reanimate.call(chart);
        });

        //custom event body
        var customEvent = HC.Chart.prototype.customEvent = function (obj, proto) {
            customEvent.add = function (elem, events, obj) {

                for (var key in events) {

                    (function (key) {
                        if (events.hasOwnProperty(key) && elem) {
                                if ((!elem[key] || elem[key] === UNDEFINED) && elem.element) {
                                

                                    HC.addEvent(elem.element, key, function (e) {
                                        if(obj.textStr) //labels
                                            obj.value = obj.textStr;
                                        
                                        events[key].call(obj, e);
                                        return false;
                                    });
                                }

                                elem[key] = true;
                        }
                    })(key);

                }
            };

            HC.Chart.prototype.customEvent.resetAxisEvents = function (axis, type, chart) {
                var axisLength = axis.length,
                    userOptions = chart.userOptions,
                    i = 0,
                    j = 0,
                    redraw = false,
                    customEvents, plotBandsLength, plotLinesLength, plotLines, plotBands, cAxis;

                for (; i < axisLength; i++) {

                    if (type) {
                        cAxis = HC.splat(userOptions[type]);
                        plotLines = cAxis[i] && cAxis[i].plotLines;
                        plotBands = cAxis[i] && cAxis[i].plotBands;
                    }

                    if (plotLines !== UNDEFINED) {
                        plotLinesLength = plotLines.length;

                        for (j = 0; j < plotLinesLength; j++) {
                            var t = plotLines[j].events;
                            if (t) {
                                plotLines[j].customEvents = t;
                                plotLines[j].events = null;
                            }
                        };

                        redraw = true;
                    }

                    if (plotBands !== UNDEFINED) {
                        plotBandsLength = plotBands.length;

                        for (j = 0; j < plotBandsLength; j++) {
                            var t = plotBands[j].events;
                            if (t) {
                                plotBands[j].customEvents = t;
                                plotBands[j].events = null;
                            }
                        };

                        redraw = true;
                    }

                    if (redraw) {
                        axis[i].update({
                            plotLines: plotLines,
                            plotBands: plotBands
                        }, false);
                    }
                };
            };


            HC.wrap(obj, proto, function (proceed) {
                var events,
                    element,
                    eventsPoint,
                    elementPoint,
                    parent,
                    op,
                    len;

                //call default actions
                var ob = proceed.apply(this, Array.prototype.slice.call(arguments, 1));

                //switch on object
                switch (proto) {
                    case 'addLabel':
                        parent = this.parent;
                        eventsPoint = this.axis.options.labels.events;
                        elementPoint = [this.label];

                        if(parent) {
                            var step = this; //current label

                            while (step) {
                                if (isArray(step)) {
                                    len = step.length;

                                    for (i = 0; i < len; i++) {
                                        callback(step[i]);
                                    }
                                }
                                else {
                                    callback(step);
                                }

                                step = step.parent;
                            }

                            function callback (element) {
                                elementPoint.push(element.label);
                            }
                        }

                        break;
                    case 'setTitle':
                        events = this.options.title.events;
                        element = this.title;
                        break;
                    case 'drawDataLabels':
                        events = this.dataLabelsGroup ? this.options.dataLabels.events : null;
                        element = this.dataLabelsGroup ? this.dataLabelsGroup : null;
                        break;
                    case 'render':
                        if (this.axisTitle) {
                            events = this.options.title.events;
                            element = this.axisTitle;
                        }
                        
                        if (this.options.value || this.options.from) {
                            events = this.options.customEvents;
                            element = this.svgElem;
                        }

                        if (this.options.stackLabels && this.options.stackLabels.enabled) { 
                            events = this.options.stackLabels.events;
                            element = this.stackTotalGroup;
                            eventsPoint = this.options.stackLabels.events;
                            elementPoint = this.stacks;
                        }

                        break;
                    case 'drawPoints':
                        op = this.options;
                        events = op.customEvents ? op.customEvents.series : op,
                        element = this.group;
                        eventsPoint = op.customEvents ? op.customEvents.point : op.point.events;
                        elementPoint = this.points;
                        break;
                    case 'renderItem':
                        events = this.options.itemEvents;
                        element = this.group;
                        break;
                }


                if (events || eventsPoint) {

                    if (eventsPoint) {
                        var len = elementPoint.length
                        j = 0;

                        for (; j < len; j++) {
                            var elemPoint = HC.pick(elementPoint[j].graphic, elementPoint[j]);

                            if (elemPoint && elemPoint !== UNDEFINED) {
                                customEvent.add(elemPoint, eventsPoint, elementPoint[j]);
                            }
                        }
                    }

                    customEvent.add(element, events, this);
                }

                return ob;
            });
        };
        //labels 
        customEvent(_tick, 'addLabel');

        //axis / title
        customEvent(_axis, 'render');

        //series events & point events
        customEvent(_series, 'drawPoints');

        //datalabels events
        customEvent(_series, 'drawDataLabels');

        //title events
        customEvent(_chart, 'setTitle');

        //legend items
        customEvent(_legend, 'renderItem');

        //plotbands + plotlines
        if (_plotBands) {
            customEvent(_plotBands, 'render');
        }

        //bubble charts
        if (_bubble) {
            customEvent(_bubble, 'drawPoints');
            customEvent(_bubble, 'drawDataLabels');
        }

        //column chart 
        if (_column) {
            customEvent(_column, 'drawDataLabels');
            customEvent(_column, 'drawPoints');
        }

        if (_pie) {
            customEvent(_pie, 'drawDataLabels');
            customEvent(_pie, 'drawPoints');
        }

        if(_flags) {
                customEvent(_flags, 'drawDataLabels');
            customEvent(_flags, 'drawPoints');
        }

    })(Highcharts);
