import { DataGovAuEntityBase } from '../DataGovAuEntityBase';
import type { DataGovAuSDK } from '../DataGovAuSDK';
import type { Control } from '../types';
import type { Organization, OrganizationLoadMatch, OrganizationListMatch } from '../DataGovAuTypes';
declare class OrganizationEntity extends DataGovAuEntityBase<Organization> {
    constructor(client: DataGovAuSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
    load(this: any, reqmatch?: OrganizationLoadMatch, ctrl?: Control): Promise<OrganizationEntity>;
    list(this: any, reqmatch?: OrganizationListMatch, ctrl?: Control): Promise<OrganizationEntity[]>;
}
export { OrganizationEntity };
