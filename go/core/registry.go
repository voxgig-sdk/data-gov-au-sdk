package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDatasetEntityFunc func(client *DataGovAuSDK, entopts map[string]any) DataGovAuEntity

var NewMetadataEntityFunc func(client *DataGovAuSDK, entopts map[string]any) DataGovAuEntity

var NewOrganizationEntityFunc func(client *DataGovAuSDK, entopts map[string]any) DataGovAuEntity

