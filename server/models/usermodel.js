const mongoose = require('mongoose');
const bycrypt = require('bycrypt');
const Fitness = require('./activitymodel');

const UserSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:[true,'First name is required'],
    minlength:[2,'first name must be at least 2 characters'],
  },
  lastName:{
    type:String,
    required:[true,'Last name is required'],
    minlength: [2, "last name must be at least 2 characters"],
  },
  email:{
    type:String,
    required : [true,"Email is required"],
    validate:{
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email",
    },
  },
  password:{
    type:String,
    required: [true, "Password is required"],
    minlength:[8,"Password must be 8 characters or longer"],
  },
  profilePic:{
    type : String,
  },
  // activities will store an array of MongoDB ObjectIds.
  activities : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'fitness'
  }],
  caloriesSum : {
    type:Number,
    default:0
  },
  likes : [{
    type : mongoose.Schema.Types.ObjectId,
    ref:'User',
  }]
},{timestamps:true});  //updates createdAt and updatedAt fields for documents

// This middleware runs before saving a user document to the database 
userSchema.pre("save",async function(next){
  try{
    if(!this.isModified("password")){
      return next();
    }
    // password is only hashed if it has been modified or is new .bcrypt.hash() is to convert a plain text password into a hashed password
    const hashedpass = await bycrypt.hash(this.password,10);
    this.pass = hashedpass;
    next();
  }
  catch(error){
    next(error);
  }
});

const User = mongoose.model('User',UserSchema);
module.exports = User;