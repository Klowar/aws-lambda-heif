import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface UserInterface {
    googleId: String,
    accessToken: String,
    images: [String],
    createBarier: Date,
    profile: {
        emails: [String],
        name: String
    }
}

const UserSchema = new Schema({
    googleId: String,
    accessToken: String,
    images: [String],
    createBarier: Date,
    profile: {
        emails: [String],
        name: String
    }
});

export const User = mongoose.model('User', UserSchema);
export type UserType = mongoose.Document & UserInterface;

