require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const propertyRouter = require('./Routers/property');
const contactRouter = require('./Routers/contact')
const protestRouter = require('./Routers/protest')
const authRouter = require('./routers/auth');
const { logger } = require('./middleware')

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use(logger)

app.use('/auth', authRouter)
app.use('/contacts', contactRouter)
app.use('/properties', propertyRouter)
app.use('/protests', protestRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
