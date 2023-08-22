---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from "@site/src/components/image";

# カスタムドメイン

## 概要

Bluesky は [AT Protocol 📖](/docs/extras/reference#at-protocol) を基盤に構築されており、**あなたが所有している [ドメイン 📖](/docs/extras/reference#ドメイン) をアカウントの [ハンドル 📖](/docs/extras/reference#ハンドル) として設定することができます。** アカウントを登録した際に付けられた `???.bsky.social` のようなハンドルのままでも Bluesky を使う際に大きな問題はありませんが、カスタムドメインを設定することで、**ドメインに関連付けられている Web サービス等を通じて、アカウントの持ち主が本物であることを証明することができます。**

### 得られる信頼

[ドメイン 📖](/docs/extras/reference#ドメイン) は一般的には Web サイトを作成する際に取得するもので、ドメインに紐付いた Web サイトがあることが一般的です。そのため、ドメインを持っていることはその Web サイトの管理者であることを示します。それと、カスタムドメインの機能を併せて、Bluesky のハンドルをそのドメインに変更すると、その Web サイトの管理者と Bluesky のアカウントが同一人物であることを証明することができます。

逆に言えば、それ以外のことはカスタムドメインでは証明できません。例えば `taro.org` というハンドルであった場合、そのアカウントがそのドメインである `taro.org` の所有者であることは分かりますが、そのアカウントが誰か？ は分かりません。それ以上の情報は、そのアカウントのプロフィールに記載されている情報を参照する必要があります。

:::tip
例えば、日本の衆議院議員である河野太郎氏を例に考えてみましょう。河野太郎氏が今までに Bluesky にアカウントを作成した事実はありませんが、仮に河野太郎氏が `tarokono.bsky.social` というアカウントを作成したとして、どうやってこのアカウントの持ち主が本物の河野太郎氏であると証明できるでしょうか？ Bluesky におけるこの問題の最も確実な解決策は、河野太郎氏または河野太郎氏の組織が所有しているドメインである `taro.org` を `tarokono.bsky.social` の代わりにアカウントのハンドルとして設定することです。なぜなら、`taro.org` のドメインを所有しているのは河野太郎氏または河野太郎氏の組織以外にはあり得ず、 `taro.org` のドメインをアカウントのハンドルに設定できるのは、河野太郎氏または河野太郎氏の組織だけだからです。
:::

## 設定方法

Bluesky でカスタムドメインを設定する方法を説明します。

:::caution
あなたが所有するドメインをハンドルとして設定した時点で、あなたのアカウントの過去の `???.bsky.social` といったハンドルは誰もが取得できる状態になる点に注意してください。なりすましが気になる場合は、招待コードを持っている場合、ハンドルを変えた後に過去のハンドルでアカウントを取り直すと良いと思います。
:::

### 1. ドメインの購入

**前提として、ドメインをどこかのレジストラ (ドメインの販売や管理を行っている企業及びサービス) で取得している必要があります。** 日本で有名なサービスとして [お名前.com](https://www.onamae.com/) があります。価格はそのサービスによって独自に設定されていますが、長期的にドメインを保持したい場合は、ドメインを原価で提供している [Cloudflare Registrar](https://www.cloudflare.com/ja-jp/products/registrar/) をお勧めします。ドメインの購入方法については、本ドキュメントでは記載しません。

- 参考
  - [ドメインを登録する - お名前.com](https://www.onamae.com/service/d-regist/)
  - [Cloudflare Registrar でドメイン取得... - Otogeworks](https://otogeworks.com/blog/new-domain-in-cloudflare-registrar-to-mail/#index_id8)

### 2. DNS 設定項目の確認

購入したドメインについて DNS (ドメインに紐づく IP などの解決を行うシステム) の設定を行う必要があります。ここではその際に必要な情報を Bluesky から確認します。

:::info
以降 **[公式の Web クライアント](https://bsky.app)** を使用して、そのスクリーンショット等を記載しますが、Android や iOS のモバイルアプリについても操作方法は基本的には同じです。
:::

#### 1. `Setting` から `Change handle` を選択

画面左側のメニューから `Setting` (設定) を選択します。次に、設定画面の `Advanced` セクションの `Change handle` (ハンドルの変更) を選択します。

<Image height="350" mb="1rem" mr="20px" src={require("./img/custom_domain_web_0.png").default} />
<Image height="350" mb="1rem" src={require("./img/custom_domain_web_1.png").default} />

#### 2. `I have my own domain` リンクを選択

出てきたポップアップの `I have my own domain` (自分のドメインを持っています) を選択します。

<Image width="500" src={require("./img/custom_domain_web_2.png").default} />

#### 3. 設定内容のコピー

DNS の設定項目の内容である `did=` から始まる文字列をコピーします。

<Image width="500" mb="1rem" src={require("./img/custom_domain_web_3.png").default} />

ここまでの工程で上記の画面が出力されたと思いますので、赤枠の `Value:` の下にある `did=` で始まる文字列をコピーしてください。上記の画像の例だと`did=did:pic:iijrtk7ocored6zuziwmqq3c` をコピーすることになります。ここでコピーした値は次で DNS の設定を行う際に使用します。

### 3. DNS の設定

:::info
カスタムドメインを設定する際に DNS の設定が必要になります。あなたが所有しているドメインの管理サービスに応じて設定を行ってください。今回の例では [Cloudflare Registrar](https://www.cloudflare.com/ja-jp/products/registrar/) と [お名前.com](https://www.onamae.com/) の設定画面を例として使用します。
:::

#### 1. DNS 設定画面に遷移

ドメインの管理サービスにログインします。その後に DNS の設定画面にアクセスします。

<Tabs groupId="service" queryString>
  <TabItem value="cloudflare" label="Cloudflare Registrar" default>
<br/>

ホーム画面から取得したドメインを選択します。

<Image width="700" mb="1rem" src={require("./img/custom_domain_web_4_c_1.png").default} />

`DNS` タブを選択します。

<Image width="350" src={require("./img/custom_domain_web_4_c_2.png").default} />

  </TabItem>

  <TabItem value="onamae" label="お名前.com">
<br/>

ホーム画面から、ドメインの DNS 設定を選択します。

<Image width="450" mb="1rem" src={require("./img/custom_domain_web_4_o_1.png").default} />

購入したドメインをチェックし、次へを選択します。

<Image width="500" src={require("./img/custom_domain_web_4_o_2.png").default} />

  </TabItem>
</Tabs>

#### 2. TXT レコードの追加

DNS の設定画面に遷移できたら、TXT レコードを追加します。まずは、レコードの追加画面に遷移します。

<Tabs groupId="service" queryString>
  <TabItem value="cloudflare" label="Cloudflare Registrar" default>

<Image width="800" mb="1rem" src={require("./img/custom_domain_web_5_c_1.png").default} />

レコードの入力画面が出力されると思うので、次のように入力します。

| フィールド名 | 値                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------- |
| **Type**     | TXT                                                                                             |
| **Name**     | \_atproto                                                                                       |
| **Content**  | [先の手順](#3-設定内容のコピー) で Bluesky 公式クライアントからコピーした `did=` で始まる文字列 |

<Image width="800" mb="1rem" src={require("./img/custom_domain_web_6_c_1.png").default} />

入力したら、下の `Save` ボタンを押します。

  </TabItem>

  <TabItem value="onamae" label="お名前.com">

<Image width="500" mb="1rem" src={require("./img/custom_domain_web_5_o_1.png").default} />

レコードの入力画面が出力されると思うので、次のように入力します。

| フィールド名 | 値                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------- |
| **ホスト名** | \_atproto                                                                                       |
| **TYPE**     | TXT                                                                                             |
| **VALUE**    | [先の手順](#3-設定内容のコピー) で Bluesky 公式クライアントからコピーした `did=` で始まる文字列 |

<Image width="800" mb="1rem" src={require("./img/custom_domain_web_6_o_1.png").default} />

入力したら、右の `追加` ボタンを押してください。**追加を押しただけでは、設定は完了していません。** 追加後、画面の一番下にあるボタンから確認画面に遷移して確認を完了してください。

<Image width="600" src={require("./img/custom_domain_web_6_o_2.png").default} />

  </TabItem>
</Tabs>

以上で DNS の設定は完了です。

### 4. Bluesky で DNS 認証

DNS の設定が完了したら、Bluesky の公式クライアントの `Change Handle` 画面に戻ってください。次の画像の画面です。

<Image width="500" mb="1rem" src={require("./img/custom_domain_web_7.png").default} />

まず、上記の画像の `Enter the domain you want to use` の直下にある入力フィールドにあなたがハンドルとして設定したいドメインを入力してください。次に、画面の下部にある `Verify DNS Record` ボタンを押します。

<Image width="500" mb="1rem" src={require("./img/custom_domain_web_8.png").default} />

もしあなたが設定した DNS レコードの設定が正しい場合は、`Verify DNS Record` ボタンを押した後で上記画像のように `Domain verified!` メッセージが出力されます。あとは、`Update to xxxxx` ボタンを押すとあなたが設定したドメインがハンドルしてアカウントに設定されます。

:::tip
もし DNS 認証で失敗し、`Domain verified!` が表示されない場合は、DNS レコードの設定が反映されるまで数分ほど待つか、[DNS レコードの設定](#3-dns-の設定)を見直してください。
:::
