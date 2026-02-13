// throw文
try {
    console.log('通常処理');
    // ここでエラー発生
    throw 'これで独自エラー発生';
    //throw new Error('これで独自エラー発生');
    console.log('その後の処理');
} catch(error) {
    console.log(error);
} finally {
    console.log('最終処理');
}
