import mongoose,{ Schema } from 'express'

/*
comment Objectid comments
  video ObjectId videos
  likedBy ObjectId users
  tweet ObjectId tweets
  createdAt Date
  updatedAt Date */

const likeSchema = new Schema({
    comment:{
        type: Schema.Types.ObjectId,
        ref:"Comment"
    },
    video:{
        type: Schema.Types.ObjectId,
        ref:"Video"
    },
    likedBy:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    tweet:{
        type: Schema.Types.ObjectId,
        ref:"Tweet"
    }
},{timestamps: true})

export const Like = mongoose.model("Like", likeSchema)