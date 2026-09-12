import { Context } from './Context';
declare class DataGovAuError extends Error {
    isDataGovAuError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { DataGovAuError };
