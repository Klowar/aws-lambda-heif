import { Router } from 'express';

import walls from './api/wallpaper';
import auth from './auth/user';

const router = Router();

router.use(`/v${1}/wallpapers/`, walls);
router.use(`/v${1}/user/`, auth);

export default router;
