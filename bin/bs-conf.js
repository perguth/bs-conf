#!/usr/bin/env node

var path = require('path')


var browserSync = require('browser-sync')
var conf = require(
	path.resolve(process.cwd(), './bs-conf.js')	)

browserSync(conf)
