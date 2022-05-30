"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../../controllers/users.js");

var router = (0, _express.Router)();
router.post("/signup", _users.userSignUp);
router.post("/signin");
var _default = router;
exports["default"] = _default;