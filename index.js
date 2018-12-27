const express = require('express');
const app = express();
const port = 3000;

function createStamp(input) {
  var stamp = new Date(input);

  if (!isNaN(stamp)) {
    return {
      "unix-in-ms": stamp.getTime(),
      "utc": stamp.toUTCString()
    };
  } else {
    return 'ERROR: INVALID DATE';
  }
};

function createStampNow() {
  var stamp = Date.now()

  return {
    "unix-in-ms": stamp,
    "utc": new Date(stamp).toUTCString()
  }
};

app.get('/timestamp/:date', (req, res) => res.send(createStamp(req.params.date)));

app.get('/timestamp//', (req, res) => res.send(createStampNow()));

app.listen(port, () => console.log(`timeStamp listening on port ${port}`));
