/*
ワーク05_練習問題

以下のようなプログラムがありますが、未完成です。

変数jsonStringを宣言して、JSON形式の文字列があります。

変数jsonStringをJavaScriptの配列に変換したうえで、
配列の要素を実行結果のように表示する処理を作成して
ください。

実行結果
Bob
Tom
Alice
*/

const jsonString = `["Bob","Tom", "Alice"]`;

const data = JSON.parse(jsonString);

for (const e of data) {
    console.log(e);
}
