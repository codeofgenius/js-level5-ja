// オブジェクトをJSON文字列に変換
// JavaScriptのオブジェクトを作成
const jsObject = {
    user1 : {
        name : 'Bob',
        age : 15,
        hobby : ['music', 'tennis', 'travel'],
    },
    user2 : {
        name : 'Buzz',
        age : 14,
        hobby : ['baseball', 'running'],
    },
};

// JavaScriptオブジェクトをJSON文字列に変換
const stringJson = JSON.stringify(jsObject);

// 文字列を表示
console.log( stringJson );
