const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double exclam (!!),
 *    or the untruthiness using a single exclam (!)
 */

const hasFalsyValue = obj => {
  const x = Object.values(obj)
  for (i=0;i<x.length;i++){
    if (typeof(x[i]) ==='object'){
      return hasFalsyValue(x[i])
    }else{
      if (!x[i]){
        return true;
      }
    }
  }
  return false;
};

const falsyObj = {
  hi: "I am falsey somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
