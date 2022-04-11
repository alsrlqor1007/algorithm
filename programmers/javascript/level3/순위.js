/*
n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다.
심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.
선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

선수의 수는 1명 이상 100명 이하입니다.
경기 결과는 1개 이상 4,500개 이하입니다.
results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.
모든 경기 결과에는 모순이 없습니다.
*/

function solution(n, results) {
    // 조건에 해당하는 빈 행렬 생성
    let matrix = new Array(n).fill(0).map(el => new Array(n).fill(0));

    for (let ele of results) {
        matrix[ele[0] - 1][ele[1] - 1] = 1;
        matrix[ele[1] - 1][ele[0] - 1] = -1;
    }

    const complete = (matrix) => {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] === 1) {
                    for (let z = 0; z < matrix.length; z++) {
                        if (matrix[j][z] === 1) matrix[i][z] = 1;
                    }
                } else if (matrix[i][j] === -1) {
                    for (let z = 0; z < matrix.length; z++) {
                        if (matrix[j][z] === -1) matrix[i][z] = -1;
                    }
                }
            }
        }
    }
    
    for (let v = 0; v <= n; v++) complete(matrix);
    
    let count = 0;
    for (let el of matrix) {
        if (el.filter(el => el === 0).length === 1) count++;
    }
    
    return count;
}


// 다른 사람 풀이
function solution(n, results) {
    // 플로이드 - 와샬 알고리즘

    // 모든 선수의 승패를 기록하는 배열
    // a[i][j] : i 선수와 j 선수의 실력차
    // null : 알 수 없음
    const a = [];
    for (let i = 0; i < n; i++) {
        a[i] = [];
        for (let j = 0; j < n; j++) {
            a[i][j] = null;
        }
    }

    // results의 내용 반영
    // a[i][j] === true : i 선수가 j 선수보다 강함
    results.forEach(
        v => {
            a[v[0] - 1][v[1] - 1] = true;
        }
    );

    // 추정 시작
    // 0 ~ n-1인 k 선수에 대해 i가 k보다 강하고 k가 j보다 강하다면 i가 j보다 강함
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                a[i][j] = a[i][j] || (a[i][k] && a[k][j]);
            }
        }
    }

    let answer = n;
    // 순위를 가늠할 수 없는 선수의 수를 줄여나간다
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            // i와 j선수의 차이를 알 수 없다면 감소
            if (a[i][j] === null && a[j][i] === null) {
                answer--;
                break;
            }
        }
    }

    return answer;
}