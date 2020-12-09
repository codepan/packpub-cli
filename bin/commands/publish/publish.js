const inquirer = require('inquirer')
const shell = require('shelljs')
module.exports = ({ useCurrentVersion, version }) => {
  return new Promise((resolve, reject) => {
    shell.exec(`npm version ${version} ${useCurrentVersion ? '--allow-same-version' : ''}`, (code, stdout, stderr) => {
      if (code !== 0 || stderr) {
        return reject()
      }
      inquirer.prompt({
        type: 'confirm',
        name: 'couldPublish',
        message: `即将执行发布动作，请再次确认相关信息：1. 版本类型：${version}；2. 版本号：${stdout}，若无误请按回车，否则输入 n 终止发布`,
        default: true,
      }).then(({ couldPublish }) => {
        if (!couldPublish){
          reject()
        } else {
          shell.exec('npm publish --access public', (code, stdout, stderr) => {
            if (code !== 0) {
              return reject()
            }
            resolve()
          })
        }
      })
    })
  })
}