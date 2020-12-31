const { program } = require("commander");

const version = require('./version')
const commit = require('./commit')
const publish = require('./publish')

const logger = require('../../../utils/logger')

module.exports = program => {
  program
  .command('publish')
  .alias('p')
  .option('-s, --source <source>', '指定发布的源，例如-s npm 或 -s cnpm')
  .description('发布npm包')
  .action(({ source }) => {
    version()
    .then(versionInfo => {
      return commit(versionInfo)
    })
    .then(versionInfo => {
      return publish(versionInfo, source)
    })
    .then(() => {
      logger.success('发布成功')
    }, () => {
      logger.error('发布失败')
    })
  })
}