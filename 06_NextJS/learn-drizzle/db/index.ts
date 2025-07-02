// this is where connection takes place
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});
export const db = drizzle(pool); // this is like the prisma client object which contains all the methods
