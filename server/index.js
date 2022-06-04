const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const { logger } = require('./middleware')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.json())
app.use(logger)
app.use('/auth', authRouter)
app.use('/users', usersRouter)


app.get('/', (req, res) => {
  res.send('Welcome to our server!');
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

//https://coin-watcher-deployment-k6dv15p99-taplinseth.vercel.app/
//https://coral-firefly-352315.uc.r.appspot.com/