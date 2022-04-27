function movingStuff(stuff, limit) {
    stuff.sort((a, b) => b - a); // 내림차순으로 짐 리스트 정렬

    let queue = [stuff.shift()]; // 가장 무거운 짐 넣고 시작
    let capa = queue.reduce((acc, cur) => acc + cur);
    let count = 1;

    // 주어진 짐 리스트 모두 옮길 때까지 while문 수행
    while (stuff.length) {
        let smallest = stuff.pop();

        // 남은 짐 중에서 가장 무거운 짐과 작은 짐의 조합에 따라 작업 수행
        if (queue.length < 2 && capa + smallest <= limit) {
            // 박스에 자리가 남고, 총 무게가 limit을 초과하지 않울 경우
            queue.push(smallest);
            capa += smallest;
        } else if (queue.length === 2 || capa + smallest > limit) {
            // 박스 자리가 남지 않거나, limit을  초과할 경우
            stuff.push(smallest);
            let largest = stuff.shift();
            count++;
            queue = [largest];
            capa = largest;
        }
    }

    return count;
}


// reference
function movingStuff(stuff, limit) {
    let twoStuff = 0;
    // 짐을 무게순으로 오름차순 정렬
    let sortedStuff = stuff.sort((a, b) => a - b);
    // 가장 가벼운 짐의 인덱스
    let leftIdx = 0;
    // 가장 무거운 짐의 인덱스
    let rightIdx = sortedStuff.length - 1;

    while (leftIdx < rightIdx) {
        // 가장 가벼운 짐과 무거운 짐의 합이 limit 보다 작거나 같으면 2개를 한번에 나를 수 있다
        if (sortedStuff[leftIdx] + sortedStuff[rightIdx] <= limit) {
        // 다음 짐을 확인하기 위해 가장 가벼운 짐과 무거운 짐을 가리키는 인덱스를 옮겨주고
        // 한번에 2개 옮길 수 있는 개수를 +1 해준다   
            leftIdx++;
            rightIdx--;
            twoStuff++;
        } else {
            // 위 조건에 맞지 않는 경우는 한번에 한 개만 나를 수 있는 경우이기 때문에
            // 가장 무거운 짐의 인덱스만 옮겨준다
            rightIdx--;
        }
    }
    // 전체 짐의 개수에서 한번에 2개를 나를 수 있는 경우를 빼 주면 총 필요한 박스의 개수를 구할 수 있다
    return stuff.length - twoStuff;
}