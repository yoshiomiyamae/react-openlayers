Object.defineProperty(exports, "__esModule", { value: true });
var double_click_zoom_1 = require("./double-click-zoom");
var drag_and_drop_1 = require("./drag-and-drop");
var drag_box_1 = require("./drag-box");
var drag_pan_1 = require("./drag-pan");
var drag_rotate_1 = require("./drag-rotate");
var drag_rotate_and_zoom_1 = require("./drag-rotate-and-zoom");
var drag_zoom_1 = require("./drag-zoom");
var draw_1 = require("./draw");
var extent_1 = require("./extent");
var interactions_1 = require("./interactions");
exports.Interactions = interactions_1.Interactions;
var keyboard_pan_1 = require("./keyboard-pan");
var keyboard_zoom_1 = require("./keyboard-zoom");
var modify_1 = require("./modify");
var mouse_wheel_zoom_1 = require("./mouse-wheel-zoom");
var pinch_rotate_1 = require("./pinch-rotate");
var pinch_zoom_1 = require("./pinch-zoom");
var pointer_1 = require("./pointer");
var select_1 = require("./select");
var snap_1 = require("./snap");
var translate_1 = require("./translate");
var interaction = {
    DoubleClickZoom: double_click_zoom_1.DoubleClickZoom,
    DragAndDrop: drag_and_drop_1.DragAndDrop,
    DragBox: drag_box_1.DragBox,
    DragPan: drag_pan_1.DragPan,
    DragRotate: drag_rotate_1.DragRotate,
    DragRotateAndZoom: drag_rotate_and_zoom_1.DragRotateAndZoom,
    DragZoom: drag_zoom_1.DragZoom,
    Draw: draw_1.Draw,
    Extent: extent_1.Extent,
    KeyboardPan: keyboard_pan_1.KeyboardPan,
    KeyboardZoom: keyboard_zoom_1.KeyboardZoom,
    Modify: modify_1.Modify,
    MouseWheelZoom: mouse_wheel_zoom_1.MouseWheelZoom,
    PinchRotate: pinch_rotate_1.PinchRotate,
    PinchZoom: pinch_zoom_1.PinchZoom,
    Pointer: pointer_1.Pointer,
    Select: select_1.Select,
    Snap: snap_1.Snap,
    Translate: translate_1.Translate
};
exports.interaction = interaction;
//# sourceMappingURL=index.js.map