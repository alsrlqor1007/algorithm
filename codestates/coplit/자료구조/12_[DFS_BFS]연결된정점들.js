function connectedVertices(edges) {
    // input edges에 맞는 행렬 생성을 위해 최대 정점 값 추출
    const max = Math.max(...edges.flat());

    // input edges에 맞는 빈 행렬 선언
    let matrix  = new Array(max+1).fill(0).map(el => new Array(max+1).fill(0));

    // edges에 따라 간선 추가
    edges.forEach(el => {
        matrix[el[0]][el[1]] = 1;
        matrix[el[1]][el[0]] = 1;
    });

    // 탐색 기록 장치 생성
    let isVisited = new Array(max+1).fill(false);
    let components = 0;

    // BFS로 탐색하는 함수 선언
    const bfs = (vertex) => {
        // input으로 들어온 첫 번째 정점부터 탐색 시작
        let queue = [vertex];
        isVisited[vertex] = true;

        while (queue.length) {
            let current = queue.shift();
            // 탐색 중인 정점과 연결된 간선 확인
            for (let i = 0; i <= matrix[current].length; i++) {
                // 탐색한 적이 없고, 현재 탐색 중인 정점과 간선으로 연결된 정점이라면 다음 탐색 대상이 된다.
                // 탐색 장치에 간선으로 연결된 정점들의 방문 기록이 모두 true로 채워질 경우 queue.length는 0(false)로 while문 종료
                if (!isVisited[i] && matrix[current][i] === 1) {
                    queue.push(i);
                    isVisited[i] = true;
                }
            }
        }
    }

    // DFS로 탐색하는 함수 선언
    const dfs = (vertex) => {
        isVisited[vertex] = true;

        // 탐색 중인 정점과 연결된 간선 확인
        for (let i = 0; i < matrix[vertex].length; i++) {
            // 탐색한 적이 없고, 현재 탐색 중인 정점과 간선으로 연결된 정점이라면 재귀로로 다음 탐색을 진행한다.
            // 재귀로 반복되면서 탐색 장치에 간선으로 연결된 정덤들을 모두 방문하면 종료
            if (!isVisited[vertex] && matrix[vertex][i] === 1) {
                dfs(i);
            }
        }
    }

    // matrix 순회하면서 컴포넌트 갯수 카운트
    for (let i = 0; i < matrix.length; i++) {
        // 탐색하지 않았던 정점일 경우 bfs나 dfs 함수 이용
        // 탐색 함수(bfs or dfs)가 동작하면서 탐색한 정점은 isVisited에 기록된다. 따라서 matrix를 순회히면서 중복으로 탐색하지 않는다.
        if (!isVisited[i]) {
            bfs(i);
            // 또는 dfs(i);
            components++;
        }
    }

    return components;
}