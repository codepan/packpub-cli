# 介绍
该脚手架可以帮助你自动发布npm包到npm仓库，同时也可帮助你自动提交代码
# 安装
```shell
yarn global add @codepan/packpub-cli
```
OR
```shell
npm i -g @codepan/packpub-cli
```

# 使用

**查看版本**

```shell
packpub -V|--version
```

**使用帮助**

```shell
packpub -h|--help
```

**发布npm包**

```shell
packpub publish|p
# 指定发布的源
packpub publish --source npm|cnpm|其它
```

**查看npm包版本号简短解释说明**

```shell
packpub version-explain|ve
```