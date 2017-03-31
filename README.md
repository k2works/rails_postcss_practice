Étude Op. 10, No. 10
===================

# 目的 #
RailsアプリケーションでPostCSSを実装

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| ruby           |2.4.1     |             |
| node           |7.4.0     |             |
| rails          |5.1.0.rc1 |             |
| vagrant        |1.8.7     |             |
| docker         |17.03.1   |             |
| docker-compose |1.11.2    |             |

# 構成 #
1. [構築](#構築)
1. [配置](#配置)
1. [開発](#開発)

## 構築
### 仮想マシンを使った開発
```bash
vagrant up
vagrant ssh
cd /vagrant
```

### Dockerコンテナを使った開発
```bash
docker build . -t app:base
docker run --name app --rm -p 5000:5000 -v $(PWD):/container -i -t app:base /bin/bash
cd /container
```

上記の作業ディレクトリで以下の作業を実施する

### Railsアプリケーションのセットアップ
```bash
bundle install
rails s -b 0.0.0.0 -p 5000
```
`http://0.0.0.0:5000`に接続して動作を確認する

### Webpackerのセットアップ
```bash
bin/rails webpacker:install
```

### Reactのセットアップ
```bash
bin/rails webpacker:install:react
```

### webpack-dev-serverを有効にする
```bash
bundle exec foreman start -f Procfile.dev
```
**[⬆ back to top](#構成)**

## 配置
### Herokuセットアップ
[Heroku](https://signup.heroku.com/dc)にサインアップして以下の操作を実施する

```bash
heroku create rails-postcss-practice
```

アプリケーションの初回デプロイ
```bash
# ビルドパックの追加
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/ruby

# デプロイとマイグレーション実行
$ git push heroku master
$ heroku run rake db:migrate

# Heroku上のアプリケーションを開く
$ heroku open
```

### Jenkinsセットアップ(仮想マシン利用時)
```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```
`http://0.0.0.0:9000`に接続してJenkinsをセットアップする

Crumb Dataが必要な場合は`http://0.0.0.0:9000/crumbIssuer/api/json`からcrumbを取得する

**[⬆ back to top](#構成)**

## 開発
### 仕様

### 設計

### 実装
**[⬆ back to top](#構成)**

# 参照 #