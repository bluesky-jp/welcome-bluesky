---
sidebar_position: 2
---

import Image from "@site/src/components/image";

# 日本語話者の探し方

## とりあえず日本人を探す

Bluesky [公式 Web](https://bsky.app/) または、iOS, Android 公式アプリからログインしている人は、日本語話者 [カスタムフィード 📖](/docs/extras/reference#カスタムフィード) である [Japanese Cluster](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt/feed/cl-japanese) を見れば、日本語話者が見つかると思います。 (リンクにアクセスすると、Web または、アプリが立ち上がりそのカスタムフィードが表示されます)

## 日本人のトレンド投稿を探す

とはいえ、このカスタムフィードでは、投稿が多すぎて何がなんだか、と思う人も多いと思います。そこで、日本語話者におけるトレンドの投稿を取得する方法を説明します。トレンド投稿とは、投稿の中で直近で多くのリアクション (お気に入りや再投稿) を貰っているもののことを指します。

### 1. `Settings` から `Content languages` を選択

まず、設定からコンテンツ言語を日本語にします。コンテンツ言語は、カスタムフィードにおいて、どの言語の投稿を取得するか？ という設定にもなります。 **Bluesky のアプリが日本語化される設定ではありません。** 画面左側のメニューから、`Settings` (設定) を選択します。次に、設定画面の `Advanced` セクションの `Content languages` (コンテンツ言語) を選択します。

<Image width="600" mb="1rem" src={require("./img/japanese/content_languages_web_0.png").default} />

### 2. `Japanese` を選択

出てきたポップアップから `Japanese` (日本語) を選択します。設定後、ポップアップの一番下にある `Done` (完了) のボタンを忘れずに選択してください。

<Image width="600" mb="1rem" src={require("./img/japanese/content_languages_web_1.png").default} />
<Image width="600" mb="1rem" src={require("./img/japanese/content_languages_web_2.png").default} />

### 3. `What's hot` のカスタムフィードを選択

[What's hot](https://bsky.app/profile/did:plc:z72i7hdynmk6r22z27h6tvur/feed/whats-hot) のカスタムフィードを見に行くと、今のドレンドの投稿を確認できると思います。コンテンツ言語の設定を正しくしても、英語の投稿とかがある程度混じってしまうのは仕様です。

:::info
コンテンツ言語の設定によってカスタムフィードの投稿がフィルタされる機能は、Bluesky 公式のアプリ (Web, iOS, Android) の実装です。そのため、非公式アプリではこの機能が実装されていない場合があることに注意が必要です。
:::
