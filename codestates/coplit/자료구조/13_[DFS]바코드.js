function barcode(len) {
    const isValid = (str) => {
        // 부분 수열의 특성상 거꾸로 나열하면 더 쉽게 해결이 가능하다고 한다.
        const reversed = str.split('').reverse().join('');

        // 최대 절반만큼만 두 개의 부분 수열이 만들어질 수 있다.
        const halfLen = Math.floor(str.length / 2);

        // 인접한 부분 수열이 동일한지 1번째 인덱스부터 순회하며 확인
        for (let i = 1; i <= halfLen; i++) {
            if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
                // 동일하면 false 반환
                return false;
            }
        }

        // 끝까지 인접해 있는 부분 수열이 동일한 경우가 없으면 true 반환
        return true;
    }

    const num = '123';
    const aux = (str) => {
        // input에 만족하는 str 반환
        if (str.length === len) return str;
        for (let i = 0; i < num.length; i++) {
            // 인접한 부분 수열이 동일 경우가 없을 경우 재귀로 수행
            if (isValid(str + num[i])) {
                const tmp = aux(str + num[i]);
                // null이 아닐 경우 계속해서 유효 값 반환(재귀)
                if (tmp !== null) return tmp;
            }
        }
        // 유효한 문자열을 만들 수 없는 경우
        return null;
    }

    // 빈 값에서 시작
    return aux('');
}