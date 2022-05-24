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

### someRecursive

...
