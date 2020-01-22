import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface UserInterface {
    googleId: BigInteger,
    googleToken: String,
    images: [String],
    profile: {
        email: String
    }
}

const UserSchema = new Schema({
    googleToken: String,
    images: [String],
    profile: {
        email: String
    }
});

export const User = mongoose.model('User', UserSchema);
export type UserType = mongoose.Document & UserInterface;

