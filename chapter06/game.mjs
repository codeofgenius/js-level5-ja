// プレイヤーの配列
const players = [
    { name: 'Bob', hp: 20, mp: 10, job: 'Hero' },
    { name: 'Tom', hp: 40, mp: 20, job: 'Fighter' },
    { name: 'Sam', hp: 20, mp: 40, job: 'Magician' },
    { name: 'Alice', hp: 10, mp: 50, job: 'Magician' },
    { name: 'Dorothy', hp: 20, mp: 30, job: 'Hero' },
];

// プレイヤーの名前を配列で取得する関数
function getPlayerName() {
    return players.map((e) => e.name);
}

// 職業がHeroのプレイヤーを取得する関数
function getHero() {
    return players.filter((e) => e.job === 'Hero');
}

// 職業がMagicianのプレイヤーを取得する関数
function getMagician() {
    return players.filter((e) => e.job === 'Magician');
}

// ESMでデフォルトエクスポート
export default getPlayerName;
// ESMで通常エクスポート
export { getHero, getMagician };
