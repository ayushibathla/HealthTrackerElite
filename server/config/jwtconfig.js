const jwt = require('jsonwebtoken');
const key = process.env.KEY;

const verifytoken = (req,res,next) => {
  const token = req.header('Authorization');
  if(!token){
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try{
    
  }
  catch(error){

  }
};