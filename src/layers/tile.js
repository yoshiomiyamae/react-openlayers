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
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(props) {
        var _this = _super.call(this, props) || this;
        _this.options = {
            zIndex: undefined,
            opacity: undefined,
            preload: undefined,
            source: undefined,
            visible: undefined,
            extent: undefined,
            minResolution: undefined,
            maxResolution: undefined,
            useInterimTilesOnError: undefined
        };
        _this.events = {
            'change': undefined,
            'change:extent': undefined,
            'change:maxResolution': undefined,
            'change:minResolution': undefined,
            'change:opacity': undefined,
            'change:preload': undefined,
            'change:source': undefined,
            'change:useInterimTilesOnError': undefined,
            'change:visible': undefined,
            'change:zIndex': undefined,
            'postcompose': undefined,
            'precompose': undefined,
            'propertychange': undefined,
            'render': undefined
        };
        console.log('Tile constructor');
        return _this;
    }
    Tile.prototype.render = function () {
        return null;
    };
    Tile.prototype.componentDidMount = function () {
        this.options = __assign({}, this.options, this.props);
        var options = util_1.Util.getOptions(this.options);
        options.source = options.source || new ol.source.OSM();
        this.layer = new ol.layer.Tile(options);
        if (this.props.zIndex) {
            this.layer.setZIndex(this.props.zIndex);
        }
        this.context.mapComp.layers.push(this.layer);
        var olEvents = util_1.Util.getEvents(this.events, this.props);
        for (var eventName in olEvents) {
            this.layer.on(eventName, olEvents[eventName]);
        }
    };
    Tile.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps !== this.props) {
            this.options = __assign({}, this.options, this.props);
            var options = util_1.Util.getOptions(this.options);
            this.context.mapComp.map.removeLayer(this.layer);
            this.layer = new ol.layer.Tile(options);
            if (this.props.zIndex) {
                this.layer.setZIndex(this.props.zIndex);
            }
            this.context.mapComp.map.addLayer(this.layer);
            var olEvents = util_1.Util.getEvents(this.events, this.props);
            for (var eventName in olEvents) {
                this.layer.on(eventName, olEvents[eventName]);
            }
        }
    };
    Tile.prototype.componentWillUnmount = function () {
        this.context.mapComp.map.removeLayer(this.layer);
    };
    Tile.contextTypes = {
        mapComp: PropTypes.instanceOf(Object),
        map: PropTypes.instanceOf(ol.Map)
    };
    return Tile;
}(React.Component));
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map