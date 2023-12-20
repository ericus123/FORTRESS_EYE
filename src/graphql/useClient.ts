import { devtoolsExchange } from "@urql/devtools";
import { createClient as createWSClient } from "graphql-ws";
import WebSocket from "isomorphic-ws";
import {
  cacheExchange,
  createClient,
  fetchExchange,
  subscriptionExchange
} from "urql";
// import store from "../redux/store";

const wsClient = createWSClient({
  url: `${process.env.NEXT_PUBLIC_GRAPHQL_WSS_ENDPOINT}`,
  webSocketImpl: WebSocket
});

// const { auth } = store.getState();
// const { accessToken, refreshToken, tenantId } = auth;

export const clientOptions = {
  url: `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
  exchanges: [
    cacheExchange,
    devtoolsExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: (operation: any) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink)
        })
      })
    })
  ],
  fetchOptions: () => {
    return {
      headers: {},
      timeout: 300000
    };
  }
};

export const createUrqlClient = () => {
  const client = createClient(clientOptions);
  return client;
};
