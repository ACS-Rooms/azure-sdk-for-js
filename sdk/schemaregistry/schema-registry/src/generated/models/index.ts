/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Array received from the registry containing the list of schema groups. */
export interface SchemaGroups {
  /** Array of schema groups. */
  schemaGroups?: string[];
}

/** An error response returned from Azure Schema Registry service. */
export interface ErrorModel {
  /** Error response returned from Azure Schema Registry service. */
  error: ErrorDetail;
}

/** Error response returned from Azure Schema Registry service. */
export interface ErrorDetail {
  /** Type of error. */
  code: string;
  /** Brief description of error. */
  message: string;
  /** Error message details to help user understand/debug failure. */
  details?: ErrorDetail[];
}

/** Array received from the registry containing the list of versions for specific schema. */
export interface SchemaVersions {
  /** Array of schema groups. */
  schemaVersions?: number[];
}

/** Object received from the registry containing schema identifiers. */
export interface SchemaId {
  /** Schema ID that uniquely identifies a schema in the registry namespace. */
  id?: string;
}

/** Defines headers for SchemaGroups_list operation. */
export interface SchemaGroupsListExceptionHeaders {
  /** Error code for specific error that occurred. */
  xMsErrorCode?: string;
}

/** Defines headers for Schema_getById operation. */
export interface SchemaGetByIdHeaders {
  /** URL location of schema, identified by schema group, schema name, and version. */
  location?: string;
  /** The content type for given schema. Each schema type has an associated content-type. */
  contentType?: string;
  /** References specific schema in registry namespace. */
  schemaId?: string;
  /** URL location of schema, identified by schema ID. */
  schemaIdLocation?: string;
  /** References schema group. */
  schemaGroupName?: string;
  /** References schema name. */
  schemaName?: string;
  /** Version of the returned schema. */
  schemaVersion?: number;
}

/** Defines headers for Schema_getById operation. */
export interface SchemaGetByIdExceptionHeaders {
  /** Error code for specific error that occurred. */
  xMsErrorCode?: string;
}

/** Defines headers for Schema_getVersions operation. */
export interface SchemaGetVersionsExceptionHeaders {
  /** Error code for specific error that occurred. */
  xMsErrorCode?: string;
}

/** Defines headers for Schema_getSchemaVersion operation. */
export interface SchemaGetSchemaVersionHeaders {
  /** URL location of schema, identified by schema group, schema name, and version. */
  location?: string;
  /** The content type for given schema. Each schema type has an associated content-type. */
  contentType?: string;
  /** References specific schema in registry namespace. */
  schemaId?: string;
  /** URL location of schema, identified by schema ID. */
  schemaIdLocation?: string;
  /** References schema group. */
  schemaGroupName?: string;
  /** References schema name. */
  schemaName?: string;
  /** Version of the returned schema. */
  schemaVersion?: number;
}

/** Defines headers for Schema_getSchemaVersion operation. */
export interface SchemaGetSchemaVersionExceptionHeaders {
  /** Error code for specific error that occurred. */
  xMsErrorCode?: string;
}

/** Defines headers for Schema_queryIdByContent operation. */
export interface SchemaQueryIdByContentHeaders {
  /** URL location of schema, identified by schema group, schema name, and version. */
  location?: string;
  /** References specific schema in registry namespace. */
  schemaId?: string;
  /** URL location of schema, identified by schema ID. */
  schemaIdLocation?: string;
  /** References schema group. */
  schemaGroupName?: string;
  /** References schema name. */
  schemaName?: string;
  /** Version of the returned schema. */
  schemaVersion?: number;
}

/** Defines headers for Schema_queryIdByContent operation. */
export interface SchemaQueryIdByContentExceptionHeaders {
  /** Error code for specific error that occurred. */
  xMsErrorCode?: string;
}

/** Defines headers for Schema_register operation. */
export interface SchemaRegisterHeaders {
  /** URL location of schema, identified by schema group, schema name, and version. */
  location?: string;
  /** References specific schema in registry namespace. */
  schemaId?: string;
  /** URL location of schema, identified by schema ID. */
  schemaIdLocation?: string;
  /** References schema group. */
  schemaGroupName?: string;
  /** References schema name. */
  schemaName?: string;
  /** Version of the returned schema. */
  schemaVersion?: number;
}

/** Defines headers for Schema_register operation. */
export interface SchemaRegisterExceptionHeaders {
  /** Error code for specific error that occurred. */
  xMsErrorCode?: string;
}

/** Optional parameters. */
export interface SchemaGroupsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type SchemaGroupsListResponse = SchemaGroups;

/** Optional parameters. */
export interface SchemaGetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getById operation. */
export type SchemaGetByIdResponse = SchemaGetByIdHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface SchemaGetVersionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getVersions operation. */
export type SchemaGetVersionsResponse = SchemaVersions;

/** Optional parameters. */
export interface SchemaGetSchemaVersionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSchemaVersion operation. */
export type SchemaGetSchemaVersionResponse = SchemaGetSchemaVersionHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface SchemaQueryIdByContentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryIdByContent operation. */
export type SchemaQueryIdByContentResponse = SchemaQueryIdByContentHeaders;

/** Optional parameters. */
export interface SchemaRegisterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the register operation. */
export type SchemaRegisterResponse = SchemaRegisterHeaders;

/** Optional parameters. */
export interface GeneratedSchemaRegistryClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
