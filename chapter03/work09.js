// TypeError
try {
    console.log('通常処理');
    const numbers = [2, 4, 5, 7];
    // TypeError
    numbers();
    console.log('その後の処理');
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log('最終処理');
}
