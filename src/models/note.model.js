import { boolean, string } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
    {
        userID:{
            type: String
        },
        noteID:{
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        color: {
            type: String
        },
        archive:{
            type: Boolean,
            default: false

        },
        trash:{
            type: Boolean,
            default: false
        }
    },{
        timestaps: true
    }
);

export default model('note', noteSchema);