// CJSでエクスポート
function add(a, b) {
    console.log(a + b);
}

function minus(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

// CJSで複数をエクスポート
module.exports = { add, minus, multiply };
