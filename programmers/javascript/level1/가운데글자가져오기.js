/*
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

s는 길이가 1 이상, 100이하인 스트링입니다.
*/

function solution(s) {
    let Len = s.length;
    
    if (Len % 2 !== 0) return s[parseInt(Len / 2)];
    else return s[Len/2-1] + s[Len / 2]
}


// 다른 사람 풀이
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}