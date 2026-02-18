// ESMでインポート
// calc06.mjsからデフォルトインポート
import x from './lib/calc06.mjs';
// calc06.mjsから別名で通常インポート
import { minus as y, multiply as z } from './lib/calc06.mjs';

// 関数の呼び出し
x(5, 3);
y(5, 3);
z(5, 3);
