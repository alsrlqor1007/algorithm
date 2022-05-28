/*
규칙을 고려하면 피보나치 수열 규칙과 동일하다.
타일이 아직 놓이지 않은 부분은 크기만 다를뿐 같은 종류의 문제라는 것을 알 수 있다.
즉, 2 x 4 보드에 타일을 놓는 방법은 아래 두 가지 방법을 더한 결과와 같다.
1) 2 x 3 보드에 타일을 놓는 방법
2) 2 x 2 보드에 타일을 놓는 방법
*/

// memoization: O(N)
let tiling = function (n) {
    const memo = [0, 1, 2];

    const aux = (size) => {
        if (memo[size] !== undefined) return memo[size];
        if (size <= 2) return memo[n];
        memo[size] = aux(size - 1) + aux(size - 2);
        return memo[size];
    };

    return aux(n);
};


// tabulation: O(N)
let tiling2 = function (n) {
    const memo = [0, 1, 2];

    if (n <= 2) return memo[n];
    for (let size = 3; size <= n; size++) {
        memo[size] = memo[size - 1] + memo[size - 2];
    }

    return memo[n];
};


// slicing window: O(N)
// slicing window은 '필요한 최소한의 데이터만'을 활용하는 것
// 크기 n의 문제에 대한 해결을 위해 필요한 데이터는 오직 2개뿐이라는 사실을 이용
let tiling3 = function (n) {
    let a = 1;
    let b = 2;

    if (n <= 2) return n;
    for (let size = 3; size <= n; size++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};
