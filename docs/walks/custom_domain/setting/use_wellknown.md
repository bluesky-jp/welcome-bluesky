---
sidebar_position: 2
---

import Image from "@site/src/components/image";

# .well-known 編

ここでは、ドメインでアクセスできる Web サイトの特定の場所に決まった形式のテキストファイルを配置することで、Web サイトの編集権を持つ ＝ ドメインの所有者、もしくはその管理組織であることを証明し、ドメインをハンドルにする方法を説明します。

## 設定方法

### 1. 設定項目の確認

あなたのドメインと、そのドメインもしくはサブドメインを使用して、どのようなハンドルを設定したいかによって、Bluesky のサーバーの方から設定ファイルがあるかどうかを確認にくる URL が決まっています。

**[公式の Web クライアント](https://bsky.app)** を使用して、ファイルの設置場所と、ファイルに書き込む内容を確認します。

:::info
以降 **[公式の Web クライアント](https://bsky.app)** を使用して、そのスクリーンショット等を記載しますが、Android や iOS のモバイルアプリについても操作方法は基本的には同じです。
:::

#### 1. `Setting` から `Change handle` を選択

画面左側のメニューから `Settings` (設定) を選択します。次に、設定画面の `Advanced` セクションの `Change handle` (ハンドルの変更) を選択します。

<Image height="350" mb="1rem" mr="20px" src={require("../img/custom_domain/custom_domain_web_0.png").default} />
<Image height="350" mb="1rem" src={require("../img/custom_domain/custom_domain_web_1.png").default} />

#### 2. `I have my own domain` リンクを選択

出てきたポップアップの `I have my own domain` (自分のドメインを持っています) を選択します。

<Image width="500" src={require("../img/custom_domain/custom_domain_web_2.png").default} />

#### 3. No. DNS Panel に切り替え

表示された "Change Handle" のウィンドウ では 最初は `DNS Panel` が黒くなって選択されていますので、右の `No DNS Panel` を選択します。

<Image width="500" mb="1rem" src={require("../img/custom_domain_wellknown/custom_domain_wellknown_web_3.png").default} />

すると、こういう画面に切り替わります。

<Image width="500" mb="1rem" src={require("../img/custom_domain_wellknown/custom_domain_wellknown_web_4.png").default} />

ここで、赤枠の ＠ のあとに、新しくカスタムドメインのハンドルを入力します。

<Image width="500" mb="1rem" src={require("../img/custom_domain_wellknown/custom_domain_wellknown_web_5.png").default} />

ここまでの工程で上記の画面が出力されたと思います。ので、赤枠の `Upload a text file to` の所に書かれている URL に対応する場所に、`atproto-did` という名前の、拡張子無しのテキストファイルを作成します。そのファイルには、`That contains the following:` の下にある `did:plc:` で始まる文字列をコピーしてください。`Copy File Contents` ボタンを押すと、クリップボードにコピーされますので、 `atproto-did` というファイルを PC でメモ帳などで作成して、貼り付けると良いでしょう。

### 2. ファイルのアップロード

Web サーバーの構成によって、どのフォルダに置かないといけないかは変わりますが、トップページをアクセスしたときに読み込まれる `index.html` ファイルと同じ階層に、**`.well-known` フォルダ** を作成して、その中に **`atproto-did` ファイル** をアップロードするのが一般的です。CMS システムなどを使用してる場合は、アイコンファイルや、`robot.txt` 等が置かれる `static` フォルダ の中に `.well-known` フォルダを置く必要があるかもしれません。この、`atproto-did` というファイルは、指定の URL でアクセス制限無しで読み込めるように、Web サーバーに配置してください。

ファイルをアップロードしてみたら、指定の URL で、正常に `did:plc:` で始まる文字列がブラウサに出てくるかどうか、確認してみると良いでしょう。

### 3. 設定の検証

確認が取れたら、`Verify Text File` ボタンをクリックすると、検証がおこなわれます。

<Image width="500" mb="1rem" src={require("../img/custom_domain_wellknown/custom_domain_wellknown_web_6.png").default} />

もしあなたが設定した `atproto-did` ファイルの設定が正しい場合は、`Verify Text File` ボタンを押した後で上記画像のように `Domain verified!` メッセージが出力されます。あとは、`Update to xxxxx` ボタンを押すとあなたが設定したドメインがハンドルしてアカウントに設定されます。

:::tip
もし DNS 認証で失敗し、`Domain verified!` が表示されない場合は、ファイルのアップロードが適切にできているかを確認してください。
:::
