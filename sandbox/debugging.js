const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log(area)
radius = 4;
area = radius * radius * PI;
console.log(area)

function circleArea(radius){
    const PI = 3.14;
    area = radius * radius * PI;
    return area
}
area = circleArea(5)
console.log(area)