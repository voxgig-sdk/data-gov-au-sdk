# DataGovAu SDK feature factory

from datagovau_sdk.feature.base_feature import DataGovAuBaseFeature
from datagovau_sdk.feature.ratelimit_feature import DataGovAuRatelimitFeature
from datagovau_sdk.feature.retry_feature import DataGovAuRetryFeature
from datagovau_sdk.feature.test_feature import DataGovAuTestFeature
from datagovau_sdk.feature.timeout_feature import DataGovAuTimeoutFeature


_FEATURES = {
    "base": lambda: DataGovAuBaseFeature(),
    "ratelimit": lambda: DataGovAuRatelimitFeature(),
    "retry": lambda: DataGovAuRetryFeature(),
    "test": lambda: DataGovAuTestFeature(),
    "timeout": lambda: DataGovAuTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
