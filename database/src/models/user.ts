import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
}

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

export const User = mongoose.model<IUser>("User", UserSchema);
