/*
ワーク12_練習問題

以下のようなプログラムがありますが、未完成です。

定義されていない関数を呼び出した場合、プログラムが
異常終了します。これを防ぐためにtry-catch-finally文を
使用します。

以下のプログラムをtry-catch-finally文で囲み、発生した
エラーをキャッチしてください。

catchブロックの中で、発生したErrorオブジェクトのmessage
プロパティを表示してください。

finallyブロックの中で、「プログラム終了」を表示してください。

実行結果のように表示してください。

実行結果
doSomething is not defined
プログラム終了
*/

try {
    doSomething();
} catch (error) {
    console.log(error.message);
} finally {
    console.log('プログラム終了');
}
