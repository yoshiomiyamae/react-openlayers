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
var Draw = (function (_super) {
    __extends(Draw, _super);
    function Draw(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            clickTolerance: undefined,
            features: undefined,
            source: undefined,
            snapTolerance: undefined,
            type: undefined,
            maxPoints: undefined,
            minPoints: undefined,
            finishCondition: undefined,
            style: undefined,
            geometryFunction: undefined,
            geometryName: undefined,
            condition: undefined,
            freehand: undefined,
            freehandCondition: undefined,
            wrapX: undefined
        };
        _this.events = {
            'change': undefined,
            'change:active': undefined,
            'drawend': undefined,
            'drawstart': undefined,
            'propertychange': undefined
        };
        return _this;
    }
    Draw.prototype.render = function () { return null; };
    Draw.prototype.componentDidMount = function () {
        this.options = __assign({}, this.options, this.props);
        var options = util_1.Util.getOptions(this.options);
        this.interaction = new ol.interaction.Draw(options);
        this.context.mapComp.interactions.push(this.interaction);
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.interaction.on(eventName, olEvents[eventName]);
        }
    };
    Draw.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps !== this.props) {
            this.context.mapComp.map.removeInteraction(this.interaction);
            var options = util_1.Util.getOptions(Object['assign'](this.options, nextProps));
            this.interaction = new ol.interaction.Draw(options);
            this.context.mapComp.map.addInteraction(this.interaction);
            var olEvents = util_1.Util.getEvents(this.events, this.props);
            for (var eventName in olEvents) {
                this.interaction.on(eventName, olEvents[eventName]);
            }
        }
    };
    Draw.prototype.componentWillUnmount = function () {
        this.context.mapComp.map.removeInteraction(this.interaction);
    };
    Draw.contextTypes = {
        mapComp: PropTypes.instanceOf(Object),
        map: PropTypes.instanceOf(ol.Map)
    };
    return Draw;
}(React.Component));
exports.Draw = Draw;
//# sourceMappingURL=draw.js.map