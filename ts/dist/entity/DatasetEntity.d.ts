import { DataGovAuEntityBase } from '../DataGovAuEntityBase';
import type { DataGovAuSDK } from '../DataGovAuSDK';
import type { Control } from '../types';
import type { Dataset, DatasetLoadMatch } from '../DataGovAuTypes';
declare class DatasetEntity extends DataGovAuEntityBase<Dataset> {
    constructor(client: DataGovAuSDK, entopts: any);
    make(this: DatasetEntity): DatasetEntity;
    load(this: any, reqmatch?: DatasetLoadMatch, ctrl?: Control): Promise<DatasetEntity>;
}
export { DatasetEntity };
