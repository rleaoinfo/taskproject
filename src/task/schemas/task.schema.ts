import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema, PromiseProvider } from 'mongoose';
import { StatusHistory } from '../types/status.history';

export type TaskDocument = Document;

export class Task {
    taskId: string;
    userId: string;
    description: string;
    enable: boolean;
    when: Date;
    status: string;
    status_history: [StatusHistory];
    created_at?: Date;
    updated_at?: Date;
    created_at_mongo?: Date;
}

const statushistoryschema = new Schema({
    status: String,
    when: Date
}) 

export const TaskSchema = new Schema({
    taskId: String,
    userId: String,
    description: String,
    enable: Boolean,
    when: Date,
    status: String,
    status_history: [statushistoryschema],
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
}, );
