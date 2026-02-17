// ESMでエクスポート
function add(a, b) {
    console.log(a + b);
}

function minus(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

// ESMでデフォルトエクスポート
export default add;
// ESMで通常のエクスポート
export { minus, multiply };
