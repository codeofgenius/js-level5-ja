// JSON文字列をオブジェクトに変換1
// JSONのデータを文字列で作成
const stringJson = `{
    "user1": {
        "name" : "Bob",
        "age" : 17,
        "hobby" : ["music", "tennis", "travel"]
    },
    "user2": {
        "name" : "Tom",
        "age" : 16,
        "hobby" : ["baseball", "running"]
    }
}`;

// 文字列を表示
console.log(stringJson);

// JSON文字列をJavaScriptのオブジェクトに変換
const jsObject = JSON.parse(stringJson);

// JavaScriptのオブジェクトを表示
console.log(jsObject);
