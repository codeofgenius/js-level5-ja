// 関数の戻り値
// 関数の定義
function createMessages(name, age, hobby) {
    return ({
        name : `My name is ${name}`,
        age : `I am ${age} years old`,
        hobby : `My hobby is ${hobby}`,
    });
}

// 関数の呼び出し
const messages = createMessages('Tom', 14, 'Swimming');
// 戻り値の表示
for( const m of Object.values(messages) ) {
    console.log( m );
}
