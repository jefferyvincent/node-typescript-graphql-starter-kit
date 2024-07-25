import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import app from '../../app';
import { getEnv } from '../../utils';
import { setupSubscriptions } from './setupSubscriptions';
const port = getEnv('PORT', '4000');

export async function startApolloServer() {
    const apolloServer = new ApolloServer({
        schema
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    // Use the new setupSubscriptions function
    const { httpServer, subscriptionPath }  = setupSubscriptions(app, apolloServer, schema);
    httpServer.listen({ port }, () => {
        console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
        console.log(`🔛 Subscriptions ready at ws://localhost:${port}${subscriptionPath}`);
    });

    return httpServer;
}
