const { versionChoices } = require('../../../config')
module.exports = program => {
  program
  .command('version-explain')
  .alias('ve')
  .description('查看npm包版本号简短解释说明')
  .action(() => {
    versionChoices.forEach(({ name, description }) => {
      console.log(`${name}: ${description}`)
      console.log('')
    })
  })
}