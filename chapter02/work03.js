// 即時実行関数
// 関数の宣言と実行を同時に行う
(function () {
    const name = 'John';
    console.log(`Hello, ${name}`); // Hello, John
})();

// 関数の宣言と実行を同時に行う 2個の引数を渡す
(function (num1, num2) {
    console.log(num1 * num2); // 15
})(5, 3);
