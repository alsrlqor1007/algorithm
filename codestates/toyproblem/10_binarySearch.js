const binarySearch = function (arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = parseInt((low + high) / 2);

        if (arr[mid] === target) return mid;

        // 인덱스 범위를 좁혀나간다.
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
};

// 이진탐색 알고리즘(O(logN))을 사용