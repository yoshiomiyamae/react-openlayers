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
var ScaleLine = (function (_super) {
    __extends(ScaleLine, _super);
    function ScaleLine(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            className: undefined,
            minWidth: undefined,
            render: undefined,
            target: undefined,
            units: undefined
        };
        _this.events = {
            'change': undefined,
            'change:units': undefined,
            'propertychange': undefined
        };
        return _this;
    }
    ScaleLine.prototype.render = function () { return null; };
    ScaleLine.prototype.componentDidMount = function () {
        this.options = __assign({}, this.options, this.props);
        var options = util_1.Util.getOptions(this.options);
        this.control = new ol.control.ScaleLine(options);
        this.context.mapComp.controls.push(this.control);
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.control.on(eventName, olEvents[eventName]);
        }
    };
    ScaleLine.contextTypes = {
        mapComp: PropTypes.instanceOf(Object),
        map: PropTypes.instanceOf(ol.Map)
    };
    return ScaleLine;
}(React.Component));
exports.ScaleLine = ScaleLine;
//# sourceMappingURL=scale-line.js.map