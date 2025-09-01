"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 7788;
app.get("/", function (req, res) {
    res.send("Olá!!");
});
app.listen(PORT, function () {
    console.log("App running on port ".concat(PORT, "."));
});
