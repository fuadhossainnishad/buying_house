import mongoose, { Document, Schema } from "mongoose";

interface Signup extends Document {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const signupSchema: Schema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  phone:{
    type:String,
    required:true,
    unique: true,
  },
  password:{
    type:String,
    required:true,
  },
  confirmPassword:{
    type:String,
    required:true,
  },

});

export const signupModel = mongoose.model<Signup>('Signup',signupSchema);
