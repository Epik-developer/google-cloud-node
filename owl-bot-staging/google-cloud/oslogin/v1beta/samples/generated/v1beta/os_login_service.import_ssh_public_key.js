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



'use strict';

function main(sshPublicKey) {
  // [START oslogin_v1beta_generated_OsLoginService_ImportSshPublicKey_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The unique ID for the user in format `users/{user}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The SSH public key and expiration time.
   */
  // const sshPublicKey = {}
  /**
   *  The project ID of the Google Cloud Platform project.
   */
  // const projectId = 'abc123'
  /**
   *  The view configures whether to retrieve security keys information.
   */
  // const view = {}

  // Imports the Oslogin library
  const {OsLoginServiceClient} = require('@google-cloud/os-login').v1beta;

  // Instantiates a client
  const osloginClient = new OsLoginServiceClient();

  async function callImportSshPublicKey() {
    // Construct request
    const request = {
      sshPublicKey,
    };

    // Run request
    const response = await osloginClient.importSshPublicKey(request);
    console.log(response);
  }

  callImportSshPublicKey();
  // [END oslogin_v1beta_generated_OsLoginService_ImportSshPublicKey_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));