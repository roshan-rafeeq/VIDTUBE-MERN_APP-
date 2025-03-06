import mongoose,{ Schema } from 'express'

/*
 owner ObjectId users
  content string
  createdAt Date
  updatedAt Date */

const tweetSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
        required: true
    }
},{ timestamps: true})

export const Tweet = mongoose.model("Tweet",tweetSchema)