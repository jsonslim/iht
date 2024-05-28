import axios from 'axios';
import 'dotenv/config';

export class Dataservice {
    static async getApiData() {
        const res = await axios.get(process.env.MICROSERVICE_URL);
        return res.data;        
    }

    static transformDates(data) {
        return data.map(item => ({
            ...item,
            date_testing: new Date(item.date_testing),
            date_birthdate: new Date(item.date_birthdate),
        }));
    }

}