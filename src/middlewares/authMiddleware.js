const { AuthSchema } = require("../validations/index")
const helperFunctions=require('../utils/utils')
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const messages=require('../utils/messages')

const authMiddleware=(req,res,next)=>{
    try {
        const ajv = new Ajv({ useDefaults: true, allErrors: true });
        addFormats(ajv);
        const validate = ajv.compile(AuthSchema);
        const valid = validate(req.body);
        if(!valid){
            return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
        }
        next()
    } catch (error) {
        throw error
    }
}

const signInMiddleware=(req,res,next)=>{
    try {
        const ajv = new Ajv({ useDefaults: true, allErrors: true });
        addFormats(ajv);
        const validate = ajv.compile(AuthSchema);
        const valid = validate(req.body);
        if(!valid){
            return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
        }
        next()
    } catch (error) {
        throw error
    }
}
module.exports={
    authMiddleware,
    signInMiddleware
}