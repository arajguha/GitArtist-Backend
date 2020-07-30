interface CodedRuntimeException {
    errorCode: string,
    errorReason: string
}

export const isCodedRuntimeException = function(err: any): err is CodedRuntimeException{
    return 'errorCode' in err && 'errorReason' in err
}

export default CodedRuntimeException