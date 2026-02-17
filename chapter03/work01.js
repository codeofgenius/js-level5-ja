// try-catch文
try {
    console.log('通常処理');
    // ここでエラー発生
    unknownFunction();
    console.log('その後の処理');
} catch (error) {
    console.log('エラー発生');
}
