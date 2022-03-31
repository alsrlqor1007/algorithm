/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

n은 2이상 1000000이하의 자연수입니다.
*/

function solution(n) {
    // 소수 판별 모듈 먼저 생성
    const isPrime = (num) => {
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    let count = 1; // n은 2부터이기 때문
    if (n === 2) return count;
    else {
        for (let i = 3; i <= n; i++) {
            if (isPrime(i)) count++;
        }
        return count;
    }
}