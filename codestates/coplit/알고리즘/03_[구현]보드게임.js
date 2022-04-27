function boardGame(board, operation) {
    // 문제에 주어진 방향
    const DIR = {
        'U': [-1, 0],
        'D': [1, 0],
        'R': [0, 1],
        'L': [0, -1]
    };

    // 주어진 보드의 범위를 초과하는지 확인하는 함수
    const isValid = (x, y) => {
        return x >= 0 && x < board.length && y >= 0 && y < board.length;
    };

    // 시작점
    let X = 0, Y = 0, score = 0;

    // operation 순회하면서 차례로 작업 수행
    for (let i = 0; i < operation.length; i++) {
        // 움직임 적용
        const [dY, dX] = DIR[operation[i]];
        Y += dY;
        X += dX;

        // 이동했을 때 보드 범위 초과여부 확인
        if (!isValid(X, Y)) return 'OUT';
        // 스코어 합산
        score += board[Y][X];
    }

    // 최종 스코어 반환
    return score;
};