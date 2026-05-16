package core

type DataGovAuError struct {
	IsDataGovAuError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDataGovAuError(code string, msg string, ctx *Context) *DataGovAuError {
	return &DataGovAuError{
		IsDataGovAuError: true,
		Sdk:              "DataGovAu",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DataGovAuError) Error() string {
	return e.Msg
}
