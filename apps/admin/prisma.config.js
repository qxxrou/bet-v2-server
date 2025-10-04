"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
exports.default = {
    schema: (0, path_1.join)('./models'),
    migrations: {
        path: './migrations',
    },
};
