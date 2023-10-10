function zipWith(array1, array2) {
    var conter = {};
    conter.ar = [];
    conter.array = [];
    conter.arr = [];
    conter.sum = sum;
    conter.math = math;
    conter.maximun = maximun;
    
    function math() {
      for (let index = 0; index < array1.length; index++) {
        conter.array.push([array1[index] ** array2[index]]);
      }
      return conter.array;
    }
    
    function sum() {
      for (let index = 0; index < array1.length; index++) {
        conter.ar.push(array1[index] + array2[index]);
      }
      return conter.ar;  
    }
  
    function maximun() {
      for (let index = 0; index < array1.length; index++) {
        if (array1[index] > array2[index]) {
          conter.arr.push(array1[index]);
        } else {
          conter.arr.push(array2[index]);
        }
      }
      return conter.arr;
    }
  
    return conter;
  }
  
  var zip = zipWith([1, 2, 3], [1, 2, 3]);
  console.log(zip.sum());
  