// メソッドでのthis
// オブジェクトとメソッドの定義
const person = {
    name : "Bob",
    age : 15,
    sayHello : function() {
        // thisはベースオブジェクトのperson
        console.log( this );
    },
};

person.sayHello();
