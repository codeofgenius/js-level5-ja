/*
ワーク06_練習問題

以下のようなプログラムがありますが、未完成です。

変数playerを宣言して、オブジェクトを代入しています。

オブジェクトplayerをJSON形式の文字列に変換して
実行結果のように表示する処理を作成してください。

実行結果
{
  "name": "Bob",
  "hp": 100,
  "mp": 30,
  "job": "Magician"
}
*/

const player = {
    name: 'Bob',
    hp: 100,
    mp: 30,
    job: 'Magician',
};

const playerStr = JSON.stringify(player, null, '  ');
console.log(playerStr);
