/*
  id string pk
  username string
  email string
  password string
  fullname string
  avatar string
  coverImage string
  watchHistory ObjectId[] videos
  refreshToken string
  createdAt Date
  updatedAt Date
*/

import mongoose, { Schema } from 'express'

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String,
        reqired: true,
    },
    coverImage:{
        type: String,
        reqired: true, 
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type: String,
        required:[true, "Password is required"]
    },
    refreshToken:{
        type: String
    }
},
{
    timestamps:true
}
)

export const User = mongoose.model("User", userSchema)



