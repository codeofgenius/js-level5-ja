/*
ワーク02_最終問題

以下のようなプログラムがありますが、未完成です。

以下のプログラムでは、オブジェクトtriangleのメソッドgetAreaを
変数getAnswerに代入しています。この状態のままgetAnswer()を呼び出しても、
thisが不明なため正しく表示されません。

変数getAnswerに対してapplyメソッドを使用して呼び出してください。その際、
第1引数にオブジェクトtriangleを指定し、関数内部のthisがtriangleを
指すようにしてください。

実行結果のように表示する処理を作成してください。

applyメソッドの呼び出し部分以外を修正してはいけません。

実行結果
25
*/

// オブジェクトtriangleが定義されています
const triangle = {
    base: 5,
    height: 10,
    getArea: function () {
        return (this.base * this.height) / 2;
    },
};

// オブジェクトtriangleのメソッドgetAreaを
// 変数getAnswerに代入しています。
const getAnswer = triangle.getArea;

// 以下の部分で変数getAnswerをapplyメソッドで呼び出します
// applyメソッドでtriangleオブジェクトを連結します
const result = getAnswer.apply(triangle);
console.log(result);
