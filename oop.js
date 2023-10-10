/*1. zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)Inputs should not be modified.

function zipwith(array1, array2) {
    let array=[];
    let arr=[];
    let ar=[];
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
          arr.push(array1[index]);}
          else{
            arr.push(array2[index]);
          }
        }
        return arr;
      },
     sum  : function() {
      for (let index = 0; index < array1.length; index++) {
        ar.push(array1[index]+array2[index]);
   
     
      }
      return ar;  
     }
     
    }
}*/

function zipWith(array1, array2) {
  var conter = {};
  conter.ar=[],
  conter.array=[],
  conter.arr=[],
  conter.sum = sum,
  conter.math = math, 
  conter.maximun = maximun
  conter.array1 = array1,
  conter.array2 = array2
  return conter;
}

var math= function(){
  
    for (let index = 0; index < (this.array1).length; index++) {
      this.array.push([this.array1[index]** this.array2[index]]);
    }
    return this.array;
  }
var sum = function() {
    for (let index = 0; index < this.array1.length; index++) {
      this.ar.push(this.array1[index]+this.array2[index]);
 
   
    }
    return this.ar;  
   }

   var maximun = function() {
    
    for (let index = 0; index < this.array1.length; index++) {
    if (this.array1[index]>this.array2[index]) {
      this.arr.push(this.array1[index]);}
      else{
        this.arr.push(this.array2[index]);
      }
      return this.arr;
    }}

 var zip = zipWith([1,2,3][1,2,3])
console.log(zip.sum());