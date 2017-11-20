Object.defineProperty(exports, "__esModule", { value: true });
var scale_line_1 = require("./scale-line");
var attribution_1 = require("./attribution");
var full_screen_1 = require("./full-screen");
var mouse_position_1 = require("./mouse-position");
var overview_map_1 = require("./overview-map");
var rotate_1 = require("./rotate");
var zoom_slider_1 = require("./zoom-slider");
var zoom_to_extent_1 = require("./zoom-to-extent");
var zoom_1 = require("./zoom");
var controls_1 = require("./controls");
exports.Controls = controls_1.Controls;
var control = {
    ScaleLine: scale_line_1.ScaleLine,
    Attribution: attribution_1.Attribution,
    FullScreen: full_screen_1.FullScreen,
    MousePosition: mouse_position_1.MousePosition,
    OverviewMap: overview_map_1.OverviewMap,
    Rotate: rotate_1.Rotate,
    ZoomSlider: zoom_slider_1.ZoomSlider,
    ZoomToExtent: zoom_to_extent_1.ZoomToExtent,
    Zoom: zoom_1.Zoom
};
exports.control = control;
//# sourceMappingURL=index.js.map