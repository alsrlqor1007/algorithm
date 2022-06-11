### reverse

문자열을 거꾸로 나열하는 재귀함수 구현

```JSX
function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
```

<br></br>

### isPalindrome

앞뒤로 대칭인 문자열인 경우 true를 반환하고 아닐 경우 false를 반환하는 재귀함수 구현

```JSX
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}
```

<br></br>

### someRecursive

배열과 콜백함수를 매개변수로 받으며 배열의 모든 요소를 콜백함수의 인자로 받아 모두 true를 반환하면 true를, 아니면 false를 반환하는 재귀함수 구현

```JSX
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}
```

<br></br>

### flatten

배열을 입력 받아 내부 배열을 푼 하나의 배열로 반환하는 재귀함수 구현

```JSX
function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
```

<br></br>

### capitalizeFirst

배열 내 각 요소의 첫 글자를 대문자로 바꿔서 다시 배열을 반환하는 재귀함수 구현

```JSX
function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];
    else return capitalizeFirst(arr.slice(0, 1)).concat(capitalizeFirst(arr.slice(1)));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// reference
function capitalizeFirst (array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}
```

<br></br>

### nestedEvenSum

객체를 받아 중첩되어 있는 객체 안에 있는 모든 짝수의 합을 반환하는 재귀함수 구현

```JSX
function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  for (let key in obj) {
      if (typeof obj[key] === 'object') {
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          sum += obj[key];
      }
  }
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
```

<br></br>

### capitalizeWords

단어들을 요소로 갖는 배열을 입력 받아 대문자로 변환하여 반환하는 재귀함수 구현

```JSX
function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 1) return [arr[0].toUpperCase()];
  else return capitalizeWords(arr.slice(0, 1)).concat(capitalizeWords(arr.slice(1)));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']


// reference
function capitalizeWords (array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
}
```

<br></br>

### stringifyNumbers

객체를 받아 내부의 숫자 형태의 값을 문자열로 변환하여 객체를 반환하는 재귀함수 구현

```JSX
function stringifyNumbers(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
        	  newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        	  newObj[key] = stringifyNumbers(obj[key]);
        } else {
        	  newObj[key] = obj[key];
        }
    }
    return newObj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
```

<br></br>

### collectStrings

객체를 받아 문자열의 요소들만 객체에 담아 반환하는 재귀함수 구현

```JSX
function collectStrings(obj) {
    let result = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
        	result = result.concat(collectStrings(obj[key]));
        }
    }
    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])


// Other: Helper Method Recursion Version
function collectStrings(obj) {
    let stringsArr = [];

    function gatherStrings(o) {
        for (let key in o) {
            if (typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            } else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
}
```
