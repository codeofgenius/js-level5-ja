/*
ワーク12_練習問題

以下のようなプログラムがありますが、未完成です。

以下のプログラムは、オブジェクトTaxCalculatorのメソッドを
一度変数に代入したため、thisの参照が外れてしまっています。

変数calculateに対して、bindメソッドを使い、thisが常にTaxCalculatorを
指すように固定した新しい関数を作成してください。

その新しく作成された関数を呼び出し、引数として0.1を渡してください。

最終的な計算結果をconsole.log等で表示し、実行結果のように表示してください。

bindメソッドの呼び出し部分以外（既存のオブジェクト定義など）を修正してはいけません。

実行結果
220
*/

// オブジェクトTaxCalculatorが定義されています
const TaxCalculator = {
    price: 200,
    calculate: function (taxRate) {
        return Math.floor(this.price * (1 + taxRate));
    },
};

// オブジェクトTaxCalculatorのメソッドcalculateを
// 変数calculateに代入しています
const calculate = TaxCalculator.calculate;

// 以下の部分で変数calculateをbindメソッドで呼び出します
// bindメソッドでオブジェクトTaxCalculatorを連結します
// bind後のメソッドを呼び出します。引数として0.1を渡します
// 戻り値を表示します
const getTax = calculate.bind(TaxCalculator);
const result = getTax(0.1);
console.log(result);
