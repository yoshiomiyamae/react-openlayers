Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Util;
(function (Util) {
    Util.getOptions = function (props) {
        var options = {};
        for (var key in props) {
            if (key !== 'children'
                && typeof props[key] !== 'undefined'
                && !key.match(/^on[A-Z]/)) {
                options[key] = props[key];
            }
        }
        return options;
    };
    Util.getPropsKey = function (eventName) {
        return 'on' + eventName
            .replace(/(\:[a-z])/g, function ($1) { return $1.toUpperCase(); })
            .replace(/^[a-z]/, function ($1) { return $1.toUpperCase(); })
            .replace(':', '');
    };
    Util.getEvents = function (events, props) {
        if (events === void 0) { events = {}; }
        if (props === void 0) { props = {}; }
        var prop2EventMap = {};
        for (var key in events) {
            prop2EventMap[Util.getPropsKey(key)] = key;
        }
        var ret = {};
        for (var propName in props) {
            var eventName = prop2EventMap[propName];
            var prop = props[propName];
            if (typeof prop !== 'undefined' && propName.match(/^on[A-Z]/) && eventName) {
                ret[eventName] = prop;
            }
        }
        return ret;
    };
    Util.typeOf = function (obj) {
        return ({}).toString.call(obj)
            .match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    };
    Util.cloneObject = function (obj) {
        var type = Util.typeOf(obj);
        if (type == 'object' || type == 'array') {
            if (obj.clone) {
                return obj.clone();
            }
            var clone = type == 'array' ? [] : {};
            for (var key in obj) {
                clone[key] = Util.cloneObject(obj[key]);
            }
            return clone;
        }
        return obj;
    };
    Util.findChild = function (children, childType) {
        var found;
        var childrenArr = React.Children.toArray(children);
        for (var i = 0; i < childrenArr.length; i++) {
            var child = childrenArr[i];
            if (child.type.name == childType) {
                found = child;
                break;
            }
        }
        return found;
    };
})(Util = exports.Util || (exports.Util = {}));
exports.default = Util;
//# sourceMappingURL=util.js.map