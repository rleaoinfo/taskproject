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
    status_history: StatusHistory;
    created_at?: Date;
    updated_at?: Date;
    created_at_mongo?: Date;
}



export const TaskSchema = new Schema({
    taskId: String,
    userId: String,
    description: String,
    enable: Boolean,
    when: Date,
    status_history: new Schema({
        status: String,
        when: Date
    }),
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: { createdAt: 'created_at_mongo' } });
