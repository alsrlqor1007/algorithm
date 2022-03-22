/*
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
*/

function solution(s) {
    let arr = [];
    let tmp = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') tmp += s[i];
        if (s[i] === ' ' || i === s.length - 1) {
        arr.push(tmp);
        tmp = '';
        }
    }
    let answer = `${Math.min(...arr)} ${Math.max(...arr)}`;
    return answer;
}

// 다른 사람 풀이
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}

// Math.min과 max가 문자열에서도 작동한다.