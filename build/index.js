"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].set("port", 3000);

_app["default"].listen(_app["default"].get("port"), function () {
  console.log("server running on port ".concat(_app["default"].get("port")));
});