/*
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

1 ≤ left ≤ right ≤ 1,000
*/

function solution(left, right) {
    const count = (n) => {
        let counts  = 0
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) counts++;
        }

        if (counts % 2 === 0) return true;
        else return false;
    }

    let answer = 0;
    for (let j = left; j <= right; j++) {
        if (count(j)) answer += j;
        else answer -= j;
    }
    return answer;
}


// 다른 사람 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
// 제곱근이 정수라면 약수의 갯수가 홀수개