/*
ワーク12_練習問題

以下のようなプログラムがありますが、未完成です。

JavaScriptでは、定義されていない関数を呼び出した場合、
プログラムが異常終了（クラッシュ）します。これを防ぐために
try-catch-finally文を使用します。

以下のプログラムをtry-catch-finally文で囲み、発生した
エラーを捕捉（キャッチ）してください。

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
