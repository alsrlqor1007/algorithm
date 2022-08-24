## Tree Traversal

트리 구조를 순회하는 데에는 크게 2가지 방법이 있다.

- Breath-first Search(BFS)
- Depth-first Search(DFS)

이 두 가지 방법의 차이는 방향에 있다. BFS는 루트 노드에서 시작해 자식 노드 레벨로 내려가며 같은 자식노드 레벨의 가로로 순회를 진행한다.
DFS는 수직으로 먼저 접근한다. DFS에는 `Inorder`, `Preorder`, `Postorder`로 3가지 종류가 있다.

<br></br>

### Breath First Search

BFS는 자식 노드를 우선적으로 보는 것이 아니라 같은 레벨에 존재하는 모든 노드, 즉 형제 노드들을 먼저 방문한다. 그렇다면 로직으로 BFS를 어떻게 나타낼까? 코드로 구현하기 위해서는 선입선출의 성격을 가진 Queue를 활용한다.

```
- 방문한 노드를 기록할 수 있는 큐(Queue)와 변수를 선언한다. 큐는 배열로 될 수 있다.
- 큐에 루트 노드를 먼저 위치시킨다.
- 큐에 값이 존재하는 동안은 계속 반복문을 수행한다.
  - 큐에서 노드를 하나 제거하고, 해당 노드가 저장하고 있는 노드(자식노드)를 새롭게 추가한다.
  - 제거한 노드에게 좌측 노드가 존재한다면 큐에 추가한다.
  - 제거한 노드에게 우측 노드가 존재한다면 큐에 추가한다.
- 값들을 저장한 변수를 반환한다.
```