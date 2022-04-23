const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
// const api = require('../routes/api');
// const authRouter = require('../routes/auth');

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});