# DataGovAu SDK utility: make_context

from core.context import DataGovAuContext


def make_context_util(ctxmap, basectx):
    return DataGovAuContext(ctxmap, basectx)
