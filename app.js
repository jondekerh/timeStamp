const express = require('express');
const app = express();

function createStamp(input) {
  var stamp = new Date(input);

  if (!isNaN(stamp)) {
    return {
      "UNIXms": stamp.getTime(),
      "utc": stamp.toUTCString()
    };
  } else {
    return 'ERROR: INVALID DATE';
  }
};

function createStampNow() {
  var stamp = Date.now()

  return {
    "UNIXms": stamp,
    "utc": new Date(stamp).toUTCString()
  }
};

app.get('/timestamp/:date', (req, res) => res.send(createStamp(req.params.date)));

app.get('/timestamp//', (req, res) => res.send(createStampNow()));

module.exports = app;
