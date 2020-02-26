const auth = require("./google-auth");
const stream  = require('stream');


// Copyright 2016 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const fs = require('fs');
const readline = require('readline');

const { google } = require('googleapis');

const drive = google.drive({
  version: 'v3',
  auth: auth(),
});
// https://developers.google.com/drive/api/v3/folder
function uploadFile(fileObject, done) {
  let bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  //var folderId = '0BwwA4oUTeiV1TGRPeTVjaWRDY1E';
  var fileMetadata = {
    'name': fileObject.originalname,
   // parents: [folderId]
  };
  var media = {
    mimeType: fileObject.mimetype,
    body: bufferStream
  };
  drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  }, function (err, file) {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log('File Id: ', file.id);
    }
    if(done) {
      done();
    }
  });
}

module.exports = {uploadFile}