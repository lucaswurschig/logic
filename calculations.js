import compare from './calculator.js';

//array
const numberList =  [[5,4],[3,4],[0,0],[25,30],[157, 157.1]];

for (let i = 0; i < (numberList.length -1); i++) {
    compare(numberList[i][0], numberList[i][1]);
}