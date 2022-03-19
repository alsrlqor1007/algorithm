/*
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.
*/

function solution(arr) {
  const GCD = (a, b) => {
    let r = a % b;
    if (r === 0) return b;
    else return GCD(b, r);
  }

  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let a = answer;
    let b = arr[i];
    answer = (a * b) / GCD(a, b);
  }    
  return answer;
}

/*
기본적인 최소공배수를 구하는 방법을 찾아보다가 유클리드 호제법이라는 것을 발견했다.
2개의 자연수를 받아 최대공약수를 받기 위해 2부터 두 자연수 중 작은 자연수까지 모두 나누어보면서 가장 큰 공약수를 구할 수 있다.
유클리드 호제법이란 알고리즘을 사용하면 시간복잡도를 O(logN)으로 줄일 수 있다.

**유클리드 호제법**
2개의 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단 a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
이 성질에 따라, b를 r로 나눈 나머지 r0를 구하고, 다시 r을 r0로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
*/

// 다른 사람 풀이
function nlcm(num) {
 return num.reduce((a, b) => a * b / gcd(a, b))  
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b
}