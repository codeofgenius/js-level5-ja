// デフォルト引数
// 関数の定義
function sayHello( name = 'Bob', age = 15 ) {
    console.log( `I am ${name}` );
    console.log( `I am ${age} years old` );
    console.log( '----' );
}

// 関数の呼び出し
// 2個の引数を渡すのでデフォルト引数は利用しない
sayHello( 'Nancy', 18 );
// 1個の引数を渡す。「age」はデフォルト引数を利用する
sayHello( 'Tom' );
// 0個の引数を渡す。「name」と「age」はデフォルト引数を利用する
sayHello();
