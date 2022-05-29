/*
가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

타일을 가로로 배치 하는 경우
타일을 세로로 배치 하는 경우

직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

가로의 길이 n은 60,000이하의 자연수 입니다.
경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.
*/

function solution(n) {
    let a = 1;
    let b = 2;
    
    if (n <= 2) return n;
    for (let i = 3; i <= n; i++) {
        const tmp = a + b;
        a = b;
        b = tmp  % 1000000007;
        // n번 째 값을 구할 때마다 나눠준다.
    }
    
    return b;
}


// 다른 사람 풀이
// tabulation
function solution(n) {
    const arr = [0, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
    }

    return arr[n];
}