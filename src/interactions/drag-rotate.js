"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ol = require("openlayers");
var util_1 = require("../util");
var PropTypes = require("prop-types");
var DragRotate = (function (_super) {
    __extends(DragRotate, _super);
    function DragRotate(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            condition: undefined,
            duration: undefined
        };
        _this.events = {
            'change': undefined,
            'change:active': undefined,
            'propertychange': undefined
        };
        return _this;
    }
    DragRotate.prototype.render = function () { return null; };
    DragRotate.prototype.componentDidMount = function () {
        this.options = __assign({}, this.options, this.props);
        var options = util_1.Util.getOptions(this.options);
        console.log('options', options);
        this.interaction = new ol.interaction.DragRotate(options);
        this.context.mapComp.interactions.push(this.interaction);
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.interaction.on(eventName, olEvents[eventName]);
        }
    };
    DragRotate.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps !== this.props) {
            this.context.mapComp.map.removeInteraction(this.interaction);
            var options = util_1.Util.getOptions(Object['assign'](this.options, nextProps));
            this.interaction = new ol.interaction.DragRotate(options);
            this.context.mapComp.map.addInteraction(this.interaction);
            var olEvents = util_1.Util.getEvents(this.events, this.props);
            for (var eventName in olEvents) {
                this.interaction.on(eventName, olEvents[eventName]);
            }
        }
    };
    DragRotate.prototype.componentWillUnmount = function () {
        this.context.mapComp.map.removeInteraction(this.interaction);
    };
    DragRotate.contextTypes = {
        mapComp: PropTypes.instanceOf(Object),
        map: PropTypes.instanceOf(ol.Map)
    };
    return DragRotate;
}(React.Component));
exports.DragRotate = DragRotate;
//# sourceMappingURL=drag-rotate.js.map