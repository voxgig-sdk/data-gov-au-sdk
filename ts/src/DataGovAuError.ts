
import { Context } from './Context'


class DataGovAuError extends Error {

  isDataGovAuError = true

  sdk = 'DataGovAu'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DataGovAuError
}

