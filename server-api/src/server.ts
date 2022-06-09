
import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(
    express.urlencoded({
        limit: '200mb',
        extended: true,
        parameterLimit: 50000,
    }),
);
app.use(express.text({ limit: '200mb' }));
app.use(cors())
app.use(express.json());
app.use(routes);


 
app.listen(process.env.PORT || 3333, ()=> {

    console.log('Hello Peach!')
});

