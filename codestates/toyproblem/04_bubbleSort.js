const bubbleSort = function (arr) {
    // 구조 분해 할당을 이용한 위치 변경 함수
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        // 배열을 모두 순회하기 전에 최종 정렬이 맞춰진 경우
        if (noSwaps) break;
    }

    return arr;
};


// 외부 반복문 방향 반대의 풀이
const bubbleSort2 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapcount = 0;

        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapcount++;
            }
        }
        if (swapcount === 0) break;
    }
    return arr;
};