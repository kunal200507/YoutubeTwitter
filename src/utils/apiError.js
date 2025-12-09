class apiError extends Error{
    constructor(
        statusCode,
        message="something got wrong",
        errors=[],
        stack=" ",
    ){
        super(message);
        this.statusCode=statusCode;
        this.message=message;
        this.errors=errors;
        this.success=false;

        stack?this.stack=stack:Error.captureStackTrace(this,this.constructor)
    }
};

export default apiError