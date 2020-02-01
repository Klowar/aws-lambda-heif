import { Router } from 'express';
import passport from 'passport';
import GAuth from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../../config/environment';
import { User, UserType } from '../../models/User';

const router = Router();
const GoogleStrategy = GAuth.Strategy;

export const gLStrategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "v1/user/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOne({ googleId: BigInt(profile.id) })
            .then(async (user) => {
                if (!user) {
                    user = await User.create({
                        googleId: BigInt(profile.id),
                        accessToken: accessToken,
                        profile: {
                            emails: profile.emails,
                            name: profile.displayName
                        }
                    });
                }
                return cb(null, user)
            })
            .catch(async (e) => {
                console.error(e);
                throw e;
            });
    }
);

router.get('/login', passport.authenticate("google", { session: false, scope: ['profile'] }));

router.get('/callback', passport.authenticate("google", { failureRedirect: 'v1/user/login' }), (req, res) => {
    const user = req.user as UserType;
    res.cookie("token", user.googleId);
    res.redirect("http://localhost:4000/");
    // res.json(user);
    // res.send("Hello bitches");
})

export default router;
