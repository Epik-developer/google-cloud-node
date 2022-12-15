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

function main(corpus) {
  // [START visionai_v1_generated_Warehouse_SearchAssets_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent corpus to search.
   *  Form: `projects/{project_id}/locations/{location_id}/corpora/{corpus_id}'
   */
  // const corpus = 'abc123'
  /**
   *  The number of results to be returned in this page. If it's 0, the server
   *  will decide the appropriate page_size.
   */
  // const pageSize = 1234
  /**
   *  The continuation token to fetch the next page. If empty, it means it is
   *  fetching the first page.
   */
  // const pageToken = 'abc123'
  /**
   *  Time ranges that matching video content must fall within. If no ranges are
   *  provided, there will be no time restriction. This field is treated just
   *  like the criteria below, but defined separately for convenience as it is
   *  used frequently. Note that if the end_time is in the future, it will be
   *  clamped to the time the request was received.
   */
  // const contentTimeRanges = {}
  /**
   *  Criteria applied to search results.
   */
  // const criteria = 1234
  /**
   *  Stores most recent facet selection state. Only facet groups with user's
   *  selection will be presented here. Selection state is either selected or
   *  unselected. Only selected facet buckets will be used as search criteria.
   */
  // const facetSelections = 1234
  /**
   *  A list of annotation keys to specify the annotations to be retrieved and
   *  returned with each search result.
   *  Annotation granularity must be GRANULARITY_ASSET_LEVEL and its search
   *  strategy must not be NO_SEARCH.
   */
  // const resultAnnotationKeys = 'abc123'

  // Imports the Visionai library
  const {WarehouseClient} = require('@google-cloud/visionai').v1;

  // Instantiates a client
  const visionaiClient = new WarehouseClient();

  async function callSearchAssets() {
    // Construct request
    const request = {
      corpus,
    };

    // Run request
    const iterable = await visionaiClient.searchAssetsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchAssets();
  // [END visionai_v1_generated_Warehouse_SearchAssets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));