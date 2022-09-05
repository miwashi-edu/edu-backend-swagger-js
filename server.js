require('dotenv').config()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const express = require('express')
const jwt = require('jsonwebtoken')
const healthcheck = require('healthcheck')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/health', require('./routes/healthcheck.js'));
app.use('/user', require('./routes/user.js'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//const swaggerSpec = swaggerJSDoc(options);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req ,res) => {
   headers={"cache-control":  "no-cache"}
   body={"status": "available"}
   res.status(200).json(body)
})

app.listen(PORT , ()=>{
   console.log(`STARTED LISTENING ON PORT ${PORT}`)
});