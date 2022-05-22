## Bubble Sort & Introduction to Sorting Algorithms

### 정렬이란?(sorting)

Sorting is the process of rearraging the items in a collection(e.g. an array) so that the items are in some kind of order.

어떤 배열이 있다고 생각해보자. 우리는 이 배열을 순회하고 새롭게 정렬된 배열을 도출하는 로직을 작성하고 싶다. 예를 들어, 숫자를 오름차순 또는 내림차순으로 정렬하거나 알파벳 순서로 문자를 나열하는 것이다. 하지만 알고리즘에서는 우리가 무엇을 어떻게 정렬하는지는 중요하지 않다. 여기서는 배열 안의 숫자를 정렬하는 사례로만 다룰 예정이다.
같은 정렬 작업을 하는 데에는 정말 많은 방법이 있다. 어떤 것은 효율적이거나 특정 상황에 딱 알맞고, 또 어떤 것들은 별로다.

<br/>

### 정렬을 배워야 하는 이유

먼저, 정렬은 자바스크립트 프로그래밍에서 가장 기본이고 흔한 작업이기 때문이다. 자바스크립트 뿐만 아니라 프로그래밍 언어에 내장된 정렬 함수를 사용할 때 그 함수가 어떤 정렬 방식을 사용하는지 이해하는 것이 중요하다. 그래야 어디에 효과적인지 또는 약점인지 알 수 있기 때문이다. 각 정렬 로직에는 장단점이 다 있다. 이 점을 이해할 필요가 있다.

> 비교학습 참고 사이트: [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

<br/>

### 이 코스에서 배우는 정렬

- Bubble Sort
- Selection Sort
- Insertion Sort

<br></br>

### Javascript에 내장된 정렬 기능

자바스크립트에서는 모든 배열에 내장된 정렬 기능을 갖고 있다. 하지만 항상 의도한대로 동작하는 것은 아니다. 예를 들어, 아래 배열 정렬의 결과는 알파벳 순서대로 정렬되어 반환된다.

```JSX
["Steele", "Colt", "Data Structures", "Algorithms"].sort();
// ["Algorithms", "Colt", "Data Structures", "Steele"]
```

하지만, 아래 숫자 배열 정렬의 결과는 오름차순 또는 내림차순의 정렬 결과가 아니다.

```JSX
[6, 4, 15, 10].sort();
// [10, 15, 4, 6]
```

`sort()`에 관해 찾아보면 디폴트 정렬 기준은 유니코드 값이기 때문에 위와 같은 결과가 나오는 것이다. 자바스크립트 빌트인 정렬 함수는 비교 함수를 매개변수로 받으며, 이 함수를 통해 정렬 방식이나 기준을 정할 수 있다. 비교 함수는 보통 a와 b로 한 쌍의 인자를 받으며, 비교 함수의 반환 값에 따라 정렬한다. 만약 음수를 반환한다면 a가 b보다 먼저 정렬된다. 반대로 양수를 반환하면 b가 a보다 먼저 정렬된다. 0을 반환하면 동등하게 취급한다.

```JSX
function numberCompare(num1, num2) {
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]



function numberCompare(num1, num2) {
    return num2 - num1;
}

[6, 4, 15, 10].sort(numberCompare);
// [15, 10, 6, 4]
```

```JSX
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// ["Colt", "Steele", "Algorithms", "Data Structures"]



function compareByLen(str1, str2) {
    return str2.length - str1.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// ["Data Structures", "Algorithms", "Steele", "Colt"]
```

<br></br>

### Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

버블 정렬은 그다시 효율적이지 않거나 자주 사용되는 정렬 방식은 아니다. 하지만 최적화할 수 있는 방법도 다룰 예정이며, 왜 다른 정렬 알고리즘이 더 뛰어난지도 이해할 수 있을 것이다.
버블 정렬은 배열의 각 요소를 순회하면서 인접해 있는 그 다음 요소와 비교하는 방식으로 동작한다. 비교해서 뒤에 인접해 있는 요소보다 더 클 경우 위치를 뒤바꿔준다. 최종적으로 가장 마지막에 위치하게 될 요소가 마지막 위치에 도달하면 다시 또 처음부터 순회를 해서 동일한 작업을 반복한다. 이때 마지막에 위치하는 요소는 더이상 고려하지 않아도 되기 때문에 순회하는 요소의 갯수는 줄어든다.
여기서 위치를 바꿔주는 작업(swap)이 중요하다. 정렬 알고리즘은 대개 이런 위치 교환 작업을 수반한다.

```JSX
function swap(arr, idx1, idx2) {
    var = temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

- Bubble Sort 수도 코드

```
- 배열의 끝에서부터 시작에 앞 부분까지 i라는 변수로 반복문을 시작한다.
- j라는 변수로 배열의 처음부터 i - 1까지 내부 반복문을 시작한다.
- arr[j]와 arr[j+1]를 비교해서 arr[j]가 더 클 경우 두 요소의 위치를 바꾼다.
- 정렬된 배열을 반한한다.
```

- Bubble Sort 실제 코드

```JSX
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}
```

- Optimization

만약 매우 긴 배열에서 버블 정렬을 수행한다면, 시간 관점에서 봤을 때 문제가 되거나 비효율적이다. 외부 반복문이 모두 끝나기 전에 이미 순서대로 정렬된 최종 배열이 완성되었더라도, 외부 반복문은 멈추지 않고 순회 작업이 수행되기 때문에 불필요한 시간이 소모된다. 따라서 이런 점을 보완하기 위해 swap 작업 수행 여부를 고려한다. 외부 반복문을 수행하면서 한 루프에 아무 swap 작업이 이루어지지 않았다면 정렬은 끝났다는 뜻이다.

```JSX
// Optimized with noSwaps
function bubbleSort(arr) {
    var noSwaps;

    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}
```

- 시간 복잡도

버블 정렬의 시간 복잡도는 일반적으로 `O(N^2)`이다. 왜냐하면 이중반복문으로 이루어져 비교를 수행하기 때문이다. 하지만 배열의 요소가 거의 정렬되어 있는 상태로 noSwaps로 모든 요소를 순회하기 전에 정렬이 완성된다면 `O(N)`이다. 이 경우가 가장 좋겠지만, 그렇다고 해서 직접 수동으로 정렬 작업이 많지 않은 것을 확인해서 무조건 버블 정렬을 사용하라는 것은 아니다.
