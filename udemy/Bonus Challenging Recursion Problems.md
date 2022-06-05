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

<br></br>

### nestedEvenSum

<br></br>

### capitalizeWords

<br></br>

### stringifyNumbers

<br></br>

### collectStrings
