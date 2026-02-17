/*
ワーク11_練習問題

以下のようなプログラムがありますが、未完成です。

JavaScriptでは、関数ではないデータ（文字列など）を関数として
実行しようとすると、プログラムが異常終了（クラッシュ）します。
これを防ぐためにtry-catch文を使用します。

以下のプログラムをtry-catch文で囲み、発生したエラーを捕捉（キャッチ）
してください。

catchブロックの中で、発生したErrorオブジェクトのmessageプロパティを
コンソールに表示してください。実行結果のように表示してください。

実行結果
name is not a function
*/

try {
    const name = 'Bob';
    name();
} catch (error) {
    console.log(error.message);
}
