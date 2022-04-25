function fibonacci(n) {
    // n = 1, 2일 경우 먼저 memo 등록
    let memo = [0 , 1];

    // 보조 함수 선언
    let aux = (n) => {
        // memo에 있을 경우 해당 값 반환
        if (memo[n] !== undefined) return memo[n];
        // 아닐 경우 직전 값과 직전전 값의 합 도출
        // aux 함수 재귀로 구해질 때까지 동작
        memo[n] = aux(n - 1) + aux(n - 2);
        return memo[n];
    }
    
    return aux(n);
}

// 동적 프로그래밍, 메모이제이션 활용
// 이미 해결한 문제의 정답을 따로 기록해두고, 다시 해결하지 않는 기법