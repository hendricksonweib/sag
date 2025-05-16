import { PrismaClient } from '../../src/generated/prisma';
declare let prisma: PrismaClient;
declare function testConnection(): Promise<boolean>;
declare function closeConnection(): Promise<void>;
export { prisma, testConnection, closeConnection };
