const versionChoices = [
  {
    name: 'prerelease',
    value: 'prerelease',
    description: '若没有预发布号：则增加小号，增加预发布号为0；否则则升级预发布号'
  },
  {
    name: 'prepatch',
    value: 'prepatch',
    description: '直接升级小号，增加预发布号为0'
  },
  {
    name: 'preminor',
    value: 'preminor',
    description: '直接升级中号，小号置为0，增加预发布号为0'
  },
  {
    name: 'premajor',
    value: 'premajor',
    description: '直接升级大号，中号和小号置为0，增加预发布号为0'
  },
  {
    name: 'patch',
    value: 'patch',
    description: '若没有预发布号：则直接升级小号，删除预发布号；否则删除预发布号，其它不动'
  },
  {
    name: 'minor',
    value: 'minor',
    description: '若没有预发布号，则升级一位中号，大号不动，小号置为0；若有预发布号: --若小号为0，则不升级中号，删除预发布号,--若小号不为0，删除预发布号，置小号为0，升级中号'
  },
  {
    name: 'major',
    value: 'major',
    description: '若没有预发布号，则直接升级一位大号，其它位都置为0；若有预发布号：--中号和小号都为0，则不升级大号，而将预发布号删掉。即2.0.0-1变成2.0.0，这就是预发布的作用；--如果中号和小号有任意一个不是0，那便会升级一位大号，其他位都置为0，清空预发布号。即 2.0.1-0变成3.0.0'
  }
]

module.exports = {
  versionChoices
}