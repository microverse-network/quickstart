# Microverse Quickstart

Here we are going to walkthrough a basic Node.js application.

First, we need to add some common dependencies.

- [`@microverse-network/core/node`](https://github.com/microverse-network/core/node/blob/master/index.js)
is a preset configuration setting the transports available in the
Node.js runtime.

- [`@microverse-network/core/plugins-standard`](https://github.com/microverse-network/core/plugins-standard/blob/master/index.js)
  sets the standard plugins in the configuration object.

- [`@microverse-network/core/module`](https://github.com/microverse-network/core/module)
  is the entry point for the quickstart application.

Let's create the executable script.

`bin/quickstart.js`
``` javascript
require('@microverse-network/core/node')
require('@microverse-network/core/plugins-standard')

const Module = require('@microverse-network/core/module')
global.module = new Module({ id: 'quickstart' })
```

This script will instantiate a new instance of the `Module` class with
a given `id`. Every instance having this same `id` will be able to
communicate each other by finding each others address on the tracker.

This quickstart is just showing the essential requirements. You can
look at [database](https://github.com/microverse-network/database)
module for a more advanced implementation.
