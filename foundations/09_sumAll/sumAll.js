const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {return "ERROR"}

    let smallerNum;
    let largerNum;

    if (a < b) {
        smallerNum = a;
        largerNum = b;
    } else {
        largerNum = a;
        smallerNum = b;
    }

    arr = [];

    for (let i = smallerNum; i <= largerNum; i++) {
        arr.push(i);
    }
    
    return arr.reduce((smallerNum, largerNum) => smallerNum + largerNum);

};

// Do not edit below this line
module.exports = sumAll;
