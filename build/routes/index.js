"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _index = _interopRequireDefault(require("./users/index.js"));

var _index2 = _interopRequireDefault(require("./files/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use("/users", _index["default"]);
router.use("/files", _index2["default"]);
var _default = router;
exports["default"] = _default;