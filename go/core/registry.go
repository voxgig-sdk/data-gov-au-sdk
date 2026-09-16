package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewDatasetEntityFunc func(client *DataGovAuSDK, entopts map[string]any) DataGovAuEntity

var NewMetadataEntityFunc func(client *DataGovAuSDK, entopts map[string]any) DataGovAuEntity

var NewOrganizationEntityFunc func(client *DataGovAuSDK, entopts map[string]any) DataGovAuEntity

