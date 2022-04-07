## Problem Solving Approach

### Algorithm

A process or set of steps to accomplish a certain task.
대부분의 프로그래밍 개발은 알고리즘과 연관이 있다고 할 수 있다. 어떤 문제를 해결하고자 하는 개발자에게는 기본이고, 또 면접에서 매우 중요하다.

- 알고리즘 실력을 향상시키려면?
  문제해결 방법 또는 계획을 세울 줄 알아야 하고, 대표적인 문제 해결 패턴들을 익혀야 한다.
  <br/>
- 문제 해결 단계

```
1. 문제 이해하기
2. 구체적인 예시 보기
3. 파악하기
4. 해결하기/단순화하기
5. 코드 보완 및 리팩토링하기
```

<br><br/>

### Step 1: Understand The Problem

문제를 마주했을 때, 아래 5가지를 고려할 수 있어야 한다.

```
1. 문제를 나의 언어로 재정의할 수 있는가?
2. 문제의 입력 값이 무엇인가? 어떻게 구성되어 있는가?
3. 솔루션으로 인해 도출되는 결과 값은 무엇인가?
4. 문제를 해결하기 위해 충분한 정보를 갖고 있는가? 그 정보만으로 입력 값에 대한 예상 결과 값을 도출할 수 있는가?
5. 문제 속 중요한 자료들은 어떻게 관리해야 하는가? 문제에서 중요한 요소는 무엇이고, 어떻게 이름을 붙일 것인가?
```

예시: 두 숫자의 합을 도출하는 함수를 작성하라.
(Write a function which takes two numbers and returns their sum.)

```
1. 재정의: 덧셈(Implement addition)
2. 입력 값: 정수? 실수? string 형태?
3. 결과 값: 정수? 실수? string 형태?
4. 이 예시에서는 PASS
5. 변수: 함수명 add, 입력 값 num1, num2, 결과 값 sum
```

<br><br/>

### Step 2: Concrete Examples

구체적인 예시를 통해 문제를 더욱 명확히 이해할 수 있고, 도출한 최종 솔루션을 검증할 수 있는 수단이 된다. 입력 값을 알고 있으니 그에 따른 올바른 결과가 도출되는지 확인할 수 있는 것이다.
단순히 문제를 더 잘 이해하고 해결하는 것보다도 실무에서 이를 활용한 이점들이 있다. 만약에 인스타그램과 같은 서비스에서 새로운 기능을 개발한다면 이미 주어져 있는 입력 값이라고 할 수 있는 `User Stories` 고려부터 시작한다. User Action을 알고 있으니 그에 따라 다음 어떤 결과가 나와야 하는지 고민하는 것이다.
`Unit test`도 예시를 활용하는 사례이다. 정해진 입력 값에 어떤 결과가 나와야 하는지 테스트하면서 개발한다.

아래의 순서로 예시를 활용한다.

```
1. 간단한 예시부터 세운다.
2. 조금 더 복잡한 예시를 세운다.
3. 빈 입력 값으로 앞에서 세운 예시를 확인한다. 로직이 어떻게 돌아가는지 인사이트를 얻을 수 있다.
4. 잘못된 입력 값으로 앞에서 세운 예시를 확인한다.
```

예시: 문자열을 받으면 각 문자의 갯수를 반환하는 함수를 작성하라.
(Write a function which takes in a string and returns counts of each character in the string.)

1. 간단한 예시

```JSX
charCount("aaaa"); // {a: 4}
charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
```

2. 더 복잡한 예시

```JSX
"my phone number is 182763"
"Hello hi"
// 이러한 더 복잡한 예시들은 문제를 본격적으로 풀기 전에 문제를 더 잘 이해하는데 도움이 된다.
```

3. 빈 입력 값

```JSX
charCount("");
// 빈 값을 넣으면 빈 문자열이 나와야 하는가? 아니면 null, falsy, undefined 또는 에러가 나와야 하는가?
```

4. 잘못된 입력 값

```JSX
charCount(5); // 문자열이 아닌 다른 타입의 데이터가 들어갈 경우(edge case 고려하기)
```

<br><br/>

### Step 3: Break It Down

<br><br/>

### Step 4: Solve Or Simplify

<br><br/>

### Step 5: Look Back and Refactor
