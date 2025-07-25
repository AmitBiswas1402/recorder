import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
} from "@xata.io/client";

export type DatabaseSchema = {};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Amit-Biswas-s-workspace-butaqg.us-east-1.xata.sh/db/recorder",
    apiKey: process.env.XATA_API_KEY,
    branch: 'main'
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options });
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
