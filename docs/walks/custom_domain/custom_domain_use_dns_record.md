---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from "@site/src/components/image";

# カスタムドメインの設定 DNSレコード編

## 設定方法

### 1. DNS 設定項目の確認

購入したドメインについて DNS (ドメインに紐づく IP などの解決を行うシステム) の設定を行う必要があります。ここではその際に必要な情報を Bluesky から確認します。

:::info
以降 **[公式の Web クライアント](https://bsky.app)** を使用して、そのスクリーンショット等を記載しますが、Android や iOS のモバイルアプリについても操作方法は基本的には同じです。
:::

#### 1. `Setting` から `Change handle` を選択

画面左側のメニューから `Settings` (設定) を選択します。次に、設定画面の `Advanced` セクションの `Change handle` (ハンドルの変更) を選択します。

<Image height="350" mb="1rem" mr="20px" src={require("./img/custom_domain/custom_domain_web_0.png").default} />
<Image height="350" mb="1rem" src={require("./img/custom_domain/custom_domain_web_1.png").default} />

#### 2. `I have my own domain` リンクを選択

出てきたポップアップの `I have my own domain` (自分のドメインを持っています) を選択します。

<Image width="500" src={require("./img/custom_domain/custom_domain_web_2.png").default} />

#### 3. 設定内容のコピー

DNS の設定項目の内容である `did=` から始まる文字列をコピーします。

<Image width="500" mb="1rem" src={require("./img/custom_domain/custom_domain_web_3.png").default} />

ここまでの工程で上記の画面が出力されたと思いますので、赤枠の `Value:` の下にある `did=` で始まる文字列をコピーしてください。上記の画像の例だと`did=did:pic:iijrtk7ocored6zuziwmqq3c` をコピーすることになります。ここでコピーした値は次で DNS の設定を行う際に使用します。

### 2. DNS の設定

:::info
カスタムドメインを設定する際に DNS の設定が必要になります。あなたが所有しているドメインの管理サービスに応じて設定を行ってください。今回の例では [Cloudflare Registrar](https://www.cloudflare.com/ja-jp/products/registrar/) と [お名前.com](https://www.onamae.com/) の設定画面を例として使用します。
:::

#### 1. DNS 設定画面に遷移

ドメインの管理サービスにログインします。その後に DNS の設定画面にアクセスします。

<Tabs groupId="service" queryString>
  <TabItem value="cloudflare" label="Cloudflare Registrar" default>
<br/>

ホーム画面から取得したドメインを選択します。

<Image width="800" mb="1rem" src={require("./img/custom_domain/custom_domain_web_4_c_1.png").default} />

`DNS` タブを選択します。

<Image width="350" src={require("./img/custom_domain/custom_domain_web_4_c_2.png").default} />

  </TabItem>

  <TabItem value="onamae" label="お名前.com">
<br/>

ホーム画面から、ドメインの DNS 設定を選択します。

<Image width="500" mb="1rem" src={require("./img/custom_domain/custom_domain_web_4_o_1.png").default} />

購入したドメインをチェックし、次へを選択します。

<Image width="500" src={require("./img/custom_domain/custom_domain_web_4_o_2.png").default} />

  </TabItem>
</Tabs>

#### 2. TXT レコードの追加

DNS の設定画面に遷移できたら、TXT レコードを追加します。まずは、レコードの追加画面に遷移します。

<Tabs groupId="service" queryString>
  <TabItem value="cloudflare" label="Cloudflare Registrar" default>

<Image width="800" mb="1rem" src={require("./img/custom_domain/custom_domain_web_5_c_1.png").default} />

レコードの入力画面が出力されると思うので、次のように入力します。

| フィールド名 | 値                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------- |
| **Type**     | TXT                                                                                             |
| **Name**     | \_atproto                                                                                       |
| **Content**  | [先の手順](#3-設定内容のコピー) で Bluesky 公式クライアントからコピーした `did=` で始まる文字列 |

<Image width="800" mb="1rem" src={require("./img/custom_domain/custom_domain_web_6_c_1.png").default} />

入力したら、下の `Save` ボタンを押します。

  </TabItem>

  <TabItem value="onamae" label="お名前.com">

<Image width="500" mb="1rem" src={require("./img/custom_domain/custom_domain_web_5_o_1.png").default} />

レコードの入力画面が出力されると思うので、次のように入力します。

| フィールド名 | 値                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------- |
| **ホスト名** | \_atproto                                                                                       |
| **TYPE**     | TXT                                                                                             |
| **VALUE**    | [先の手順](#3-設定内容のコピー) で Bluesky 公式クライアントからコピーした `did=` で始まる文字列 |

<Image width="800" mb="1rem" src={require("./img/custom_domain/custom_domain_web_6_o_1.png").default} />

入力したら、右の `追加` ボタンを押してください。**追加を押しただけでは、設定は完了していません。** 追加後、画面の一番下にあるボタンから確認画面に遷移して確認を完了してください。

<Image width="500" src={require("./img/custom_domain/custom_domain_web_6_o_2.png").default} />

  </TabItem>
</Tabs>

以上で DNS の設定は完了です。

### 3. Bluesky で DNS 認証

DNS の設定が完了したら、Bluesky の公式クライアントの `Change Handle` 画面に戻ってください。次の画像の画面です。

<Image width="500" mb="1rem" src={require("./img/custom_domain/custom_domain_web_7.png").default} />

まず、上記の画像の `Enter the domain you want to use` の直下にある入力フィールドにあなたがハンドルとして設定したいドメインを入力してください。次に、画面の下部にある `Verify DNS Record` ボタンを押します。

<Image width="500" mb="1rem" src={require("./img/custom_domain/custom_domain_web_8.png").default} />

もしあなたが設定した DNS レコードの設定が正しい場合は、`Verify DNS Record` ボタンを押した後で上記画像のように `Domain verified!` メッセージが出力されます。あとは、`Update to xxxxx` ボタンを押すとあなたが設定したドメインがハンドルしてアカウントに設定されます。

:::tip
もし DNS 認証で失敗し、`Domain verified!` が表示されない場合は、DNS レコードの設定が反映されるまで数分ほど待つか、[DNS レコードの設定](#3-dns-の設定)を見直してください。
:::
