// ESMでエクスポート

// 三角形の面積を計算して返す
function getTriangleArea(base, height) {
    return (base * height) / 2;
}

// 正方形の面積を計算して返す
function getSquare(base) {
    return Math.pow(base, 2);
}

// 円の面積を計算して返す
function getCircleArea(r) {
    return Math.pow(r, 2) * Math.PI;
}

// ESMでデフォルトエクスポート
export default getTriangleArea;
// ESMで名前付きエクスポート
export { getSquare, getCircleArea };
