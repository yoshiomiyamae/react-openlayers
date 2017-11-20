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
Object.defineProperty(exports, "__esModule", { value: true });
var ol = require("openlayers");
var geo_coder_1 = require("geo-coder");
require("./geo-coder.css");
var element = document.createElement('div');
var GeoCoderControl = (function (_super) {
    __extends(GeoCoderControl, _super);
    function GeoCoderControl(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, { element: element }) || this;
        _this.eventListeners = {};
        _this.expanded = false;
        _this.locate = function (options) {
            var lonLat = [parseFloat(options.lon), parseFloat(options.lat)];
            var projection = _this.getMap().getView().getProjection();
            var coord = ol.proj.transform(lonLat, 'EPSG:4326', projection);
            var view = _this.getMap().getView();
            var duration = options.duration || 500;
            var resolution = options.resolution || 2.388657133911758;
            view.animate({ duration: duration, resolution: resolution }, { duration: duration, center: coord });
        };
        _this.toggleExpand = function () {
            _this.expanded = !_this.expanded;
            _this.autocompleteEl.style.display = _this.expanded ? '' : 'none';
        };
        _this.geoCoder = new geo_coder_1.GeoCoder(options);
        element.innerHTML = '';
        element.className = 'ol-control geo-coder';
        element.appendChild(_this.buttonEl = _this.getButtonHTML());
        element.appendChild(_this.autocompleteEl = _this.getAutocompleteHTML());
        return _this;
    }
    GeoCoderControl.prototype.on = function (eventName, listener, option) {
        this.eventListeners[eventName] = listener;
        return listener;
    };
    GeoCoderControl.prototype.getButtonHTML = function () {
        var buttonEl = document.createElement('button');
        buttonEl.innerHTML = 'G';
        buttonEl.addEventListener('click', this.toggleExpand, false);
        return buttonEl;
    };
    GeoCoderControl.prototype.getAutocompleteHTML = function () {
        var _this = this;
        var autocompleteEl = document.createElement('div');
        autocompleteEl.className = 'autocomplete';
        autocompleteEl.style.display = 'none';
        var inputEl = document.createElement('input');
        inputEl.className = 'address';
        autocompleteEl.appendChild(inputEl);
        this.geoCoder.autocomplete(inputEl);
        inputEl.addEventListener('place_changed', function (event) {
            _this.eventListeners['place_changed'](event);
        });
        return autocompleteEl;
    };
    return GeoCoderControl;
}(ol.control.Control));
exports.GeoCoderControl = GeoCoderControl;
//# sourceMappingURL=geo-coder-control.js.map