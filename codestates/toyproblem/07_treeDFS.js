let dfs = function (node) {
    // 매개변수로 받는 노드 값을 결과 배열에 먼저 추가
    let values = [node.value];

    // 해당 노드의 자식배열 요소들을 재귀로 추가(concat)
    // 깊이 우선 탐색이기 때문에 각 노드의 자식노드로 이동한다.(수직이동)
    node.children.forEach(el => {
        values = values.concat(dfs(el));
    })

    return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
    this.value = value;
    this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
};
