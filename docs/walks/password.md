---
sidebar_position: 3
---

import Image from "@site/src/components/image";

# パスワードの取り扱い

:::danger 必読
Bluesky 特有のパスワードの取り扱いについて記載しています。非公式アプリ等を使用する際に App Password を使用していない方は読まれることを **強く** お勧めします。
:::

## App Password

[App Password 📖](/docs/extras/reference#app-password) は、登録時に設定したパスワードの代わりに発行できる別のパスワードです。App Password は非公式 (サードパーティー) のアプリケーション (アプリ) に本来のパスワードの代わりに入力するためのものです。これによって、本来のパスワードをアプリに渡す必要がなくなり、もしアプリに悪意があった場合に影響を最小限に抑えることが可能です。同様に、アプリが App Password を漏洩してしまった場合でも、その影響を最小限に抑えることが可能です。そのため、もしあなたがサードパーティのアプリを使用する際には App Password を使用することが**強く推奨されています。**

App Password は本来のパスワードとほとんど同じ権限を持ちますが、アカウントの削除やアカウントの移行など、破壊的なアクションは制限されています。また、追加の App Password を作成することも制限されています。一方で、それ以上の細かい制約を設定することはできません。例えば投稿の削除やフォロワーの変更を許可しない App Password などを発行することはできません。

また、 **App Password は使用するアプリ毎に作成することをお勧めします。** 理由としては、使用しなくなったアプリがある場合、その App Password を削除して使えなくするといった管理ができるようになるためです。数は多くなると管理が大変と思われるかもしれませんが App Password は気軽に再発行できるものなので、分からなくなったら再発行ぐらいの気持ちで、あまり管理をガチガチにする必要はありません。

## 発行方法

App Password は次の手順で発行することが可能です。

:::info
**[公式の Web クライアント](https://bsky.app)** を使用した方法を記述しますが、Android や iOS のモバイルアプリについても操作方法は同じです。
:::

### 1. `Settings` から `App passwords` を選択

画面左側のメニューから `Settings` (設定) を選択します。次に、設定画面の `Advanced` セクションの `App passwords` を選択します。

<Image height="350" mb="1rem" mr="20px" src={require("./img/password/app_password_web_0.png").default} />
<Image height="350" mb="1rem" src={require("./img/password/app_password_web_1.png").default} />

### 2. `Add App Password` を選択

<Image width="500" mb="1rem" src={require("./img/password/app_password_web_2.png").default} />

### 3. App Password の名前を入力して `Create App Password` を選択

App Password の名前を記述します。基本的には管理のしやすさの観点から、発行する App Password を使う予定のアプリの名前にしておくのをお勧めします。

<Image width="500" mb="1rem" src={require("./img/password/app_password_web_3.png").default} />

:::tip
App Password の名前に入力できるのは以下の文字だけです。

- **半角英字**
- **半角数字**
- **スペース**
- **ダッシュ（"-"）**
- **アンダースコア（"\_"）**

また、許容される文字数は **_4 文字以上 32 文字以内_** です。
:::

### 4. 発行された App Password をコピーして安全な場所に保存

**App Password はこのタイミングでしか表示されません。** そのため、このタイミングでコピーして安全な場所に保存してください。

<Image width="500" mb="1rem" src={require("./img/password/app_password_web_4.png").default} />

:::danger
発行された App Password は **_絶対_** に他者と共有しないでください。

もしあなたが発行した App Password がなんらかの理由で他者に使用されたと思われる場合は、速やかに以下のように該当の App Password を削除してください。また、不要になった App Password や、忘れてしまった App Password についても同様に削除するようにしてください。

<Image width="500" mb="1rem" src={require("./img/password/app_password_web_5.png").default} />
:::
