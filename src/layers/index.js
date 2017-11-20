Object.defineProperty(exports, "__esModule", { value: true });
var tile_1 = require("./tile");
var vector_1 = require("./vector");
var layers_1 = require("./layers");
exports.Layers = layers_1.Layers;
var heatmap_1 = require("./heatmap");
exports.Heatmap = heatmap_1.Heatmap;
var image_1 = require("./image");
exports.Image = image_1.Image;
var vector_tile_1 = require("./vector-tile");
exports.VectorTile = vector_tile_1.VectorTile;
var layer = {
    Tile: tile_1.Tile,
    Vector: vector_1.Vector,
    Heatmap: heatmap_1.Heatmap,
    Image: image_1.Image,
    VectorTile: vector_tile_1.VectorTile,
};
exports.layer = layer;
//# sourceMappingURL=index.js.map