import "dotenv/config";           // load environment variables
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env");
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // explicitly pass the DB URL
    },
  },
});

export default prisma;
