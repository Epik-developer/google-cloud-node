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

function main(endpoint, instances) {
  // [START aiplatform_v1beta1_generated_LlmUtilityService_ComputeTokens_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Endpoint requested to get lists of tokens and
   *  token ids.
   */
  // const endpoint = 'abc123'
  /**
   *  Required. The instances that are the input to token computing API call.
   *  Schema is identical to the prediction schema of the text model, even for
   *  the non-text models, like chat models, or Codey models.
   */
  // const instances = [1,2,3,4]

  // Imports the Aiplatform library
  const {LlmUtilityServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new LlmUtilityServiceClient();

  async function callComputeTokens() {
    // Construct request
    const request = {
      endpoint,
      instances,
    };

    // Run request
    const response = await aiplatformClient.computeTokens(request);
    console.log(response);
  }

  callComputeTokens();
  // [END aiplatform_v1beta1_generated_LlmUtilityService_ComputeTokens_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));