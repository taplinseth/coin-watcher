const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
// const api = require('../routes/api');
// const authRouter = require('../routes/auth');

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended:false}));
// app.use(bodyParser.json());
app.use(cors());
// app.use(api);
// app.use('/auth', authRouter);

app.get('/', (req, res) => {
  const sdk = require('api')('@coinbase-exchange/v1.0#4g6yi8810kztvmbqc');
  sdk['ExchangeRESTAPI_GetProductTicker']({product_id: 'btc-usd'})
      .then(askPriceResponse => res.send(askPriceResponse))
      .catch(err => console.error(err))
});

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});