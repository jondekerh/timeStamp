const express = require('express');
const app = express();
const port = 3000;

function createStamp(input) {
  var stamp = new Date(input);

  if (!isNaN(stamp)) {
    return {
      "UNIX": stamp.getTime(),
      "UTC": stamp.toUTCString()
    };
  } else {
    return 'ERROR: INVALID DATE';
  }
};

app.get('/timestamp/:date', (req, res) => res.send(createStamp(req.params.date)));

app.listen(port, () => console.log(`timeStamp listening on port ${port}`));
