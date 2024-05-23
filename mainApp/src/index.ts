import express, { Request, Response } from 'express';
const cors = require('cors')
import { Helper } from './helpers';

const app = express();

const helper = new Helper();

const PORT = process.env.PORT || 3000;
const MICROSERVICE_URL = 'http://localhost:3001/fetch-data';

app.use(cors());

app.get('/', async(req: Request, res: Response)=>{
    try {
        res.send('aliv!')
    } catch (error) {
        res.status(500).send("some srv error");
    }
});

app.get('/all_patients_data', async(req: Request, res: Response)=>{
    try {
        const data = [
            {
                "client_id": "67dcf9bc",
                "date_testing": "2018-08-16",
                "date_birthdate": "1950-01-01",
                "gender": 1,
                "ethnicity": 5,
                "creatine": 1.04,
                "chloride": 83.74,
                "fasting_glucose": 137.52,
                "potassium": 7.18,
                "sodium": 96.85,
                "total_calcium": 9.33,
                "total_protein": 14.09,
                "creatine_unit": "mgdl",
                "chloride_unit": "mmoll",
                "fasting_glucose_unit": "mgdl",
                "potassium_unit": "mmoll",
                "sodium_unit": "ul",
                "total_calcium_unit": "mgdl",
                "total_protein_unit": "gdl"
            },
            {
                "client_id": "67dcf9bc",
                "date_testing": "2020-07-23",
                "date_birthdate": "1950-01-01",
                "gender": 1,
                "ethnicity": 5,
                "creatine": 0.5,
                "chloride": 110.58,
                "fasting_glucose": 122.01,
                "potassium": 4.68,
                "sodium": 134.36,
                "total_calcium": 8.95,
                "total_protein": 14.84,
                "creatine_unit": "mgdl",
                "chloride_unit": "mmoll",
                "fasting_glucose_unit": "mgdl",
                "potassium_unit": "mmoll",
                "sodium_unit": "ul",
                "total_calcium_unit": "mgdl",
                "total_protein_unit": "gdl"
            }
        ];
        res.send(data);
    } catch (error) {
        res.status(500).send("some srv error");
    }
});

app.listen(PORT, ()=>{
    console.log(`Main app is running on port ${PORT}`);    
})


