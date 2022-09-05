# edu-backend-swagger-js

## Petstore

[Petstore](https://petstore.swagger.io/)

## Node packages
[Swagger DOC for javascript](https://www.npmjs.com/package/swagger-jsdoc)
[Swagger UI for express](https://www.npmjs.com/package/swagger-ui-express)

## Tutorial Youtube
[Tutorial](https://www.youtube.com/watch?v=apouPYPh_as&t=731s)

## Instructions

```bash
cd ~
cd ws
cd [backend-project]
touch swagger.json
npm install  swagger-jsdoc
npm install swagger-ui-express
```

## swagger.json

```json
{
    "swaggerDefinition": {
      "openapi": "3.0.0",
      "info": { 
        "title": "API for edu-backend-swagger-js", 
        "version": "1.0.0" 
        }
    },
    "apis": [ "./routes/*.js" ]
}
```
## server.js

```js
require('dotenv').config()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express')
const healthcheck = require('healthcheck')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/health', require('./routes/healthcheck.js'));
app.use('/user', require('./routes/user.js'));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req ,res) => {
   headers={"cache-control":  "no-cache"}
   body={"status": "available"}
   res.status(200).json(body)
})

app.listen(PORT , ()=>{
   console.log(`STARTED LISTENING ON PORT ${PORT}`)
});
```

## Create

```js
/**
 * @openapi
 * /user:
 *   post:
 *     description: Creates a user!
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Jon Doe
 * 				password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 * 				email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@some.where
 *     responses:
 *       200:
 *         description: Creates a user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 */
```

## Read

```js
```

## Update

```js
```

## Delete

```js
```
