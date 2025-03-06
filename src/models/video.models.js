/*
  owner string
  duration number
  videoFile string
  thumbnail string
  title string
  description string
  views number
  isPublished boolean
  createdAt Date
  updatedAt Date
*/

import mongoose, { Schema } from 'express'

const videoSchema = new Schema({
    videoFile:{
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    duration :{
        type:Number,
        required:true
    },
    isPublished:{
        type: Boolean,
        default: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"    
    }
},
{ timestamps: true })

export const Video = mongoose.model("Video", videoSchema)