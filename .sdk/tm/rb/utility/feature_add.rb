# DataGovAu SDK utility: feature_add
module DataGovAuUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
