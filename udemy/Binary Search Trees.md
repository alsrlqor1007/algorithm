## Binary Search Trees

### Introduction to Trees

A data structure that consists of nodes in a parent/child relationship.

<div align="center">

![](https://gmlwjd9405.github.io/images/data-structure-tree/tree-terms.png)

</div>

트리 구조는 연결 리스트와 같이 노드로 구성된 자료구조지만 노드 간 부모-자식 관계가 존재한다. 하나의 노드는 다른 노드 또는 2개 이상의 노드로 나뭇가지처럼 뻗어나가기 때문에 트리라고 한다. 실제로는 하나의 노드에서 나무 형태로 뻗어 내려가는 뒤집은 구조이다. 가장 상단의 노드는 루트(root) 노드라고 한다. 연결 리스트는 linear 특징을 갖고 있다면 트리는 `non-linear` 특징을 갖고 있다. 연결 리스트는 하나의 노드로만 연결되어 있는 반면, 트리는 하나 이상의 노드로 연결될 수 있기 때문이다. 그리고 수평으로 같은 깊이의 노드 또는 거꾸로 부모 노드로 향해 이어져있는 것은 트리 구조라고 할 수 없다. 또한, 각 노드에겐 하나의 엔드 포인트만 존재해야 한다.

<br></br>

### 트리 구조 용어들

- `Root`: The top node in a tree.
- `Child`: A node directly connected to another node when moving away from the Root.
- `Parent`: The converse notion of a child.
- `Siblings`: A group of nodes with the same parent.
- `Leaf`: A node with no children.
- `Edge`: The connection between one node and another.

<br></br>

...
