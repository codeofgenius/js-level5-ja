// ESMでインポート
// calc05からデフォルトインポート
import add from './lib/calc05.mjs';
// calc05から通常インポート
import { minus, multiply } from './lib/calc05.mjs';

// 関数の呼び出し
add(5, 3);
minus(5, 3);
multiply(5, 3);
