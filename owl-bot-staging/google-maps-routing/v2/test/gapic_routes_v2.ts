// Copyright 2023 Google LLC
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
import * as routesModule from '../src';

import {PassThrough} from 'stream';

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

function stubServerStreamingCall<ResponseType>(response?: ResponseType, error?: Error) {
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    // write something to the stream to trigger transformStub and send the response back to the client
    setImmediate(() => { mockStream.write({}); });
    setImmediate(() => { mockStream.end(); });
    return sinon.stub().returns(mockStream);
}

describe('v2.RoutesClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = routesModule.v2.RoutesClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = routesModule.v2.RoutesClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = routesModule.v2.RoutesClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new routesModule.v2.RoutesClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new routesModule.v2.RoutesClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.routesStub, undefined);
            await client.initialize();
            assert(client.routesStub);
        });

        it('has close method for the initialized client', done => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.routesStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.routesStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new routesModule.v2.RoutesClient({
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
            const client = new routesModule.v2.RoutesClient({
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

    describe('computeRoutes', () => {
        it('invokes computeRoutes without error', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRoutesRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRoutesResponse()
            );
            client.innerApiCalls.computeRoutes = stubSimpleCall(expectedResponse);
            const [response] = await client.computeRoutes(request);
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes computeRoutes without error using callback', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRoutesRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRoutesResponse()
            );
            client.innerApiCalls.computeRoutes = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.computeRoutes(
                    request,
                    (err?: Error|null, result?: protos.google.maps.routing.v2.IComputeRoutesResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes computeRoutes with error', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRoutesRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.computeRoutes = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.computeRoutes(request), expectedError);
        });

        it('invokes computeRoutes with closed client', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRoutesRequest()
            );
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.computeRoutes(request), expectedError);
        });
    });

    describe('computeRouteMatrix', () => {
        it('invokes computeRouteMatrix without error', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRouteMatrixRequest()
            );
            const expectedResponse = generateSampleMessage(
              new protos.google.maps.routing.v2.RouteMatrixElement()
            );
            client.innerApiCalls.computeRouteMatrix = stubServerStreamingCall(expectedResponse);
            const stream = client.computeRouteMatrix(request);
            const promise = new Promise((resolve, reject) => {
                stream.on('data', (response: protos.google.maps.routing.v2.RouteMatrixElement) => {
                    resolve(response);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
        });

        it('invokes computeRouteMatrix with error', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRouteMatrixRequest()
            );
            const expectedError = new Error('expected');
            client.innerApiCalls.computeRouteMatrix = stubServerStreamingCall(undefined, expectedError);
            const stream = client.computeRouteMatrix(request);
            const promise = new Promise((resolve, reject) => {
                stream.on('data', (response: protos.google.maps.routing.v2.RouteMatrixElement) => {
                    resolve(response);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
        });

        it('invokes computeRouteMatrix with closed client', async () => {
            const client = new routesModule.v2.RoutesClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.maps.routing.v2.ComputeRouteMatrixRequest()
            );
            const expectedError = new Error('The client has already been closed.');
            client.close();
            const stream = client.computeRouteMatrix(request);
            const promise = new Promise((resolve, reject) => {
                stream.on('data', (response: protos.google.maps.routing.v2.RouteMatrixElement) => {
                    resolve(response);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
        });
    });
});