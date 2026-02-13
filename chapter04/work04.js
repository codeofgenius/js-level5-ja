// JSON文字列を整形して表示
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

// タブで整形した文字列を作成
const stringJson = JSON.stringify(jsObject, null, '\t');

// タブで整形した文字列を表示
console.log( stringJson );
