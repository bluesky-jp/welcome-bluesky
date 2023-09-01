---
sidebar_position: 1
---

import Image from "@site/src/components/image";

# 知り合いの見つけ方

## 検索から見つける

Bluesky にはユーザー検索の方法が存在するので、知り合いのユーザー名などがはっきりしている場合は、検索から探すのが一番です。Bluesky の検索は、PC だと画面右上部の入力欄、スマホアプリだと、メニューから `Search` から行うことができます。 Bluesky の検索にはちょっと癖があるので、それについて解説します。

検索の入力欄に、検索ワードを入力すると、その内容が変わる度に検索結果が表示されます。**基本的にユーザー検索はこの検索方法を使用することをお勧めします。** 検索すると以下のように、ユーザー一覧が表示され、その中のユーザーを選択すると、ユーザー詳細画面に遷移します。

<Image width="400" mb="1rem" src={require("./img/search/search_user_web_0.png").default} />

:::caution
この入力欄を確定すると、投稿・ユーザー検索結果一覧ページが出てきます。 **この検索結果について日本語で検索した場合に、期待した検索結果にならない場合があります。** 下記の画像は同じ検索ワードでユーザー検索した結果ですが、結果で出てきたユーザーがほぼ全て異なっており、こちらの方は期待した検索結果とは異なるものでした。

<Image width="400" src={require("./img/search/search_user_web_1.png").default} />
:::

:::info
=======
Bluesky にも X と同様に検索に引っかからないアカウント、というものが存在しますが、基本的にはスパムやなりすましアカウントなので、検索で見つからなかった場合は別の方法を検討することをお勧めします。知り合いが X にアカウントを持っている場合、次の方法で見つかる場合もあるので併せて試してみてください。
:::

## X の知り合いを見つける

Bluesky を既にはじめていて、[X 📖](/docs/extras/reference#x-旧-twitter) にもアカウントが存在するユーザーは、X に Bluesky のアカウントを呟いている可能性があります。X で検索をすることによって、見つけることができるかもしれません。フォローしている人で、かつ Bluesky のアカウントのプロフィール URL を呟いているユーザーを検索するには `filter:follows -filter:retweets -filter:replies bsky.app` のように検索を行い、[このページ](https://twitter.com/search?q=filter%3Afollows%20-filter%3Aretweets%20-filter%3Areplies%20bsky.social&src=typed_query&f=live) で結果が確認できます。
