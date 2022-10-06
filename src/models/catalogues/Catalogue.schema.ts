import mongoose from 'mongoose';

import {ICatalogue} from '../../interfaces/catalogue.interface';


const catalogueSchema : mongoose.Schema<ICatalogue> = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 40,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        minlenght: 12,
        maxlenght: 250
    },
    ibnNumber : {
        type: Number,
        required: true,
    },
    relaseDate : {
        type: Date,
        required: true,
    },
    author: {
        name:{type: String, required: [true, 'Un author doit avoir un nom']},
        lastName: {type: String, required: [true, 'Un author doit avoir un prénom']}
    },
});

export {catalogueSchema};