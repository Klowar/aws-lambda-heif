import { tedispool } from '../../app';

const api = require('../../../build/Release/native.node');

export function watchQueue(period: number) {
    const id = setInterval(async () => {
        const tedis = await tedispool.getTedis();
        const jobs = await tedis.hgetall("create");
        for (const job in jobs) {
            api.createHeic(jobs[job].split(" "));
        }
        await tedis.hdel("create", "", ...Object.keys(jobs));
        tedispool.putTedis(tedis);
    },
        period);
    return id;
}
