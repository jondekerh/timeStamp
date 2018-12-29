const app = require('./app.js');
var port = 3000;

app.listen(port, () => {
  console.log(`timeStamp listening on port ${port}`);
});
