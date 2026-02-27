/*
ワーク05_最終問題

以下のようなプログラムがありますが、未完成です。

getPlayerName、getHero、getMagicianという3個の
関数を呼び出していますが、このファイルには、
これらの関数を定義していません。

「./game.mjs」のファイルでESMモードを利用して
エクスポートされている関数をインポートしてください。

実行結果のように表示する処理を作成してください。

以下のようにインポートを行います。

| インポート名    | デフォルト / 通常 | 読み込み元ファイル     | 
| --------------- | ----------------- | ---------------------- | 
| getPlayerName   | デフォルト        | ./game.mjs             | 
| getHero         | 通常              | ./game.mjs             | 
| getMagician     | 通常              | ./game.mjs             | 

実行結果
[ 'Bob', 'Tom', 'Sam', 'Alice', 'Dorothy' ]
[
  { name: 'Bob', hp: 20, mp: 10, job: 'Hero' },
  { name: 'Dorothy', hp: 20, mp: 30, job: 'Hero' }
]
[
  { name: 'Sam', hp: 20, mp: 40, job: 'Magician' },
  { name: 'Alice', hp: 10, mp: 50, job: 'Magician' }
]
*/

// 以下の部分でインポートを行います

//以下の部分を修正してはいけません
// 関数の呼び出し
console.log(getPlayerName()); // 名前を取得
console.log(getHero()); // Heroを取得
console.log(getMagician()); // Magicianを取得
