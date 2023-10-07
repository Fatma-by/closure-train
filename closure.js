function makeCounter(initial) {
  let count = initial;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = makeCounter(100);

counter();

/*One way we can use closures is as functions that construct other functions. Consider the numerous examples of exponentiation functions that we've created, e.g. square and cube. The following function pow is incomplete:*/

function pow(exponent) {
  let result = 1;
  return function (value) {
    return value ** exponent;
  };
}

var square = pow(2);

console.log(square(5));
var cube = pow(3);

console.log(cube(5));


/*1. zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)Inputs should not be modified.*/

function zipwith(array1, array2) {
  let array=[];
  return {
    
    math: function(){

    for (let index = 0; index < array1.length; index++) {
      array.push([array1[index]** array2[index]]);
    }
    return array;
  },
  maximun : function(){
    for (let index = 0; index < array1.length; index++) {
      if (array1[index]>array2[index]) {
        array.push(array1[index]);}
        else{
          array.push(array2[index]);
        }
      }
      return array;
    },
   sum  : function() {
    for (let index = 0; index < array1.length; index++) {
      array.push(array1[index]+array2[index]);
 
   
    }
    return array;  
   }
   
  }
}
const result = zipwith([1,2,3,4],[1,2,3,4]);

console.log(result.math());

console.log(result.maximun());

console.log(result.sum());


  






