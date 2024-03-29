import { Schema, model } from 'mongoose';

import  {handleMongooseError}  from '../helpers/handleMongooseError.js';

export const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true });

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);
export default Contact;
