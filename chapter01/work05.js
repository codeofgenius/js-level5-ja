// 関数の引数と分割代入
// 関数の定義　引数をオブジェクトの分割代入で受け取る
function showUser( {name, city } ) {
    console.log( `I am ${name}` );
    console.log( `I am living in ${city}` );
}

// 各変数の定義
const name = 'Alice';
const age = 15;
const hobby = 'Cooking';
const city = 'New York';
// 短縮記述でオブジェクトの作成
const user = { name , age, hobby, city };

// 関数の呼び出し　引数はオブジェクト
showUser( user );
