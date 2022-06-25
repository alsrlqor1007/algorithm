function power(base, exponent) {
    if (exponent === 0) return 1;

    const half = power(base, Math.floor(exponent / 2));
    // parseInt(exponent / 2)도 가능

    const result = (half * half) % 94906249;

    if (exponent % 2 === 0) return result;
    return (result * base) % 94906249;
}

// 2^8 === 2^4 * 2^4
// 2^7 === 2^3 * 2^3 * 2^1

/*
나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다.
하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다.
연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.
*/