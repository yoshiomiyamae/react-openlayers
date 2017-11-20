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
var util_1 = require("./util");
var PropTypes = require("prop-types");
require("./ol.css");
require("./map.css");
var Map = (function (_super) {
    __extends(Map, _super);
    function Map(props) {
        var _this = _super.call(this, props) || this;
        _this.layers = [];
        _this.interactions = [];
        _this.controls = [];
        _this.overlays = [];
        _this.options = {
            pixelRation: undefined,
            keyboardEventTarget: undefined,
            loadTilesWhileAnimation: undefined,
            loadTilesWhileInteractiong: undefined,
            logo: undefined,
            renderer: undefined,
            setCenter: undefined,
            setZoom: undefined,
            setResolution: undefined,
            view: new ol.View({ center: [0, 0], zoom: 3 }),
            controls: undefined,
            interactions: undefined,
            layers: undefined,
            overlays: undefined
        };
        _this.events = {
            'change': undefined,
            'change:layerGroup': undefined,
            'change:size': undefined,
            'change:target': undefined,
            'change:view': undefined,
            'click': undefined,
            'dblclick': undefined,
            'moveend': undefined,
            'pointerdrag': undefined,
            'pointermove': undefined,
            'postcompose': undefined,
            'postrender': undefined,
            'precompose': undefined,
            'propertychange': undefined,
            'singleclick': undefined
        };
        console.log('Map constructor');
        return _this;
    }
    Map.prototype.componentDidMount = function () {
        this.options = __assign({}, this.options, this.props);
        var options = util_1.Util.getOptions(this.options);
        !(options.view instanceof ol.View) && (options.view = new ol.View(options.view));
        var controlsCmp = util_1.Util.findChild(this.props.children, 'Controls') || {};
        var interactionsCmp = util_1.Util.findChild(this.props.children, 'Interactions') || {};
        options.controls = ol.control.defaults(controlsCmp.props).extend(this.controls);
        options.interactions = ol.interaction.defaults(interactionsCmp.props).extend(this.interactions);
        options.layers = this.layers;
        options.overlays = this.overlays;
        console.log('map options', options);
        this.map = new ol.Map(options);
        this.map.setTarget(options.target || this.mapDiv);
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.map.on(eventName, olEvents[eventName]);
        }
    };
    Map.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.view && nextProps.view.center !== this.props.view.center) {
            this.map.getView().setCenter(nextProps.view.center);
        }
        if (this.props.view && nextProps.view.zoom !== this.props.view.zoom) {
            this.map.getView().setZoom(nextProps.view.zoom);
        }
    };
    Map.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: "openlayers-map", ref: function (el) { return _this.mapDiv = el; } }, this.props.children)));
    };
    Map.prototype.componentWillUnmount = function () {
        this.map.setTarget(undefined);
    };
    Map.prototype.getChildContext = function () {
        return {
            mapComp: this,
            map: this.map
        };
    };
    Map.childContextTypes = {
        mapComp: PropTypes.instanceOf(Map),
        map: PropTypes.instanceOf(ol.Map)
    };
    return Map;
}(React.Component));
exports.Map = Map;
//# sourceMappingURL=map.js.map