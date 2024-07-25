import 'dotenv/config'
import { createServer } from 'http'
import app from '../app'
import { initDatabase } from '../models'
import { startApolloServer } from './graphql/setupApolloServer'

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 7010

const server = createServer(app)

async function initialize() {
    try {
        await initDatabase();
        await startApolloServer();
    } catch (error) {
        console.error('Failed to start the server:', error);
        process.exit(1); // Exit with a failure code
    }
}

initialize();