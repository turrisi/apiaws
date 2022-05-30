"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _files = require("../../controllers/files.js");

var router = (0, _express.Router)();
router.get("/", _files.getAllFiles);
var _default = router;
exports["default"] = _default;