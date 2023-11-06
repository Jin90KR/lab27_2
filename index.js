//lab27_2

const array = [10, 4, 5, 52];

//Array.prototype.forEach()

// function forEachFunc(array, callbackFunc) {
//     for(let i = 0; i < array.length; i ++) {
//         callbackFunc(array[i]);
//     }
// }

// function callback(arrayNum) {
//     console.log(arrayNum)
// }

// forEachFunc(array, callback);

//Array.prototype.map()

// let map1 = [];

// function mapFunc(array, callbackFunc) {
//     for(let i = 0; i < array.length; i++) {
//         callbackFunc(array[i]);
//     }
// }

// function callback(arrayNum) {
//     map1.push(arrayNum * 2);
// }

// mapFunc(array, callback);
// console.log(map1);

//Array.prototype.filter()

// let filter1 = [];

// function filterFunc(array, callbackFunc) {
//     for(let i = 0; i < array.length; i++) {
//         callbackFunc(array[i]);
//     }
// }

// function callback(arrayNum) {
//     if(arrayNum < 10 === true){
//         filter1.push(arrayNum);
//     }    
// }

// filterFunc(array, callback);
// console.log(filter1);


//Array.prototype.find()

let find1 = [];


function findFunc(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 10) {
            find1.push(array[i]);
            return;
        }
    }
}

// function callback(arrayNum) {
//     if(arrayNum < 10 === true){
//         find1.push(arrayNum);
//     }    
// }

findFunc(array);
console.log(find1);