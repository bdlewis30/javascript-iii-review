// creates an object to build array methods on
class MyArray {
    constructor() {
        let tempArr = [];
        for (var i = 0; i < arguments.length; i++) {
            tempArr.push(arguments[i])
        }

        this.arr = tempArr;
    }

    // build the map function
    map(callback) {
        var tempArr = [];
        for (var i = 0; i < this.arr.length; i++) {
            tempArr.push(callback(this, arr[i], i, this.arr))
        }
        return tempArr;
    }

    // build filter method
    filter(callback) {
        var tempArr = [];

        for(var i = 0; i < this.arr.length; i++){
            if(callback(this.arr[i], i, this.arr)){
                tempArr.push(this.arr[i])
            }
        }
        return tempArr;
    }

    // build reduce method
    reduce(callback, startingValue) {
        var tempArr = [];
        if (callback(this.arr[i], i, this.arr)) {
            tempArr.push(this.arr[i])
        }
        return tempArr
    }
}

var myArr1 = new MyArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
myArr1;

// add 5 to each position
var map1 // = myArr1.map();

map1;


// replace numbers divisible by 3 with the string 'cool number'
var map2 // = myArr2.map()

map2;


var myArr2 = new MyArray(1, 2, 3, 1, 5, 4, 7, 3, 2, 1);
myArr2;


//remove evens from myArr2
var filter1 = myArr2.filter(function(elem, index, arr){
    return elem % 2 === 1
});

filter1;


//remove duplicates from myArr2
var filter2 //= myArr2.filter();

filter2;