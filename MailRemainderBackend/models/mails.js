const mongoose = require('mongoose')


const MailsSchema = new mongoose.Schema({
    title : { type: String, required: true },
    from : { type: String, required: true },
    to :{ type: String, required: true },
    subject : { type: String, required: true },
    message : { type: String, required: true },
    time : { type: Date, required: true },
    isSent : { type: Boolean, required: true }
})
 
module.exports = mongoose.model('Mails', MailsSchema)