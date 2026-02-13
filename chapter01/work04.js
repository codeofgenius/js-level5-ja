// 可変長引数とレストパラメータ
// 関数の定義　引数をレストパラメータで配列として受け取る
function getTotal( ...data ) {
    let total = 0;
    for ( const value of data ) {
        total += value;
    }
    return total;
}

// 関数の呼び出し
const result = getTotal( 2, 5, 6, 8, 9 );
// 戻り値の表示
console.log( result );
