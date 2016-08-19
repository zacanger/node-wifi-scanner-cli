#!/usr/bin/env node

const scanner = require('node-wifi-scanner')

scanner.scan((err, networks) => {
  if (err) {
    return console.error(err)
  }
  console.log(networks)
})
