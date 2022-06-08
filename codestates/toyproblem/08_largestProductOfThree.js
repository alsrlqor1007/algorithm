const largestProductOfThree = function (arr) {
    // 복사본 오름차순 정렬
    let sorted = arr.slice().sort((a, b) => a - b);
    let len = arr.length;

     // 가장 큰 수 3개 곱
    const threePositive = sorted[len-1] * sorted[len-2] * sorted[len-3];
    // 절대값이 가장 큰 2개의 음수를 고려한 전체 3개 곱
    const twoNegative = sorted[len-1] * sorted[0] * sorted[1];

    // 그 중 더 큰 값
    return Math.max(threePositive, twoNegative);
};

// 짝수 개의 음수를 곱하면 양수가 나와 절대값이 큰 음수들의 곱이 더 클 경우도 있다는 것 고려