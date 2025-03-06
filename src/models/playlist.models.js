import mongoose,{Schema} from 'express'
/*
  name string
  description string
  videos ObjectId[] videos
  owner ObjectId users
  createdAt Date
  updatedAt Date
  */
const playlistSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    videos:{
        type: Schema.Types.ObjectId,
        ref:"Video"
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
},{ timestamps: true})

export const Playlist = mongoose.model("Playlist",playlistSchema)