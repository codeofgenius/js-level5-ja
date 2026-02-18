// CJSでインポート
// calc03.jsを分割代入で読み込み
const { add, minus, multiply } = require('./lib/calc03');

// 関数の呼び出し
add(5, 3);
minus(5, 3);
multiply(5, 3);
