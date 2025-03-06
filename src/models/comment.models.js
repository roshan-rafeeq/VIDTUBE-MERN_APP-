import mongoose,{Schema} from 'express'

/*
owner ObjectId users
  video ObjectId videos
  content string
  createdAt Date
  updatedAt Date */
const commentSchema = new Schema({
    video:{
        type: Schema.Types.ObjectId,
        ref:"Video"
    },
    content:{
        type: String,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps:true})

export const Comment = mongoose.model("Comment",commentSchema )