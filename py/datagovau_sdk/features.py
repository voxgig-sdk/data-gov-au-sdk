# DataGovAu SDK feature factory

from datagovau_sdk.feature.base_feature import DataGovAuBaseFeature
from datagovau_sdk.feature.test_feature import DataGovAuTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DataGovAuBaseFeature(),
        "test": lambda: DataGovAuTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
