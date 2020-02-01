import { UserType } from '../../models/User';

export function serializeUser(user: UserType, done: Function) {
    done(null, user);
}

export function deSerializeUser(user: UserType, done: Function) {
    done(null, user);
}
