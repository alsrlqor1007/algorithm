const isSubsetOf = function (base, sample) {
    // 매개변수로 받은 배열 모두 오름차순 정렬
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);

    // 문제 해결에 필요한 모듈 선언
    const findElement = (el, arr, start) => {
        for (let i = start; i < arr.length; i++) {
            // el이 arr의 요소로 존재할 경우 해당 인덱스 번호 반환
            if (el === arr[i]) return i;
            // 오름차순으로 정렬되어 있기 때문에 arr의 요소보다 작다면 뒤에 순회하는 부분에도 존재하지 않는다.
            else if (el < arr[i]) return -1;
        };
        // 끝까지 존재하지 않을 경우 -1 반환
        return -1;
    }

    // 0번째 인덱스 번호에서 시작
    let startIdx = 0;
    for (let i = 0; i < sample.length; i++) {
        // findElement로 base 배열에 포함하고 있는지 존재여부 판단
        startIdx = findElement(sample[i], base, startIdx);
        // -1이 도출될 경우 false 반환
        if (startIdx === -1) return false;
    }
    // base 순회 끝까지 -1 반환하지 않을 경우 부분 집합으로 존재하기 때문에 true 반환
    return true;
}