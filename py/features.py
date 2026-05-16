# DataGovAu SDK feature factory

from feature.base_feature import DataGovAuBaseFeature
from feature.test_feature import DataGovAuTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DataGovAuBaseFeature(),
        "test": lambda: DataGovAuTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
