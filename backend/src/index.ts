import app from "./app";
import { Options } from "../node_modules/graphql-yoga";

const PORT: number | string = process.env.port || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};
const handleAppStart = () => {
  console.log(`Listening on port ${PORT}`);
};

app.start(appOptions, handleAppStart);