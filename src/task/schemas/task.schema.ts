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
    created_at: string;
    updated_at: string;
    created_at_mongo: Date;
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
    created_at: String,
    updated_at: String,
}, { timestamps: { createdAt: 'created_at_mongo' } }
).index({ created_at_mongo: 1 }, { expire: '1h' });
