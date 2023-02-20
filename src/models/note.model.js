import { string } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        color: {
            type: String
        },
    },{
        timestaps: true
    }
);

export default model('note', noteSchema);
