// 関数でのthis
// strictモードに設定
"use strict";

// 関数の定義
function doSomething() {
    // 関数内でのthisはundefinedになる
    console.log( this );
}

// 関数の呼び出し
doSomething();
