function CircleArea(r) {
    const area = Math.PI * r ** 2;
    console.log(area);
}

function CircleCircumference(r) {
    const circumference = Math.PI * 2 * r;
    console.log(circumference);
}

module.exports = { CircleArea, CircleCircumference };
