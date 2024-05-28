import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class Dbservice {
    
    static async getUniqueClientIdsCount() {
        try {
          const result = await prisma.$queryRaw`SELECT COUNT(DISTINCT client_id) as count FROM Patient`;      
          const uniqueClientIdsCount = result[0].count;
      
          console.log(`Number of unique client_ids: ${uniqueClientIdsCount}`);
          return uniqueClientIdsCount;
        } catch (error) {
          console.error('Error fetching unique client_ids count:', error);
        } finally {
          await prisma.$disconnect();
        }
      }

      static async getAllPatients(){

      }

      static async fillDb(nOfPatients){
        let buf = get
      }
}