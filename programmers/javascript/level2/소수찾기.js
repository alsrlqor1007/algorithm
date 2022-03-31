/*
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
*/

function solution(numbers) {
    const arr = numbers.split('');
    
    // 재귀로 순열 구하는 함수
    const permutation = (arr, n) => {
        let result = [];
        if (n === 1) return arr.map(el => [el]); // base case
        
        arr.forEach((fixed, idx, origin) => {
            let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
            let recur = permutation(rest, n - 1);
            let combined = recur.map(el => [fixed, ...el]);
            result.push(...combined);
        })
        return result;
    }
    
    // 모든 순열의 경우의 수 모으기
    let cases = [];
    for (let i = 1; i <= arr.length; i++) {
        cases.push(permutation(arr, i));
    }
    
    // 소수 판별 함수
    const isPrime = (num) => {
        if (num === 2) return true;
        if (num === 1 || num % 2 === 0) return false;
        for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // 중복 제거, 배열 풀기, 숫자형 변환, 소수 판별 적용
    const finalArr = [...new Set(cases.flat().map(el => +el.join('')).filter(el => isPrime(el)))];
    return finalArr.length; // 해당되는 숫자의 갯수
}