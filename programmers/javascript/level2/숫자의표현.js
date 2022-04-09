/*
Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15

자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

n은 10,000 이하의 자연수 입니다.
*/

function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let sum = i;
        for (let j = i + 1; j <= n; j++) {
            if (sum + j <= n) sum += j;
            else break;
        }
        if (sum === n) count++;
    }
    return count;
}
// 정확성 테스트는 모두 통과했으나, 효율성 테스트 6개중 2개를 시간초과로 통과하지 못했다.


// 재도전
function solution(n) {
    let half = parseInt(n / 2);
    let count = 0;
    for (let i = 1; i <= half; i++) { // 순환 범위 축소
        let sum = i;
        for (let j = i + 1; j <= n; j++) {
            if (sum + j <= n) sum += j;
            else break;
        }
        if (sum === n) count++;
    }
    return count + 1;
}
// 절반에 해당하는 숫자를 넘어가면 이후의 경우는 어차피 입력 값을 초과하기 때문에 절반만 고려해준다.


// 다른 사람 풀이
function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) answer++;
    }
    return answer;
}
// 홀수인 약수의 갯수를 구하면 된다.