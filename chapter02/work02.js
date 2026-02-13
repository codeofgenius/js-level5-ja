// ブロックスコープ
// グローバルスコープの変数定義
const name = "Bob";

// グローバルスコープの変数呼び出し
console.log(`Hello, ${name}`);

{
    // ブロックスコープの変数
    const name = "John";
    // ブロックスコープの変数呼び出し
    console.log(`Hello, ${name}`);
}

// グローバルスコープの変数呼び出し
console.log(`Hello, ${name}`);
