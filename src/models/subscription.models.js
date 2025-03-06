import mongoose, {Schema } from 'express'

/*
subscriber Objectid users
  channel ObjectId users
  creatdAt Date
  updatedAt Date */

const subscriptionSchema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId, // one who is Subscribing
        ref:"User"
    },
    channel:{
        type: Schema.Types.ObjectId, // one to whom is subscribing
        ref:"User"
    }
},{ timestamps:true})

export const Subscription = mongoose.model("Subscription",subscriptionSchema)