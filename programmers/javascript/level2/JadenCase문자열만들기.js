/*
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다.
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.
*/

function solution(s) {
    let arr = s.split(' ');
    let totalstr = [];
    for (let el of arr) {
        let str = '';
        for (let i = 0; i < el.length; i++) {
            if (i === 0) str += el[i].toUpperCase();
            else str += el[i].toLowerCase();
        }
        totalstr.push(str);
    }
    answer = totalstr.join(' ');
    return answer;
}

// 다른 사람 풀이
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
// charAt: 문자열에서 인자로 들어가는 특정 인덱스에 위치하는 유니코드 단일문자를 반환