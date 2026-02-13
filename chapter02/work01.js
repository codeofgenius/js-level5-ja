// グローバルスコープと関数スコープ
// グローバルスコープの変数定義
const name = "Bob";

// グローバルスコープの変数呼び出し
console.log(`Hello, ${name}`);

// 関数の定義1
function sayName1() {
    // 関数スコープの変数定義
    const name = "Maria";
    // 関数スコープの変数呼び出し
    console.log(`Hello, ${name}`);
}

// 関数の定義2
function sayName2() {
    // 関数スコープの変数定義
    const name = "Donald";
    // 関数スコープの変数呼び出し
    console.log(`Hello, ${name}`);
}

// 関数の呼び出し
sayName1();
sayName2();
