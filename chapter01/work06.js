// 無名関数
// 無名関数の定義　関数を変数に代入する
const sayHello = function( name = 'Tom' ) {
    console.log( `Hello, ${name}` );
};

// 無名関数の呼び出し 引数ありなのでデフォルト引数を利用しない
sayHello( 'Buzz' );
// 無名関数の呼び出し 引数なしなのでデフォルト引数を利用する
sayHello();
