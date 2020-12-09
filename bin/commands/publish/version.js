const inquirer = require('inquirer')
const shell = require('shelljs')
const path = require('path')

const { versionChoices } = require('../../../config')

const packageJsonPath = path.resolve(process.cwd(), 'package.json')
const packageJson = require(packageJsonPath)
const currentVersion = packageJson.version


module.exports = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'useCurrentVersion',
      message: `是否使用当前版本号${currentVersion}进行发布`,
      suffix: `（您当前项目package.json中version字段指定的版本号为：${currentVersion}）`,
      default: true
    },
    {
      type: 'list',
      name: 'versionGenMethod',
      message: '请选择版本号生成方式',
      choices: [
        {
          name: '自动生成',
          value: 'auto'
        },
        {
          name: '手动输入',
          value: 'custom'
        }
      ],
      when: ({ useCurrentVersion }) => !useCurrentVersion
    },
    {
      type: 'list',
      name: 'versionType',
      message: '请选择版本类型',
      pageSize: 10,
      choices: [new inquirer.Separator('Tip: 如果对npm包版本号类型不熟悉，请使用packpub version-explain 或 packpub ve 命令进行学习'), ...versionChoices],
      when: ({ versionGenMethod }) => versionGenMethod === 'auto'
    },
    {
      type: 'input',
      name: 'customVersion',
      message: '请输入版本号',
      when: ({ versionGenMethod }) => versionGenMethod === 'custom',
      validate: (customVersion) => {
        const regExp = /^\d+\.\d+\.\d+(-?\d+)?$/g
        return regExp.test(customVersion)
      }
    },
  ]).then(answers => {
    const { useCurrentVersion, versionType, customVersion } = answers
    const version = useCurrentVersion ? currentVersion : (versionType === 'custom' ? customVersion : versionType)
    return {
      useCurrentVersion,
      version
    }
  })
}
