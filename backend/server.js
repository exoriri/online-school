import Koa from 'koa';
import cors from '@koa/cors';

import { configs } from './configs.js';

const app = new Koa();

const APP_PORT = process.env.PORT || configs.APP_PORT;

app.use(cors());

app.listen(APP_PORT, () => {
    console.log(`server is runnig on port ${APP_PORT}`)
});