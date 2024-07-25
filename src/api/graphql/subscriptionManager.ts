import { PubSub } from 'graphql-subscriptions';

export class SubscriptionManager {
    private pubsub: PubSub;

    constructor() {
        this.pubsub = new PubSub();
    }

    async publish(topic: string, payload: any) {
        this.pubsub.publish(topic, payload);
    }

    getAsyncIterator(topic: string) {
        return this.pubsub.asyncIterator([topic]);
    }
}