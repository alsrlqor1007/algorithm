/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
*/

function solution(s, n) {
    // s의 문자열에서 n만큼 이동한 각각의 값 출력
    let smallAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let bigAlphabet = smallAlphabet.toUpperCase();
    answer = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer = answer + ' '; // 공백 처리
        }
        if (smallAlphabet.includes(s[i])) { // 소문자일 경우
          let idx = smallAlphabet.indexOf(s[i]);
          if (idx + n > 25) {
            answer = answer + smallAlphabet[n - (26 - idx)];
          } else {
              answer = answer + smallAlphabet[idx+n]
          }
        } else if (bigAlphabet.includes(s[i])) { // 대문자일 경우
            let idx = bigAlphabet.indexOf(s[i]);
            if (idx + n > 25) {
                answer = answer + bigAlphabet[n - (26 - idx)];
            } else {
                answer = answer + bigAlphabet[idx+n]
            }
        }
    }
    return answer;
}

// 다른 사람 풀이
function caesar(s, n) {
  return s.replace(/([a-z])|([A-Z])/g, (c, lowerCase) => {
    var startCode = lowerCase ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)
    return String.fromCharCode((c.charCodeAt(0) - startCode + n) % 26 + startCode)
  })
}
// charCodeAt: UTF-16 정수 반환
// fromCharCode: UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성 및 반환