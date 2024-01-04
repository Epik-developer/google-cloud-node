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



'use strict';

function main(parent, backupPolicy, backupPolicyId) {
  // [START netapp_v1_generated_NetApp_CreateBackupPolicy_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location to create the backup policies of, in the format
   *  `projects/{project_id}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. A backupPolicy resource
   */
  // const backupPolicy = {}
  /**
   *  Required. The ID to use for the backup policy.
   *  The ID must be unique within the specified location.
   *  This value must start with a lowercase letter followed by up to 62
   *  lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
   */
  // const backupPolicyId = 'abc123'

  // Imports the Netapp library
  const {NetAppClient} = require('@google-cloud/netapp').v1;

  // Instantiates a client
  const netappClient = new NetAppClient();

  async function callCreateBackupPolicy() {
    // Construct request
    const request = {
      parent,
      backupPolicy,
      backupPolicyId,
    };

    // Run request
    const [operation] = await netappClient.createBackupPolicy(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateBackupPolicy();
  // [END netapp_v1_generated_NetApp_CreateBackupPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));