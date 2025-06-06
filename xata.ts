// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
} from "@xata.io/client";
import 'dotenv/config';

const tables = [] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type DatabaseSchema = {};

const DatabaseClient = buildClient();

const apiKey = process.env.XATA_API_KEY;
if (!apiKey) throw new Error("Missing XATA_API_KEY");

const defaultOptions = {
  apiKey,
  databaseURL:
    "https://Amit-Biswas-s-workspace-butaqg.ap-southeast-2.xata.sh/db/recorder",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
