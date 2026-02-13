// 代表的なエラー
try {
    console.log('通常処理');
    // TypeError
    const data = [2,4,5,8];
    data();
    
    // ReferenceError
    // tekito();
    console.log('その後の処理');
} catch(error) {
    console.log(error);
} finally {
    console.log('最終処理');
}
