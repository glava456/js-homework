function calcDistance(xa, ya, xb, yb) {
    const distance = Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((ya - yb), 2));
    return distance;
};

console.log(calcDistance(3, 5, -2, -108));