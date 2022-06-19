function orderOfPresentation (N, K) {
    // 총 경우의 수의 개수
    const factorial = (n) => {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    let order = 0;
    // 발표한 조 중복 방지를 위한 기록장치
    const isUsed = Array(N + 1).fill(false);

    // 주어진 발표 순서 배열 순회
    for (let i = 0; i < K.length; i++) {
        const num = K[i];
        // 발표 여부 기록
        isUsed[num] = true;

        // 그 아래 숫자들이 같은 자리에 오는 경우들 카운트
        const formerNums = isUsed.slice(1, num);
        const unUsed = formerNums.filter(el => el === false).length;

        // 그만큼 경우의 수가 존재하기 때문에 앞 숫자와 해당하는 총 경우의 수 개수 곱셈
        const formerCounts = unUsed * factorial(N - i - 1);

        // 앞에 오는 경우의 수(순서) 카운트
        order += formerCounts;
    }

    return order;
}

// 모든 순열 경우의 수를 구해서 찾기에는 복잡도가 너무 커진다.