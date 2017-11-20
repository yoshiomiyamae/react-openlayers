"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ol = require("openlayers");
var MarkerStyle = (function () {
    function MarkerStyle(src) {
        this.src = 'https://openlayers.org/en/v4.0.1/examples/data/icon.png';
        this.style = new ol.style.Style({
            image: new ol.style.Icon(({
                src: this.src
            }))
        });
        this.selectStyleFunction = function (feature) {
            return new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 0.96],
                    color: '#4271AE',
                    src: 'https://openlayers.org/en/v4.0.1/examples/data/dot.png'
                })
            });
        };
        this.src = src;
    }
    return MarkerStyle;
}());
exports.MarkerStyle = MarkerStyle;
//# sourceMappingURL=marker-style.js.map