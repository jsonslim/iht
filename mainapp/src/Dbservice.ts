import { Prisma, PrismaClient } from '@prisma/client';
import { Dataservice } from './Dataservice';

const prisma = new PrismaClient();

export class Dbservice {

	static async getUniqueClientIdsCount() {
		try {
			const result = await prisma.$queryRaw`SELECT COUNT(DISTINCT client_id) as count FROM public."Patient"`;
			const uniqueClientIdsCount = result[0].count;

			console.log(`Number of unique client_ids: ${uniqueClientIdsCount}`);
			return uniqueClientIdsCount;
		} catch (error) {
			console.error('Error fetching unique client_ids count:', error);
		} finally {
			await prisma.$disconnect();
		}
	}

	static async getAllPatients() {
		return await prisma.patient.findMany({ orderBy: {
			date_testing: 'asc', // or 'desc'
		}});
	}

	// stores data for number of patients
	static async fillDb(numOfPatients) {
		let buf = [];
		for (let i = 0; i < numOfPatients; i++) {
			const patientData = await Dataservice.getApiData();
			const transformedData = Dataservice.transformDates(patientData);
			buf = [...buf, ...transformedData];
		}
		return await prisma.patient.createMany({ data: buf });
	}

	// stores data for one user
	static async storePatientData() {
		const patientData = await Dataservice.getApiData();
		const transformedData = Dataservice.transformDates(patientData);
		return await prisma.patient.createMany({ data: transformedData });
	}

}