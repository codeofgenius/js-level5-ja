/*
ワーク07_練習問題

以下のようなプログラムがありますが、未完成です。

getTriangleArea、getSquare、getCircleAreaという3個の
関数を呼び出していますが、このファイルには、これらの
関数を定義していません。

「./lib/calc06.mjs」のファイルでESMモードを利用して
エクスポートされている関数をインポートしてください。

実行結果のように表示する処理を作成してください。

以下のようにインポートを行います。

| インポート名    | デフォルト / 通常 | 読み込み元ファイル     | 
| --------------- | ----------------- | ---------------------- | 
| getTriangleArea | デフォルト        | ./lib/calc07.mjs       | 
| getSquare       | 通常              | ./lib/calc07.mjs       | 
| getCircleArea   | 通常              | ./lib/calc07.mjs       | 

実行結果
15
25
78.53981633974483
*/

// 以下の部分でインポートを行います
import getTriangleArea from './lib/calc07.mjs';
import { getSquare, getCircleArea } from './lib/calc07.mjs';

//以下の部分を修正してはいけません
// 関数の呼び出し
console.log(getTriangleArea(5, 6)); // 三角形の面積
console.log(getSquare(5)); // 正方形の面積
console.log(getCircleArea(5)); // 円の面積
