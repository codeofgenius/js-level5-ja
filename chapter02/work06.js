// thisの取り扱いの問題点
// オブジェクトとメソッドの定義
const person = {
    name: 'Bob',
    showName: function (message) {
        // thisは呼び出し元によって異なる
        console.log(`${message}, ${this.name}`);
    },
};

// showNameメソッドはpersonオブジェクトに所属する
// thisはpersonオブジェクト
// Hello, Bob
person.showName('Hello');

// person.showNameをsay変数に代入する
