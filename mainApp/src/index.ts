import express, { Request, Response } from 'express';
import axios from 'axios';
import 'dotenv/config';
const cors = require('cors')
import { Helper } from './helpers';

const app = express();

const helper = new Helper();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/all_patients_data', async(req: Request, res: Response)=>{
    try {       
        const response = await axios.get(process.env.MICROSERVICE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send("some srv error");
    }
});

app.listen(PORT, ()=>{
    console.log(`Main app is running on port ${PORT}`);    
})


