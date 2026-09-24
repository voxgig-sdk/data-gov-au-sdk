"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGovAuError = void 0;
class DataGovAuError extends Error {
    isDataGovAuError = true;
    sdk = 'DataGovAu';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.DataGovAuError = DataGovAuError;
//# sourceMappingURL=DataGovAuError.js.map