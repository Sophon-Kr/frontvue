


'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    userid: {
        type: String,
        Required: 'Please enter'
    },
    firstname: {
        type: String,
        Required: 'Please enter'
    },
    lastname: {
        type: String,
        Required: 'Please enter'
    },
    middlename: {
        type: String,
        Required: 'Please enter' //จะ return error ถ้ามะมีค่านี้
    },
    gender: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    mobile: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    imageurl: {
        type: String,
        Required: 'Please enter'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    
})

module.exports = mongoose.model('Contacts', UserSchema)