import express, { Request, Response } from 'express';
import axios from 'axios';
import 'dotenv/config';
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/fetch-data', async(req: Request, res: Response)=>{
    try {
        const response = await axios.get(process.env.API_URL);        
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, ()=>{
    console.log(`Microservice is running on port ${PORT}`);    
})


