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

import mongoose, { schema } from 'express'

const userSchema = new Schema({

})

export const user = mongoose.model("User", userSchema)



