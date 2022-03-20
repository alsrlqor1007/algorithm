/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

s는 길이 1 이상, 길이 8 이하인 문자열입니다.
*/

function solution(s) {
    if ((s.length === 4 || s.length === 6) && !isNaN(Number(s)) && !s.includes("e")) {
        return true;
    } return false;
}


/*
자바스크립트의 e 표기법
자바스크립트에서 큰 숫자는 exponent 표기법을 사용해 표현할 수 있다. e는 대소문자를 가리지 않는다.
e 앞의 숫자를 뒤에 있는 수자 만큼 10으로 곱한다. e 뒤에 -를 표기하면 앞 숫자를 소수로도 나타낼 수 있다.

테스트케이스에서 "1e22"를 true로 판별한다.
"1e22"는 1뒤에 숫자 0이 22개가 붙는 숫자가 되기 때문에 숫자 타입으로 판별하는 것이다.
*/

// 다른 사람 풀이
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
// 정규 표현식 사용