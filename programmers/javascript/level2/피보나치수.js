/*
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
n은 2 이상 100,000 이하인 자연수입니다.
*/

function solution(n) {
    let memo = [0, 1];
    for (let i = 2; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
    }
    return memo[n];
}

// 다른 사람 풀이
function fibonacci(n) {
  var a = 0, b = 1, f = 1;
  for (var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

function solution1(n) { // 재귀 => 함수를 계속 호출하기 때문에 시간 메모리 사용량이 크다.
    let memo = [0, 1];
    const aux = function(n) {
        if (memo[n] !== undefined) return memo[n] % 1234567;
        else {
            memo[n] = aux(n-1) + aux(n-2);
            return aux(n);
        }                
    }
    return aux(n);
}

// 타뷸레이션 바텀업을 사용하면 반복문 한 번으로 O(n)의 시간 복잡도를 갖는다.
function solution2(n) {
    if(n <= 2) return 1;
    let fibNum = [0, 1, 1];

    for(let i = 3; i <= n; i++) {
        fibNum[i] = (fibNum[i-1] + fibNum[i-2]) % 1234567;
    }
    return fibNum[n];
}


/*
각 피보나치 수를 1234567로 나눈 수를 리턴하라는 것이 아니라, 각 피보나치 수를 1234567로 나눈 "나머지의 피보나치 수열"을 만들라는 문제이다.
피보나치 수를 계산한 다음에 나올 수를 1234567로 나눈 나머지는 각 연산을 수행할 때마다 1234567로 나누는 것과 동일한 숫자가 나온다.

자료형의 크기에 제한이 있는 언어를 쓸 경우, `**(A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C**`라는 성질을 이용한다.

자기 자신보다 큰 수로 나누면 무조건 자기 자신대로 나머지가 도출된다. 1234567을 나누는 것은 데이터 크기를 줄이기 위함이다. 
*/