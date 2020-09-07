import * as Koa from 'koa';
import * as cron  from 'node-cron';
import updateJsonData from './updateJsonData';

const app = new Koa();

app.use(ctx => {
  ctx.body = 'koa';
});


cron.schedule('0 0 9 * * *', () =>  {
  updateJsonData();
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Press CTRL-C to stop \n');
});


