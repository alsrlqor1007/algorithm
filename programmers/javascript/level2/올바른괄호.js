/*
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*/

function solution(s){
    let leftParen = 0;
    let rightParen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") leftParen++;
        else if (s[i] === ")") rightParen++;
        if (leftParen < rightParen) return false;
        if (i === s.length - 1 && leftParen !== rightParen) return false;
    }
    return true;
}


// 다른 사람 풀이
function solution(s){
    let cum = 0;
    for (let paren of s) {
        cum += paren === '('? 1 : -1; // paren이 "("이라면 1을 더하고 아니면 -1을 한다.
        if (cum < 0) return false; // true 케이스라면 음수가 나올 수 없다. 먼저 괄호가 닫히면 안됨. 
    }
    return cum === 0 ? true : false; // 마지막에 열리기만하고 닫히지 않는 false 케이스 고려
}