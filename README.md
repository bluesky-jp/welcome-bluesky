# Welcome Bluesky

Bluesky コミュニティー有志による、Bluesky の紹介・解説ドキュメントです。このサイトは Bluesky の公式サイトの日本語化を目指すものではなく、**ユーザーが Bluesky を使う上で欲しい情報を必要な順番で、実態に即した内容で記載することを目的** にしています。そのため、既存のドキュメントと内容が重複することあります。また、Bluesky の技術に関する詳細については、このドキュメントでは扱いません。(機能を説明する上で、必要な技術の概要を説明することはあります。)

## 編集

編集についてどなたでも歓迎します！ 誤植等の問題があれば Issue にて連絡をしていただければと思いますし、内容を実際に書き換えてたい場合は、本レポジトリを Fork して PullRequest を送る方式でも問題ありません。もっと貢献していただける方については、`bluesky-jp` のチームにお誘いします。チームメンバーにお気軽にご連絡いただければと思います。

## 技術

[Docusaurus](https://docusaurus.io/) で本ドキュメントは作成されています。 ドキュメントは基本的に Markdown で記載しますが、拡張構文 (`.mdx`) の仕様は Docusaurus を参考にしてください。

## 更新

本ドキュメントは、`main` ブランチに変更がマージされたタイミングで自動でデプロイが実行され、Web ページに変更が反映されます。

## 起動

ローカルマシンでプレビューを確認したい場合について、まずは `yarn` コマンドを使用して Web 画面の起動に必要な依存パッケージをインストールします。

```bash
yarn
```

次に、`yarn start`コマンドを使用することで Web 画面をローカル環境に起動することができます。その後、デフォルト設定で自動で、ブラウザが開くと思いますが、[http://localhost:3000/welcome-bluesky/](http://localhost:3000/welcome-bluesky/) を開いてください。

```bash
yarn start
```

## 謝辞

本ドキュメントは [nostr-jp/welcome-nostr](https://github.com/nostr-jp/welcome-nostr) を参考に作成しています、ありがとうございます。

## ライセンス

コピー・改変をして使用・再配布して問題ありません。だたし、非商用に限ります。

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>
