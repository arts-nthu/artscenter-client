'use strict'
module.exports = {
  NODE_ENV: '"production"',
  BASE_API: JSON.stringify(process.env.BASE_API) || '"localhost:8080"'
}
