"use client";

import { Provider } from "react-redux";
import { Provider as URQLProvider } from "urql";
import { createUrqlClient } from "../graphql/useClient";
import { store } from "./storeConfig";

export function Providers({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const client = createUrqlClient();
  return (
    <URQLProvider value={client}>
      <Provider store={store}>{children}</Provider>
    </URQLProvider>
  );
}
