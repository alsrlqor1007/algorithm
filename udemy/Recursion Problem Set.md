### power

거듭제곱 구현

```JSX
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
```

<br></br>

### factorial

팩토리얼 구현

```JSX
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n){
   if (n <= 1) return 1;
   return n * factorial(n - 1);
}
```

<br></br>

### productOfArray

배열의 모든 곱 반환

```JSX
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}
```

<br></br>

### recursiveRange

0부터 모든 숫자의 합 반환

```JSX
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(n){
   if (n === 0) return 0;
   return n + recursiveRange(n - 1);
}
```

<br></br>

### fib

피보나치 수열 구현

```JSX
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
  // add whatever parameters you deem necessary - good luck!
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```
