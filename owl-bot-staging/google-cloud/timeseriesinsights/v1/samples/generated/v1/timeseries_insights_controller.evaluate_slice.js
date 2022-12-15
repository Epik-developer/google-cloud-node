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

function main(dataset, pinnedDimensions, detectionTime) {
  // [START timeseriesinsights_v1_generated_TimeseriesInsightsController_EvaluateSlice_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Loaded DataSet to be queried in the format of
   *  "projects/{project}/datasets/{dataset}"
   */
  // const dataset = 'abc123'
  /**
   *  Required. Dimensions with pinned values that specify the slice for which we will
   *  fetch the time series.
   */
  // const pinnedDimensions = 1234
  /**
   *  Required. This is the point in time that we want to probe for anomalies.
   *  See documentation for
   *  QueryDataSetRequest.detectionTime google.cloud.timeseriesinsights.v1.QueryDataSetRequest.detection_time.
   */
  // const detectionTime = {}
  /**
   *  Parameters controlling how we will build the time series used to predict
   *  the detectionTime google.cloud.timeseriesinsights.v1.EvaluateSliceRequest.detection_time  value for this slice.
   */
  // const timeseriesParams = {}
  /**
   *  Parameters that control the time series forecasting models, such as the
   *  sensitivity of the anomaly detection.
   */
  // const forecastParams = {}

  // Imports the Timeseriesinsights library
  const {TimeseriesInsightsControllerClient} = require('@google-cloud/timeseriesinsights').v1;

  // Instantiates a client
  const timeseriesinsightsClient = new TimeseriesInsightsControllerClient();

  async function callEvaluateSlice() {
    // Construct request
    const request = {
      dataset,
      pinnedDimensions,
      detectionTime,
    };

    // Run request
    const response = await timeseriesinsightsClient.evaluateSlice(request);
    console.log(response);
  }

  callEvaluateSlice();
  // [END timeseriesinsights_v1_generated_TimeseriesInsightsController_EvaluateSlice_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));