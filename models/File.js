const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    asset_id : {type: String},
    public_id : {type: String, required: true},
    version : {type: String},
    version_id : {type: String},
    signature : {type: String},
    width : {type: Number},
    height : {type: Number},
    format : {type: String},
    resource_type : {type: String},
    created_at : {type: String},
    bytes : {type: Number},
    type : {type: String},
    etag : {type: String},
    placeholder : {type: String},
    url : {type: String},
    secure_url : {type: String},
    folder : {type: String},
    original_filename : {type: String},
}, {_id: false});

module.exports = {FileSchema};
