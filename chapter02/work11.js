/*
ワーク11_練習問題

以下のようなプログラムがありますが、未完成です。

以下のプログラムでは、オブジェクトplayerのメソッドshowStatusを
変数displayに代入しています。この状態のままdisplay()を呼び出しても、
thisが不明なため正しく表示されません。

変数displayに対してcallメソッドを使用して呼び出してください。
その際、第1引数にオブジェクトplayerを指定し、関数内部のthisが
playerを指すようにしてください。

実行結果のように表示する処理を作成してください。

callメソッドの呼び出し部分以外を修正してはいけません。

実行結果
name ==> Alice
hp   ==> 20
mp   ==> 30
*/

// オブジェクトplayerが定義されています
const player = {
    name: 'Alice',
    hp: 20,
    mp: 30,
    showStatus: function () {
        console.log(`name ==> ${this.name}`);
        console.log(`hp   ==> ${this.hp}`);
        console.log(`mp   ==> ${this.mp}`);
    },
};

// オブジェクトplayerのメソッドshowStatusを
// 変数displayに代入しています。
const display = player.showStatus;

// 以下の部分で変数displayをcallメソッドで呼び出します
// callメソッドでpersonオブジェクトを連結します
display.call(player);
