---
sidebar_position: 2
---

# リファレンス

## このページは？

このページは、本ドキュメントにおいて紹介されている単語について、説明するページになっています。 Bluesky に関連する、しないに関わらず、説明の中で使用された単語について補完して説明することを目的にしています。**ドキュメントの文中に 📖 の絵文字と合わせて表示されるリンクは、このリファレンスへのリンクになっています。**

---

### API

Application Programming Interface の略。特定の Web サービスの機能を、他のサービスのソフトウェアに組み込んで使用する際に用いられるもの、及びその仕様について指す。Bluesky については、公式ページに[ドキュメント](https://atproto.com/docs)がまとめられています。この API によって、一般開発者がそのサービスを扱えるようになります。

---

### App Password

Bluesky 公式アプリで発行できる、本来のパスワードの代わりになるパスワード。本来のパスワードより権限 (できること) が制限され、かつ公式アプリ上から失効 (使えなくする) ことが可能です。詳しくは [パスワードの取り扱い](/docs/walks/password.md) を参照してください。

---

### AT Protocol

WIP

---

### DID

Bluesky におけるユーザー ID の一種。一般的にはこの ID をユーザーが気にすることはあまりありません。DID はランダムな文字列になっていて、アカウントを作成した後は変更することができません。DID と [ハンドル 📖](/docs/extras/reference#ハンドル) は紐付いて管理されており、相互に参照することが可能です。ネットワークにおける DNS と IP の関係と似ています。

---

### Mastodon

最も有名な [分散 SNS 📖](/docs/extras/reference#分散-sns)。既に多くのユーザーが使用しており、様々なコミュニティがサーバーが立てている。機能としては [X](/docs/extras/reference#x-旧-twitter) と非常に似ていますが、分散 SNS として検索などの複雑なシステムが実装されておらず、ややシンプルな機能に纏まっています。

---

### X (旧 Twitter)

Jack Dorsey が創設したマイクロブログ SNS。短文投稿に特化したシステムが特徴で、英語圏や日本語圏では特に使われています。Bluesky はこの SNS に強く影響を受けており、その問題点の解決に一定の重きが置かれています。

X (当時は Twitter) が[イーロン・マスク](https://twitter.com/elonmusk) に買収されて以降、[API 📖](/docs/extras/reference#api) の有料化や、リクエスト制限、Twitter から X への名前の変更など、サービスの根幹に関わる部分の変更が次々に行われました。あまりにも唐突な変更であるため、ユーザーが混乱し、一部のユーザーは X から離れる動きが出ています。Bluesky はその移行先の候補の一つとして有力視されています。

---

### カスタムフィード

ユーザーや Bluesky 運営が作成した、独自のタイムラインのことを指します。特定ルール、例えば、ある文字が含まれる投稿をピックアップしてタイムラインに纏めたり、ユーザーレベルでの初投稿の投稿のみを纏めたりと、自由度の高いタイムラインを作成することが可能です。カスタムフィードを見る・作る方法については、[カスタムフィード](/docs/extras/customfeed) を参照してください。

---

### ドメイン

ドメインとは `bsky.app` など、インターネット上の住所を示すものです。ドメインはは一般的に Web サイトを作るときに、その URL のアドレスの元となる部分として使用するために使われるものです。(`https://www.google.com/` は URL であれば、`google.com` がドメインになります。) ドメインには所有者・団体が明確に定まっており、一般的な環境化では詐称することは出来ません。Bluesky ではそのドメインを [ハンドル 📖](/docs/extras/reference#ハンドル)として用いることによって、ユーザーの認証とすることができます。 方法については、[カスタムドメイン](/docs/walks/custom_domain) を参照してください。

#### TIPS: サブドメイン

ドメインの下位に位置するドメインのことを指します。例えば、`bsky.app` というドメインのサブドメインとして、`xxx.bsky.app` というドメインが存在します。サブドメインは、ドメインの所有者が自由に作成することができます。Bluesky では、サブドメインも[ハンドル 📖](/docs/extras/reference#ハンドル)として用いる事ができます。

---

### ハンドル

Bluesky におけるユーザー ID の一種。公式のサーバー `bsky.social` であれば、登録時に指定した文字列と合わせて、 `???.bsky.social` のように後にサーバーのドメインが入る形の文字列になります。ハンドルはコミュニケーションにおいても使用され、ユーザーに対してメンションするときにも、`@???.bsky.social` と記述して使用します。 **ハンドルは後からでも変更が可能ですが、その場合変更前のハンドルは他の人が使用可能になるので、なりすましなどに注意が必要です。** また、[ドメイン 📖](/docs/extras/reference#ドメイン) をハンドルとして使用することも可能です。方法については、[カスタムドメイン](/docs/walks/custom_domain) を参照してください。 [DID 📖](/docs/extras/reference#did) とハンドルは紐付いて管理されており、相互に参照することが可能です。ネットワークにおける DNS と IP の関係と似ています。

---

### コンテンツモデレーション

WIP

---

### 分散 SNS

複数の同じシステムを持つサーバーが連携して構築している SNS のことを指します。同じシステムであれば、登録をしたサーバーが異なる場合でも相互にコミュニケーションができるのが特徴です。同じ分散 SNS として有名なものに [Mastodon 📖](/docs/extras/reference#mastodon) が存在しますが、Bluesky とは異なるシステムを採用しているので、Bluesky と Mastodon では相互にコミュニケーションを行うことは基本的にはできません。
