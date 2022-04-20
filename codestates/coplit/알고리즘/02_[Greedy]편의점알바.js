function partTimeJob(k) {
    let result = 0;
    const coin = [500, 100, 50, 10, 5, 1]; // 현재 가지고 있는 동전 (문제에 제시)
    
    for (let i = 0; i < coin.length; i++) { // 갖고 있는 동전 순회
        if (k > 0) { // 해당 동전이 만드려는 금액보다 작으면,
            const sum = Math.floor(k / coin[i]); // 해당 동전으로 채울 수 있는 갯수 구하고,
            result += sum; // 해당 동전이 필요한 갯수 계산, 갱신
            k = k - (coin[i] * sum); // 해당 동전으로 채울 수 있는 부분 차감
        }
    }

    return result; // 최종 갯수 리턴
}