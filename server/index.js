const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const { logger } = require('./middleware')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(logger)
app.use('/auth', authRouter)
app.use('/users', usersRouter)

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions))


app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


// https://gleaming-modem-343016.uc.r.appspot.com/