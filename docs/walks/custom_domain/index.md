---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# カスタムドメイン

## 概要

Bluesky は [AT Protocol 📖](/docs/extras/reference#at-protocol) を基盤に構築されており、**あなたが所有している [ドメイン 📖](/docs/extras/reference#ドメイン) をアカウントの [ハンドル 📖](/docs/extras/reference#ハンドル) として設定することができます。** アカウントを登録した際に付けられた `???.bsky.social` のようなハンドルのままでも Bluesky を使う際に大きな問題はありませんが、カスタムドメインを設定することで、**ドメインに関連付けられている Web サービス等を通じて、アカウントの持ち主が本物であることを証明することができます。**

### 得られる信頼

[ドメイン 📖](/docs/extras/reference#ドメイン) は一般的には Web サイトを作成する際に取得するもので、ドメインに紐付いた Web サイトがあることが一般的です。そのため、ドメインを持っていることはその Web サイトの管理者であることを示します。それと、カスタムドメインの機能を併せて、Bluesky のハンドルをそのドメインに変更すると、その Web サイトの管理者と Bluesky のアカウントが同一人物であることを証明することができます。

逆に言えば、それ以外のことはカスタムドメインでは証明できません。例えば `taro.org` というハンドルであった場合、そのアカウントがそのドメインである `taro.org` の所有者であることは分かりますが、そのアカウントが誰か？ は分かりません。それ以上の情報は、そのアカウントのプロフィールに記載されている情報を参照する必要があります。

:::tip
例えば、日本の衆議院議員である河野太郎氏を例に考えてみましょう。河野太郎氏が今までに Bluesky にアカウントを作成した事実はありませんが、仮に河野太郎氏が `tarokono.bsky.social` というアカウントを作成したとして、どうやってこのアカウントの持ち主が本物の河野太郎氏であると証明できるでしょうか？ Bluesky におけるこの問題の最も確実な解決策は、河野太郎氏または河野太郎氏の組織が所有しているドメインである `taro.org` を `tarokono.bsky.social` の代わりにアカウントのハンドルとして設定することです。なぜなら、`taro.org` のドメインを所有しているのは河野太郎氏または河野太郎氏の組織以外にはあり得ず、 `taro.org` のドメインをアカウントのハンドルに設定できるのは、河野太郎氏または河野太郎氏の組織だけだからです。
:::

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList />
```
