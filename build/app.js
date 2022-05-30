"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const routes = require("./routes")
var server = (0, _express["default"])();
server.use(_express["default"].json());
server.use((0, _morgan["default"])("dev")); // server.get("/", (req,res)=>{
//     console.log("así funciona")
// })

server.use("/api", _index["default"]);
var _default = server;
exports["default"] = _default;