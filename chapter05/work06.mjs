// ESMでインポート
// calc06からデフォルトインポート
import x from './lib/calc05.mjs';
// calc06から別名で通常インポート
import { minus as y, multiply as z } from './lib/calc05.mjs';

// 関数の呼び出し
x(5, 3);
y(5, 3);
z(5, 3);
