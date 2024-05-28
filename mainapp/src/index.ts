import { Prisma, PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import 'dotenv/config';
import { Dataservice } from './Dataservice.js'
import { Dbservice } from './Dbservice.js';
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();
let server = null;

function gracefulShutdown() {
  console.log('Received SIGTERM, shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcing shutdown');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

app.use(cors());

app.get('/all_patients_data', async (req: Request, res: Response) => {
  try {
    const userCount = await Dbservice.getUniqueClientIdsCount();
    if(userCount < 10){
      await Dbservice.fillDb(10);
      res.json(await Dbservice.getAllPatients());
    } else {
      res.json(await Dbservice.getAllPatients());
    }     
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await prisma.$disconnect();
  }
});


const PORT = process.env.PORT || 3000;
server = app.listen(PORT, () => {
  console.log(`Main app is running on port ${PORT}`);
})


