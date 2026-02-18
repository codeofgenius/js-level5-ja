// 関数スコープ
// モジュールスコープの変数定義
const name = 'Bob';

// モジュールスコープの変数呼び出し
console.log(`Hello, ${name}`);

// 関数の定義1
function showName1() {
    // 関数スコープの変数定義
    const name = 'Maria';
    // 関数スコープの変数呼び出し
    console.log(`Hello, ${name}`);
}

// 関数の定義2
function showName2() {
    // 関数スコープの変数定義
    const name = 'Donald';
    // 関数スコープの変数呼び出し
    console.log(`Hello, ${name}`);
}

// 関数の呼び出し
showName1();
showName2();
