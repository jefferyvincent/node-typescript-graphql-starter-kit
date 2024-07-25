# node-typescript-graphql-starter-kit

A modern (2024) starter kit for building GraphQL APIs with Node.js, TypeScript, and Apollo Server. 

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Getting Started

### Configuration

Before starting the project, you need to configure the following files:

- src/config/dbconfig.ts: Add the MongoDB path and database name.
- .env: Change the test variables.

To use this repo:
`npm install`

This configuration comes with a bunch of built in scripts.
- Run the Server in dev mode `npm run dev`
- Create a graphql schema `npm run generate-schema`
- Build the project `npm run build`
- Start the project by running the following command: `npm start`
- Run tests: `npm test`
- Lint the code: `npm run eslint:lint`
- Generate the graphql schema `npm run generate-schema`

License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
jefferyvincent
