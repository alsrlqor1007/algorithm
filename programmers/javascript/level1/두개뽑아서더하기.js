/*
정수 배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
*/

function solution(numbers) {
    let sums = [];
    for (let i = 0; i < numbers.length - 1; i++) { // 시간 복잡도: O(n^2)
        for (let j = i + 1; j < numbers.length; j++) {
            sums.push(numbers[i] + numbers[j]);
        }
    }
    let answer = [...new Set(sums)].sort((a,b) => a - b); // sort 함수 시간 복잡도: O(NlogN)
    return answer;
}
