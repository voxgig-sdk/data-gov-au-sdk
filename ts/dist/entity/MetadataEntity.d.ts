import { DataGovAuEntityBase } from '../DataGovAuEntityBase';
import type { DataGovAuSDK } from '../DataGovAuSDK';
import type { Control } from '../types';
import type { Metadata, MetadataListMatch } from '../DataGovAuTypes';
declare class MetadataEntity extends DataGovAuEntityBase<Metadata> {
    constructor(client: DataGovAuSDK, entopts: any);
    make(this: MetadataEntity): MetadataEntity;
    list(this: any, reqmatch?: MetadataListMatch, ctrl?: Control): Promise<MetadataEntity[]>;
}
export { MetadataEntity };
