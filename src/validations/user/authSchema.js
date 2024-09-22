

const AuthSchema = {
    type:"object",
    properties:{
        email:{type:"string",minLength:1},
        password:{type:"string",minLength:1},
    },
    required:["email","password"],
    additionalProperties: false
}
module.exports = AuthSchema;