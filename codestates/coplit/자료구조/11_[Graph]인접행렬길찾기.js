/*
순회하는 문제.
Queue-While을 사용하는 BFS 사용
현재 위치를 나타내는 queue
한 번 탐색한 곳은 다시 탐색하지 않기 위해 기록 장치 생성하고 탐색한 곳이면 표시
queue 탈출 조건: queue 길이가 0일 때
현재 위치가 to일 경우 true 반환
그렇지 않다면 해당 정점의 모든 간선 확인
간선으로 연결되어 있고 탐색하지 않았던 정점이라면 queue에 넣고 탐색 기록 후 로직 반복
*/

function getDirections(matrix, from, to) {
    let queue = [from];
    // 정점의 갯수 만큼 탐색 기록장치 생성
    let isVisited = new Array(matrix.length).fill(false);
    isVisited[from] = true; // 첫 번째 from input에 대한 탐색 기록 true

    // queue에 더이상 탐색 정점이 들어가지 않을 때까지
    while (queue.length) {
        let current = queue.shift(); // 탐색 정점

        if (current === to) return true; // 바로 to일 경우 true 반환

        // 해당 정점이 갖고 있는 간선 순회하며 확인
        for (let i = 0; i < matrix[current].length; i++) {
            // 간선이 있고, 간서으로 연결된 해당 정점이 이전에 탐색해보지 않은 정점이라면 수행
            if (matrix[current][i] === 1 && isVisited[i] === false) {
                queue.push(i); // 다음 루프에서 해당 정점 탐색하기 위해 queue에 넣기
                isVisited[i] = true; // 탐색 기록 true
            }
        }
    }

    // 끝까지 없다면 결국 false 반환
    return false;
}


// reference
function getDirections(matrix, from, to) {

    // queue를 간단하게 생성하고, 첫 시작점으로 from을 할당합니다.
    const queue = [from];
    const enqueue = (n) => queue.push(n);
    const dequeue = (n) => queue.shift();

    // 방문했다는 것을 표시하기 위해 1차원 행렬을 생성합니다.
    const isVisited = new Array(matrix.length).fill(false);

    // 첫 정점 방문 여부를 표시합니다.
    isVisited[from] = true

    // queue(방문할 곳)의 사이즈가 0이 될 때까지 반복합니다.
    while (queue.length > 0) {

        // queue에서 정점을 하나 빼서 now에 할당합니다.
        const now = dequeue();

        // 목적지인지 검사하고, 목적지라면 true를 반환합니다.
        if (now === to) return true;

        // 해당 정점의 간선들을 확인합니다.
        for (let next = 0; next < matrix[now].length; next++) {
        // 만약, 간선이 있고 방문하지 않았다면
            if (matrix[now][next] && !isVisited[next]){
                // queue에 next를 넣습니다. (다음 정점으로 가기 위해)
                enqueue(next);
                // 해당 정점을 방문했다는 것을 표시합니다.
                isVisited[next] = true
            }
        }
        
    }

    // 길이 없다면 false를 반환합니다.
    return false;
}