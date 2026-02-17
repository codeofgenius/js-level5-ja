// call
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

// person.showNameをshow変数に代入する
const show = person.showName;

// callを利用してthisの値を指定する
// Hello, Bob
show.call(person, 'Hello');

/*
// 以下のように呼ぶと、Hello, undefinedになる
show('Hello');
*/
