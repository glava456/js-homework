function showRevers(n) {
    let resalt = 0;
    while (n) {
        resalt *= 10;
        resalt += n % 10;
        n = Math.floor(n / 10);
    }
    return resalt;
}
module.exports = { showRevers }