// デフォルト引数のある関数　2番目の引数はなくてもよい
function add( num1, num2 = 5) {
    return num1 + num2;
}

// 1番目の引数は必須、2番目の引数はなくてもよい
console.log(add(3)); // 8
