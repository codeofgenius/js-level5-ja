// try-catch-finally文
try {
    console.log('通常処理');
    // ここでエラー発生
    tekito();
    console.log('その後の処理');
} catch(error) {
    console.log('エラー発生');
} finally {
    console.log('最終処理');
}
