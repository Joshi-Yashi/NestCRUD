"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const crypto_1 = require("crypto");
class Utils {
    static genId() {
        return (0, crypto_1.randomUUID)();
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map