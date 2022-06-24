## Binary Search Trees

### Introduction to Trees

A data structure that consists of nodes in a parent/child relationship.

<div align="center">

![](https://gmlwjd9405.github.io/images/data-structure-tree/tree-terms.png)

</div>

트리 구조는 연결 리스트와 같이 노드로 구성된 자료구조지만 노드 간 부모-자식 관계가 존재한다. 하나의 노드는 다른 노드 또는 2개 이상의 노드로 나뭇가지처럼 뻗어나가기 때문에 트리라고 한다. 실제로는 하나의 노드에서 나무 형태로 뻗어 내려가는 뒤집은 구조이다. 가장 상단의 노드는 루트(root) 노드라고 한다. 연결 리스트는 linear 특징을 갖고 있다면 트리는 `non-linear` 특징을 갖고 있다. 연결 리스트는 하나의 노드로만 연결되어 있는 반면, 트리는 하나 이상의 노드로 연결될 수 있기 때문이다. 그리고 수평으로 같은 깊이의 노드 또는 거꾸로 부모 노드로 향해 이어져있는 것은 트리 구조라고 할 수 없다. 또한, 각 노드에겐 하나의 엔드 포인트만 존재해야 한다.

<br></br>

### 트리 구조 용어들

- `Root` The top node in a tree.
- `Child` A node directly connected to another node when moving away from the Root.
- `Parent` The converse notion of a child.
- `Siblings` A group of nodes with the same parent.
- `Leaf` A node with no children.
- `Edge` The connection between one node and another.

<br></br>

### 트리 구조의 사용

- HTML, DOM
- Network Routing
- Abstract Syntax Trees
- Artificial Intelligence(Mini-Max Tree, Decision Tree)
- Folders in Operating Systems
- Computer File Systems

<br></br>

### Introduction to Binary Trees

트리 구조의 종류에는 여러 가지가 있지만 본 과정에서 다루는 트리는 `Trees`, `Binary Trees`, `Binary Search Trees`이다. 추후 다시 다룰 예정이지만 Binary Search Tree는 정렬된 데이터를 특정 방법으로 저장해 결과 값을 용이하게 반환할 수 있다. Tree는 일반적인 트리 구조이며, Binary Tree는 각 노드에 최대 2개의 자식 노드를 갖고 있는 트리 구조이다. 3개 이상의 자식 노드를 절대 가질 수 없다. 다시 Binary Search Tree는 Binary Tree의 한 종류로 동일하게 최대 2개까지의 자식 노드를 가질 수 있으며 특정 방식으로 노드들이 정렬된다. Binary Search Tree를 줄여서 `BST`라고 부르며, 비교가 가능한 정렬된 데이터들을 저장할 때 사용된다. 데이터의 유형이 문자열이든 숫자든 정렬과 대소 비교처럼 비교가 가능해야 한다. 예를 들어, 루트 노드의 데이터가 10이라면 10보다 작은 수는 좌측 자식 노드에 위치해야 하며 반대로 더 큰 수는 우측 자식 노드에 위치해야 한다. 이 규칙을 모든 자식 노드에게도 계속 적용한다.

<br/>

- How BSTs Work

```
- Every parent node has at most 2 children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent
```

<br></br>

### Searching A Binary Search Tree

...
