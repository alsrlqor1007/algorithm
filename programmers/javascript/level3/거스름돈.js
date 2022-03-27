/*
Finn은 편의점에서 야간 아르바이트를 하고 있습니다. 야간에 손님이 너무 없어 심심한 Finn은 손님들께 거스름돈을 n 원을 줄 때 방법의 경우의 수를 구하기로 하였습니다.

예를 들어서 손님께 5원을 거슬러 줘야 하고 1원, 2원, 5원이 있다면 다음과 같이 4가지 방법으로 5원을 거슬러 줄 수 있습니다.

1원을 5개 사용해서 거슬러 준다.
1원을 3개 사용하고, 2원을 1개 사용해서 거슬러 준다.
1원을 1개 사용하고, 2원을 2개 사용해서 거슬러 준다.
5원을 1개 사용해서 거슬러 준다.
거슬러 줘야 하는 금액 n과 Finn이 현재 보유하고 있는 돈의 종류 money가 매개변수로 주어질 때, Finn이 n 원을 거슬러 줄 방법의 수를 return 하도록 solution 함수를 완성해 주세요.

n은 100,000 이하의 자연수입니다.
화폐 단위는 100종류 이하입니다.
모든 화폐는 무한하게 있다고 가정합니다.
정답이 커질 수 있으니, 1,000,000,007로 나눈 나머지를 return 해주세요.
*/

function solution(n, money) {
    const permutation = (arr, n) => {
        let result = [];
        if (n === 1) return arr.map(el => [el]);

        arr.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx);
        let recur = permutation(rest, n-1);
        let combined = recur.map(el => [fixed, ...el]);
        result.push(...combined);
        })
    return result;
    }
    
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let cases = permutation(money, i);
        for (let j = 0; j < cases.length; j++) {
        let sum = cases[j].reduce((acc, cur) => acc + cur);
        if (sum === n) count++;
        }
    }
    return count;
}
/*
런타임 에러
중복 순열 경우를 구하고, 구하는 과정에서 마지막에 조건으로 그 각 경우의 합을 구해서 n이 나와야함.
조건에 부합하면 최종적으로 경우 추가
*/

// 재도전
function solution(n, money) {
    var answer = 0;
    let memo = new Array(n+1).fill(0);
    memo[0] = 1;
    money.forEach((el) => {
        for (let i = el; i < n + 1; i++) {
            memo[i] += memo[i - el];
        }
    })
    answer = memo[n] % 1000000007;
    return answer;
}