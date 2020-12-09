const { program } = require("commander");

const version = require('./version')
const commit = require('./commit')
const publish = require('./publish')

const logger = require('../../../utils/logger')

module.exports = program => {
  program
  .command('publish')
  .alias('p')
  .description('发布npm包')
  .action(() => {
    version()
    .then(versionInfo => {
      return commit(versionInfo)
    })
    .then(versionInfo => {
      return publish(versionInfo)
    })
    .then(() => {
      logger.success('发布成功')
    }, () => {
      logger.error('发布失败')
    })
  })
}