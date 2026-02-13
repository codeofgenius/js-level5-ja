// thisの取り扱いの問題点
// オブジェクトとメソッドの定義
const person = {
    name : 'Bob',
    sayName: function( message ) {
        // thisは呼び出し元によって異なる
        console.log(`${message}, ${this.name}`);
    }
};

// sayNameメソッドはpersonオブジェクトに所属する
// thisはpersonオブジェクト
// Hello, Bob
person.sayName('Hello');

// person.sayNameをsay変数に代入する
const say = person.sayName;

// 代入したメソッドを関数として呼ぶ
// このsay関数はどのオブジェクトにも所属していない
// thisはundefinedとなるためエラー
// Hello, undefined
say('Hello');
