// JSON文字列をオブジェクトに変換1
// JSONのデータを文字列で作成
const stringJson = `{
    "user1": {
        "name" : "Bob",
        "age" : 15,
        "hobby" : ["music", "tennis", "travel"]
    },
    "user2": {
        "name" : "Buzz",
        "age" : 14,
        "hobby" : ["baseball", "running"]
    }
}`;

// 文字列を表示
console.log( stringJson );
console.log( '--------' );

// JSON文字列をJavaScriptのオブジェクトに変換
const jsObject = JSON.parse(stringJson);

// JavaScriptのオブジェクトを表示
console.log( jsObject );
