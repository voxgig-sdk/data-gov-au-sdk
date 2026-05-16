-- DataGovAu SDK error

local DataGovAuError = {}
DataGovAuError.__index = DataGovAuError


function DataGovAuError.new(code, msg, ctx)
  local self = setmetatable({}, DataGovAuError)
  self.is_sdk_error = true
  self.sdk = "DataGovAu"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DataGovAuError:error()
  return self.msg
end


function DataGovAuError:__tostring()
  return self.msg
end


return DataGovAuError
