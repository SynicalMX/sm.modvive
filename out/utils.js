"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspace = void 0;
function getWorkspace() {
    let dir = __dirname;
    let workspace = dir.split("out");
    return workspace;
}
exports.getWorkspace = getWorkspace;
