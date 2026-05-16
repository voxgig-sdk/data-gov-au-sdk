package voxgigdatagovausdk

import (
	"github.com/voxgig-sdk/data-gov-au-sdk/core"
	"github.com/voxgig-sdk/data-gov-au-sdk/entity"
	"github.com/voxgig-sdk/data-gov-au-sdk/feature"
	_ "github.com/voxgig-sdk/data-gov-au-sdk/utility"
)

// Type aliases preserve external API.
type DataGovAuSDK = core.DataGovAuSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DataGovAuEntity = core.DataGovAuEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DataGovAuError = core.DataGovAuError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDatasetEntityFunc = func(client *core.DataGovAuSDK, entopts map[string]any) core.DataGovAuEntity {
		return entity.NewDatasetEntity(client, entopts)
	}
	core.NewMetadataEntityFunc = func(client *core.DataGovAuSDK, entopts map[string]any) core.DataGovAuEntity {
		return entity.NewMetadataEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.DataGovAuSDK, entopts map[string]any) core.DataGovAuEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDataGovAuSDK = core.NewDataGovAuSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
