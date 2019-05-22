'use strict'

const nodeAbi = require('node-abi')

// package.jsonに記入するiohookのABIバージョンを確認する
console.log(`node: ${nodeAbi.getAbi('11.15.0', 'node')}`)
console.log(`electron: ${nodeAbi.getAbi('5.0.1', 'electron')}`)
