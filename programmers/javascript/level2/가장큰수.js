/*
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

// 첫 시도 (런타임 에러)
function solution(numbers) {
    if ([...new Set(numbers)][0] === 0) return '0';

    // 조합할 수 있는 숫자 구하기
    // 시간 복잡도의 크기가 크다.
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
    
    // 모든 경우 구하기
    let cases = permutation(numbers, numbers.length);

    // 각 요소를 이어진 숫자로 만든 후 가장 큰 수 구하기
    let largest = cases.map(el => el.join('')).reduce((acc, cur) => { return acc > cur ? acc : cur });
    return largest;
}


// 다시 시도
function solution(numbers) {
    // 앞 뒤로 숫자 이어붙여서 비교 후 정렬
    // 결과적으로는 각 숫자의 가장 앞 자리 수 크기에 따라 정렬이 된다.
    const sortFunc = (a, b) => {
        const A = parseInt(a.toString() + b.toString());
        const B = parseInt(b.toString() + a.toString());
        return B - A;
    }
    
    // 위 sorFunc 적용 후 이어붙이기
    let sorted = numbers.sort(sortFunc).join('');
    if (sorted[0] === '0') return '0'; // 예외 케이스 처리

    return sorted;
}