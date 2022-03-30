/*
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.
문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다.
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
*/

function solution(number, k) {
    let arr = []; // stack
  
    for (let n of number) { // 주어진 원본 숫자 순회
        while (arr[arr.length - 1] < n && k > 0) { // stack 마지막 요소가 number 요소보다 작고, 제거할 숫자의 갯수가 남아있을 때까지
          arr.pop(); // stack 마지막 요소 제거 => number 중 가장 작은 숫자 k개를 제외하고 모두 옮겨놓을 예정
          k--; // 남은 제거 갯수 차감
        }
        arr.push(n); // stack 요소보다 크다면 제거할 k개의 숫자에 해당되지 않기 때문에 stack에 추가
    }
    arr.splice(number.length - k, k); // 가장 작은 수들이 가장 뒤에 포진해 있을 경우
    return arr.join(''); // stack에 남긴 요소 Num type 나열
}

// Stack 이용!