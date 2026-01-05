import "dotenv/config"; // <-- load .env first
import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!, // now DATABASE_URL is visible
  },
});
