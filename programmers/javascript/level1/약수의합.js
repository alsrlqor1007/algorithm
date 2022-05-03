/*
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

n은 0 이상 3000이하인 정수입니다.
*/

function solution(n) {
    let sum = 0;
    
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) sum += i;
    };
    
    return sum + n;
}


// 다른 사람 풀이
function solution(n) {
    var answer = 0;
    let i;

    for (i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) answer += (i+n/i);
    };
    i--;

    return (i === n / i) ? answer - i : answer;
}