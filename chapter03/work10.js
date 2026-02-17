// ReferenceError
try {
    console.log('通常処理');
    // ReferenceError
    console.log(name);
    console.log('その後の処理');
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log('最終処理');
}
