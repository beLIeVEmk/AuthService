const jwt=require('jsonwebtoken')

class TokenService{
    
    createToken(userObj,secretKey,expiry){
        try {
            const token=jwt.sign(userObj.toJSON(),secretKey,{expiresIn:expiry})
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    verifyToken(token,secretKey){
        try {
            const payload=jwt.verify(token,secretKey);
            return payload;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports=TokenService