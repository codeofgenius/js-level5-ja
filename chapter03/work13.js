/*
ワーク13_練習問題

以下のようなプログラムがありますが、未完成です。

アプリケーションが想定していない不正な値（今回の場合は
年齢として不適切な値）が入力された際、意図的にエラーを
発生させて後続の処理を中断させる方法です。

tryブロックで変数ageを宣言して、151を代入しています。

その後、if文で変数ageの範囲を判定しています。変数ageが
-1以下、または151以上の場合、エラーにします。

if文の内側で「throw」と「new Error」を利用して、エラーを
発生させる処理を作成してください。

「new Error」の引数として、「age is error」を渡します。

try-catch文の構造自体を変更してはいけません。
catchブロックを修正してはいけません。

実行結果のように表示してください。

実行結果
age is error
*/

try {
    // 変数ageを宣言
    const age = 151;
    // 変数ageが指定された範囲外であればエラーにする
    if (age <= -1 || age >= 151) {
        // ここでエラー発生させる
        throw new Error('age is error');
    }
    console.log(`I am ${age} years old`);
} catch (error) {
    console.log(error.message);
}
