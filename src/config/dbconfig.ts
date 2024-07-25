import { config } from 'dotenv'
config()

const db = {
    // MongoDB configuration
    development: {
        db:
            'mongodb+srv://',
        app: {
            name: 'test',
        },
    },
    production: {
        db: 'mongodb+srv://',
        app: {
            name: 'test',
        },
    },
}

export default db
