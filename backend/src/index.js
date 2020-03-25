const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

/**
 * Converts requisition body to javascript objects
 */
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Routes
 */

 /**
  * HTTP methods:
  * 
  * GET: Search for info in back-end
  * POST: Create info in back-end
  * PUT: Change info and persist in back-end
  * DELETE: Delete info in back-end
  */

/**
 * Parameters types:
 * 
 * Query Params: Named params sent to the route after "?" (use case: filters, pagination) exp: localhost:3333/users?name=Murilo
 * Route Params: Used to identify resources. exp: app.get('/route/:id',... ) localhost:3333/users/1 => id will be equal 1
 * Request Body: Used to create or change resources in back-end
 */

 /**
  * Database settings
  * 
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  *     KNEX.js
  */

app.listen(3333);
