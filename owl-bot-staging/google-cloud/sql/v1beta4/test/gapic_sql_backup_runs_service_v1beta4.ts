// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as sqlbackuprunsserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta4.SqlBackupRunsServiceClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.sqlBackupRunsServiceStub, undefined);
            await client.initialize();
            assert(client.sqlBackupRunsServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.sqlBackupRunsServiceStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.sqlBackupRunsServiceStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
            const result = await client.getProjectId();
            assert.strictEqual(result, fakeProjectId);
            assert((client.auth.getProjectId as SinonStub).calledWithExactly());
        });

        it('has getProjectId method with callback', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(projectId);
                    }
                });
            });
            const result = await promise;
            assert.strictEqual(result, fakeProjectId);
        });
    });

    describe('delete', () => {
        it('invokes delete without error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['id']);
            request.id = defaultValue3;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}&id=${defaultValue3}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.Operation()
            );
            client.innerApiCalls.delete = stubSimpleCall(expectedResponse);
            const [response] = await client.delete(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.delete as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.delete as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes delete without error using callback', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['id']);
            request.id = defaultValue3;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}&id=${defaultValue3}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.Operation()
            );
            client.innerApiCalls.delete = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.delete(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1beta4.IOperation|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.delete as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.delete as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes delete with error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['id']);
            request.id = defaultValue3;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}&id=${defaultValue3}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.delete = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.delete(request), expectedError);
            const actualRequest = (client.innerApiCalls.delete as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.delete as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes delete with closed client', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsDeleteRequest', ['id']);
            request.id = defaultValue3;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.delete(request), expectedError);
        });
    });

    describe('get', () => {
        it('invokes get without error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['id']);
            request.id = defaultValue3;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}&id=${defaultValue3}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.BackupRun()
            );
            client.innerApiCalls.get = stubSimpleCall(expectedResponse);
            const [response] = await client.get(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.get as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.get as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes get without error using callback', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['id']);
            request.id = defaultValue3;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}&id=${defaultValue3}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.BackupRun()
            );
            client.innerApiCalls.get = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.get(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1beta4.IBackupRun|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.get as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.get as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes get with error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['id']);
            request.id = defaultValue3;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}&id=${defaultValue3}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.get = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.get(request), expectedError);
            const actualRequest = (client.innerApiCalls.get as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.get as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes get with closed client', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['instance']);
            request.instance = defaultValue2;
            const defaultValue3 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsGetRequest', ['id']);
            request.id = defaultValue3;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.get(request), expectedError);
        });
    });

    describe('insert', () => {
        it('invokes insert without error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.Operation()
            );
            client.innerApiCalls.insert = stubSimpleCall(expectedResponse);
            const [response] = await client.insert(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.insert as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.insert as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes insert without error using callback', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.Operation()
            );
            client.innerApiCalls.insert = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.insert(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1beta4.IOperation|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.insert as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.insert as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes insert with error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.insert = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.insert(request), expectedError);
            const actualRequest = (client.innerApiCalls.insert as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.insert as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes insert with closed client', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsInsertRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.insert(request), expectedError);
        });
    });

    describe('list', () => {
        it('invokes list without error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsListRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.BackupRunsListResponse()
            );
            client.innerApiCalls.list = stubSimpleCall(expectedResponse);
            const [response] = await client.list(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.list as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.list as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes list without error using callback', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsListRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.BackupRunsListResponse()
            );
            client.innerApiCalls.list = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.list(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.sql.v1beta4.IBackupRunsListResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.list as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.list as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes list with error', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsListRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedHeaderRequestParams = `project=${defaultValue1}&instance=${defaultValue2}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.list = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.list(request), expectedError);
            const actualRequest = (client.innerApiCalls.list as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.list as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes list with closed client', async () => {
            const client = new sqlbackuprunsserviceModule.v1beta4.SqlBackupRunsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.cloud.sql.v1beta4.SqlBackupRunsListRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['project']);
            request.project = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.cloud.sql.v1beta4.SqlBackupRunsListRequest', ['instance']);
            request.instance = defaultValue2;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.list(request), expectedError);
        });
    });
});