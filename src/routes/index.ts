import { Router } from 'express';

import walls from './api/wallpaper';

const router = Router();

router.use(`/v${1}/wallpapers/`, walls);

export default router;
