import { DatasetEntity } from './entity/DatasetEntity';
import { MetadataEntity } from './entity/MetadataEntity';
import { OrganizationEntity } from './entity/OrganizationEntity';
export type * from './DataGovAuTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { DataGovAuEntityBase } from './DataGovAuEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class DataGovAuSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Dataset(entopts?: Record<string, any>): DatasetEntity;
    Metadata(entopts?: Record<string, any>): MetadataEntity;
    Organization(entopts?: Record<string, any>): OrganizationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): DataGovAuSDK;
    tester(testopts?: any, sdkopts?: any): DataGovAuSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof DataGovAuSDK;
export { stdutil, config, BaseFeature, DataGovAuEntityBase, DataGovAuSDK, SDK, };
