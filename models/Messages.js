import mongoose from 'mongoose'

/* UserSchema will correspond to a collection in your MongoDB database. */
const MessagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, "Please provide an email address"],
    },
    message: {
        type: String,
        required: [true, "Please type a message"],
    },
})

export default mongoose.models.Messages || mongoose.model('Messages', MessagesSchema)
