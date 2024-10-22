const mongoose = require('mongoose')

const SiteSettingSchema = new mongoose.Schema(
    {
        siteName: {type: String},
        siteLogo: {type: String},
        description: {type: String},
        phoneNo: {type: String},
        email: {type: String},
        address: {type: String},
        country: {type: String},
        currency: {type: String},
        currencySymbol: {type: String},
        countryCode: {type: String},

    }, {timestamps: true});

module.exports = mongoose.model('SiteSetting', SiteSettingSchema);
