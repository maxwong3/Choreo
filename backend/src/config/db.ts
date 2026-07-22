import { Pool } from 'pg';
import dotenv from 'dotenv';
import cron from 'node-cron'; // Optional for scheduled health checks or maintenance checks

dotenv.config();

// PostgreSQL connection pool configuration using environment variables
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
})

// Asynchronously verifies the PostgreSQL connection.
// Ensures any issues are logged immediately at application startup.
async function verifyConnection(): Promise<void> {
    try {
        // Attempt to acquire a client from the pool
        const client = await pool.connect();
        console.log('✅ Connected to PostgreSQL database.');
        (await client).release(); // Release the client back into the pool
    } catch (error) {
        console.error('❌ Error connecting to the database:', error);
    }
}

// Immediately verify connection upon loading the module.
verifyConnection();

// Export the pool to be used across the application.
export default pool;