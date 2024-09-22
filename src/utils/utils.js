const bcrypt=require('bcrypt')
const compareTime=(time1,time2)=>{
    try{
        if(new Date(time1)<=new Date(time2)){
            return true;
        }
        return false;
    }catch(error){
        throw error;
    }
}

const createResBody=(statusCode,msg,data={},res)=>{
    res.status(statusCode).json({
        statusCode,
        message:msg,
        data:data
    })
}

const comparePassword=(userPwd,encryptPwd)=>{
    try{
        return bcrypt.compareSync(userPwd,encryptPwd);
    }catch(error){
        console.log(error);
        throw error
    }
}
module.exports={
    compareTime,
    createResBody,
    comparePassword
}