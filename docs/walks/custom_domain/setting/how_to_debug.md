---
sidebar_position: 3
---

import Image from "@site/src/components/image";

# うまくいかない時は？

## デバッグツール

カスタムドメイン設定がうまく認証できないときは、デバッグツールで正しく設定できているかを確認してみましょう。
**[Bluesky Debug Page](https://bsky-debug.app/handle)** が公式から提供されています。こちらを使用することで、かんたんに原因を見つけることができます。
テキストボックスにカスタムドメインを入力し、 `Debug handle` ボタンを押すと、ハンドルが正しく設定されているか自動的に検証してくれます。

正しく設定できている場合、緑色のバナーとともに `Passed verification` と表示されます。

<Image width="800" mb="1rem" src={require("../img/debug_page/debug_page_verified.png").default} />

失敗している場合、黄色いバナーとともに `Verification via DNS and HTTP failed` のようなメッセージが表示されます。

<Image width="800" mb="1rem" src={require("../img/debug_page/debug_page_failed.png").default} />

バナーの下に、 DNS で検証した結果と、 HTTP で検証した結果の 2 つが表示されます。検証は両方とも成功する必要はありません。 **どちらか片方のみ成功していれば OK** です。

検証される項目は以下の様になっています。

## DNS 認証

:::info
**[DNS レコード編](use_dns_record.md)** で設定した場合、こちらの項目を確認してください
:::

`DNS Verification Method` と書かれた部分に注目します。

### 1. TXT レコードの有無

期待された TXT レコード( `_atproto` )が存在するか検証します。

### 2. レコードの値

期待されたフォーマットで値が設定されているか検証します。

### 3. パブリック DNS で名前解決可能か

パブリックな DNS から TXT レコードが解決可能かどうか検証します。
設定した DNS サーバーが外部からの問い合わせに応答できているか確認してみてください。

## HTTP 認証

:::info
**[.well-known 編](use_wellknown.md)** で設定した場合、こちらの項目を確認してください
:::

`HTTP Verification Method` と書かれた部分に注目します。

### 1. エンドポイントの検証

`https://<handle>/.well-known/atproto-did` に HTTPS で接続し、エンドポイントの URL が有効であるか検証します。

### 2. エンドポイントから返却される値の検証

期待されたフォーマットで返却されるか検証します。
