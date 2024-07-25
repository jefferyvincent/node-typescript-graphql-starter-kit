import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe, GraphQLSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';

export function setupSubscriptions(app: Express, apolloServer: ApolloServer, schema: GraphQLSchema) {
    const httpServer = createServer(app);
    const subscriptionPath = apolloServer.graphqlPath;
    
    SubscriptionServer.create({
        schema,
        execute,
        subscribe,
    }, {
        server: httpServer,
        path: apolloServer.graphqlPath,
    });

    return { httpServer, subscriptionPath }
}