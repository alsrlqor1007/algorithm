## Big O Notation

A way of generalizing code and talking about it and comparing code and its performance to other.

어떤 로직을 구현하기 위한 여러 가지 접근법 중에서 어떤 코드가 가장 나은지를 어떻게 판별할 수 있을까.

빅오 표기법을 통해 정량적으로 비교하고 평가할 수 있다. 단순히 더 좋거나 나쁘다라는 표현보다는 정량적인 표현이 가능하다.

어떤 문제를 해결하거나 특정 기능을 구현할 때 어떤 접근법이라도 상관은 없을 수 있다. 하지만 어떤 방법이 가장 베스트인가? 또는 무엇이 더 나은 방법인가? 이런 질문을 고려하는 이유는 바로 협업할 때 중요하고 디버깅이 용이하기 때문이다. 기술 면접 또는 코딩 테스트를 볼 경우, 규모 있는 조직에서 일하거나 대량의 데이터를 다룰 경우 로직의 performance가 중요하다.

그렇다면 더 나은 코드의 조건은 무엇인가? 3가지를 고려해 볼 수 있다.

- 더 빠른 것
- 메모리를 덜 차지하는 것
- 가독성 높은 것
  <br></br>

먼저 로직이 빠르다는 것은 판별할 수 있는 방법은 소요시간을 측정하는 것이다.

- 시간이 얼마나 걸렸는지 확인하는 방법

```jsx
let t1 = performance.now();
소요시간 확인할 로직;
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
```

하지만 단순히 시간을 측정하기에는 변수가 많다. 컴퓨터마다 다르고, 또 같은 컴퓨터라도 매번 결과가 다를 수 있다. 그리고 빠른 알고리즘이라면 속도를 측정하는 것이 정확하지 않을 수 있다.

직접 시간을 측정하는 방법을 사용하지 않고 컴퓨터가 실행해야 할 개별 작업의 횟수를 고려해보자.
예를 들어, 아래 예시는 단순히 3가지의 작업을 처리한다.

```jsx
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
// *, +, / => 3 operations
```

하지만 처리할 개별 작업의 갯수가 무수히 많거나 반복문처럼 함수의 인자로 들어가는 n에 비례해 증가하는 경우에는 정확히 셀 수가 없다. 이때 몇 번인지는 상관없다. 중요한 것은 어떤 추세를 띄고 있냐는 것이다. 즉, 여기서는 n에 비례해 증가하고 있다는 큰 그림을 보는 것이 핵심이다.
<br></br>

### 시간 복잡도 (Time complexity)

A way to formalize fuzzy counting

알고리즘 인풋(인자)의 증감에 따른 알고리즘 런타임의 증감 추세를 나타낼 수 있는 표현 수단이다. 인풋과 아웃풋의 상관관계를 설명할 수 있게 해준다.

O(f(n)) 알고리즘은 인풋에 따라 아웃풋 런타임이 정비례(1차)하거나 2차 형식(n^2), 또는 일정할 수 있으며 이외에도 그 어떤 것이 될 수 있다. 중요한 것은 빅오로 표시할 때 가장 최악의 시나리오를 나타내는 것이다. 런타임의 상한선을 가리킨다고 한다.

addUpTo 함수를 예시로 들면, 항상 3가지 작업(곱셉, 덧셈, 나눗셈)을 수행한다. 즉, 인풋으로 어떤 값이 들어오더라도 런타임은 일정하기 때문에 O(1)이라고 할 수 있다.

```jsx
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

하나의 for 반복문으로 이루어진 로직은 주어진 인풋(n) 범위까지 순회하기 때문에 O(n)이다. 단순히 증가하고 감소하는 각 반복문을 차례로 연달아 사용하는 로직도 런타임이 매번 일정한 비율로 증가하기 때문에 O(n)이다.

```jsx
function addUpTo(n) {
  let totak = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// 로직 내 개별 수행문의 횟수는 n의 곱이다. 인풋의 증감 비율에 비례한다.
// O(n)과 O(n)이 병렬로 수행되는 경우도 결국 O(n)이다.
```

만약 반복문 안에서 중복해서 반복문을 한 번 더 수행하는 로직이라면 O(n^2)이다. 인풋 값이 증가함에 따라 런타임의 기울기도 증가한다.

```jsx
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      console.log(i, j);
    }
  }
}
// O(n) 안에서 O(n)이 한 번씩 더 돈다.
```

<br></br>

### 빅오 표기법의 축약

- 단순 산수 처리는 런터임이 일정하다. 인풋의 크기는 중요하지 않다.
- 변수를 할당하는 작업도 런타임이 일정하다.
- 배열이나 객체의 요소에 접근하는 처리도 런타임이 일정하다.
- 반복문에서는 반복 횟수(n)가 복잡도이다.

인풋에 따라 런타임이 일정한 경우에는 앞에 상수를 축약할 수 있다. `O(2n) ⇒ O(n)`

O(500)일 경우에도 인풋이 어떤 값이더라도 동일하게 500가지의 작업을 처리하는 로직이라는 뜻이기 때문에 일정하다는 의미로 O(1)로 표기해도 무방하다.

O(13n^2)는 상수를 제외하고 O(n^2)로 표기한다. 동일하게 2차 방정식의 형태로 런타임이 증가하기 때문이다.식의 뒤에 붙어서 결과에 미치는 영향이 미미한 상수는 제거할 수 있다. `O(1000n + 50) ⇒ O(n), O(n^2 + 5n + 8) ⇒ O(n^2)`
<br></br>

### 공간 복잡도 (Space complexity)

'해당 알고리즘 로직은 얼만큼의 공간(메모리)을 차지하는가'를 고려하는 것이다.

- 원시 자료형은 항상 일정한 공간을 차지한다. 따라서 어떤 값이든 동일하다.
- 문자열은 O(n)을 차지한다. n은 문자열 길이다.
- 참조 자료형은 보통 O(n)이다. 참조 자료의 길이(객체는 키의 갯수)에 따라 증가한다.

공간 복잡도를 고려할 때는, 단순히 인풋 값이 차지하는 공간이 아니라 알고리즘 로직에 의해 필요한 모든 공간을 의미한다.(Auxiliary space)

```jsx
function sum(arr) {
  let total = 0; // total 변수 할당 공간
  for (let i = 0; i < arr.length; i++) {
    // 반복문의 i 변수 할당 공간
    total += arr[i];
  }
  return total;
}
// 공간 복잡도 총 O(2) => O(1)

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr; // arr 요소 갯수와 동일
} // 공간 복잡도: O(n)
```

<br></br>

### 정리

- To analyze the performance of an algorithm, we use Big O Notation.
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm.
- Big O Notation doesn’t care about precision, only about general trends.(linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm.
