// JSON文字列をオブジェクトに変換2
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

// JSON文字列をJavaScriptのオブジェクトに変換
const jsObject = JSON.parse(stringJson);

console.log( jsObject.user1.name ); // Bob
console.log( jsObject.user1.age ); // 15
console.log( jsObject.user1.hobby[0] ); // music
console.log( jsObject.user1.hobby[1] ); // tennis
console.log( jsObject.user1.hobby[2] ); // travel

console.log( '--------' );

console.log( jsObject.user2.name ); // Buzz
