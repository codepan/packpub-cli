#!/usr/bin/env node
const program = require('commander')

const versionExplain = require('./commands/version-explain')
const publish = require('./commands/publish')

const packageJson = require('../package.json')
versionExplain(program)
publish(program)

program.version(packageJson.version)

program.parse(process.argv)