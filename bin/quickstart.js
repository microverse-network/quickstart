#!/usr/bin/env node

require('@microverse-network/core/node')
require('@microverse-network/core/plugins-standard')

const Module = require('@microverse-network/core/module')
new Module({ id: 'quickstart' })
