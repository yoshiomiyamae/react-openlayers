Object.defineProperty(exports, "__esModule", { value: true });
var ol = require("openlayers");
var ClusterStyle = (function () {
    function ClusterStyle(vectorSource) {
        var _this = this;
        this.vectorStyleFunction = function (feature, resolution) {
            if (resolution != _this.currentResolution) {
                _this.calculateClusterInfo(resolution);
                _this.currentResolution = resolution;
            }
            var style;
            var size = feature.get('features').length;
            if (size > 1) {
                style = new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: feature.get('radius'),
                        fill: new ol.style.Fill({
                            color: [255, 153, 0, Math.min(0.8, 0.4 + (size / _this.maxFeatureCount))]
                        })
                    }),
                    text: new ol.style.Text({
                        text: size.toString(),
                        fill: new ol.style.Fill({ color: '#fff' }),
                        stroke: new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.6)', width: 3 })
                    })
                });
            }
            else {
                var originalFeature = feature.get('features')[0];
                style = _this.createClusterStyle(originalFeature);
            }
            return style;
        };
        this.selectStyleFunction = function (feature) {
            var invisibleFill = new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.01)' });
            var styles = [new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: feature.get('radius'),
                        fill: invisibleFill
                    })
                })];
            var originalFeatures = feature.get('features');
            var originalFeature;
            for (var i = originalFeatures.length - 1; i >= 0; --i) {
                originalFeature = originalFeatures[i];
                styles.push(_this.createClusterStyle(originalFeature));
            }
            return styles;
        };
        this.source = vectorSource;
    }
    ClusterStyle.prototype.calculateClusterInfo = function (resolution) {
        this.maxFeatureCount = 0;
        var features = this.source.getFeatures();
        var feature, radius;
        for (var i = features.length - 1; i >= 0; --i) {
            feature = features[i];
            var originalFeatures = feature.get('features');
            var extent = ol.extent.createEmpty();
            var j, jj;
            for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
                ol.extent.extend(extent, originalFeatures[j].getGeometry().getExtent());
            }
            this.maxFeatureCount = Math.max(this.maxFeatureCount, jj);
            radius = 0.25 * (ol.extent.getWidth(extent) + ol.extent.getHeight(extent)) /
                resolution;
            feature.set('radius', radius);
        }
    };
    ClusterStyle.prototype.createClusterStyle = function (feature) {
        var clusterFill = new ol.style.Fill({ color: 'rgba(255, 153, 0, 0.8)' });
        var clusterStroke = new ol.style.Stroke({ color: 'rgba(255, 204, 0, 0.2)', width: 1 });
        var name = feature.get('name');
        var magnitude = parseFloat(name.substr(2));
        var radius = 5 + 20 * (magnitude - 5);
        return new ol.style.Style({
            geometry: feature.getGeometry(),
            image: new ol.style.RegularShape({
                radius1: radius,
                radius2: 3,
                points: 5,
                angle: Math.PI,
                fill: clusterFill,
                stroke: clusterStroke
            })
        });
    };
    return ClusterStyle;
}());
exports.ClusterStyle = ClusterStyle;
//# sourceMappingURL=cluster-style.js.map