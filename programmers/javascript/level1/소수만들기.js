/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

function solution(nums) {
    // 조합 경우의 수를 구하는 함수
    const permutation = (arr, n) => {
        let result = [];
        if (n === 1) return arr.map(el => [el]);
        
        arr.forEach((fixed, idx, origin) => {
            let rest = origin.slice(idx+1);
            let recur = permutation(rest, n-1);
            let combined = recur.map(el => [fixed, ...el]);
            result.push(...combined);
        })
        return result;
    }
    
    // 소수 판별 함수
    const isPrime = (num) => {
        if (num === 2) return true;
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // 3가지 조합의 경우의 수 도출 후 합으로 map
    const sums = permutation(nums, 3).map(el => el.reduce((acc, cur) => acc + cur));
    // 소수 판별 후 개수 반환
    const answer = sums.filter(el => isPrime(el)).length;

    return answer;    
}