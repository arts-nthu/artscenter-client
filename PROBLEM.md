### 讓webpack 能偵測自己設定的process.env

* client/config/dev.env.js
``` javascript
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 增加這行
  BASE_API: JSON.stringify(process.env.BASE_API) || '"localhost:8080"'
})
```

