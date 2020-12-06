'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Service = new Schema({
    name: {type: String, required:true, trim: true},
    url: {type: String, required: true, trim: true},
    method: {type: String, required: true, trim: true},
    endpoints: [new mongoose.Schema({
        method: {type: String, required: true, default: 'GET', trim:true},
        url: {type: String, required: true, trim: true}
    })],
    registerDate: {type: Date, required: true, default: new Date()}
});

Service.index({ url: 1});

module.exports = mongoose.model('Service', Service);
