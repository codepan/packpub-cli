const inquirer = require('inquirer')
const shell = require('shelljs')

module.exports = versionInfo => {
  return new Promise((resolve, reject) => {
    shell.exec('git status -s', { silent: true }, (code, stdout, stderr) => {
      if (code !== 0) {
        return reject(stderr)
      }

      if (!stdout) {
        return resolve(versionInfo)
      }
  
      inquirer.prompt([
        {
          type: 'confirm',
          name: 'autoCommit',
          message: 'git工作区不干净，是否帮您自动提交',
          default: true
        },
        {
          type: 'input',
          name: 'commitMessage',
          message: '请输入git提交日志',
          default: `commit some files for publish ${versionInfo.version} version`,
          when: ({ autoCommit }) => autoCommit
        },
      ]).then((answers) => {
        if (answers.autoCommit) {
          shell.exec(`git add . && git commit -m '${answers.commitMessage}'`)
        }
        resolve(versionInfo)
      })
    })
  })
}