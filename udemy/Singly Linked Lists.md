## Singly Linked Lists

### Intro

A data structure that contains a head, tail and length property. Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

`연결 리스트(Linked List)`란, 문자형이든 숫자형이든 그 어떤 종류의 자료형을 저장하는 자료구조이다. 배열처럼 순서가 정해져 있지만 배열과 다른 점이 있다. 배열은 각 요소가 매핑되어 있다고 할 수 있다. 각 요소마다 인덱스 번호가 정해져 있다. 언제든 요소를 추가하면 인덱스 번호가 부여된다. 하지만 연결 리스트는 인덱스 번호 없이 다음 요소를 가리키는 요소들의 집합이며 크기가 계속 변한다. 마치 여러 개의 열차 칸으로 이루어진 기차처럼 말이다. 연결 리스트는 노드와 노드 저장소로 구성되어 있다. 각 노드는 다음 노드에 대한 레퍼런스를 갖고 있으며, 마지막 노드라면 다음 노드가 존재하지 않기 때문에 null을 레퍼런스로 갖는다. 연결 리스트에서는 3가지 속성을 갖고 있는데, `Head`는 연결 리스트의 시작점이고 `Tail`은 끝 부분이다. 따라서 사이에 있는 노드 정보는 따로 갖고 있지 않다. Head로부터 바로 다음 노드에 대한 정보를 알아내고, 또 그 다음 노드에 대한 정보를 알아내는 방식으로 끝까지 접근한다. Head와 Tail에 이어 `Length`, 길이 또한 바로 확인할 수 있는 속성이다.
![](https://miro.medium.com/max/953/1*elJncKhH_P9oQglfI1aVQA.png)
이번 섹션에서 다루는 `단일 연결 리스트(Singly Linked List)`는 해당 노드의 다음 노드에 대한 정보만 갖고 있지만, `이중 연결 리스트(Double Linked List)`는 이전 노드의 정보까지 갖고 있다.
연결 리스트 사이에 요소를 추가하는 것에 대해서는 다시 다룰 예정이지만, 간략하게 먼저 얘기하자면 삽입 위치까지 Head부터 타고 들어간 후에 위치를 찾으면 삽입한다. 그리고 서두에 요소를 추가한다면 추가 후 원래 가장 앞에 있던 요소를 가리키도록 하면 된다.

#### 배열과 비교

|                       Lists                       |                 Array                  |
| :-----------------------------------------------: | :------------------------------------: |
|                인덱스 번호가 없다.                | 인덱스 번호와 함께 순서가 정해져 있다. |
| 다음 노드를 가리키는 포인터로 서로 연결되어 있다. |   요소의 삽입과 삭제에 비용이 든다.    |
|            임의로 요소 접근이 안된다.             |   특정 인덱스로 바로 접근할 수 있다.   |

연결 리스트를 사용하는 가장 주된 이유 중 하나는 매우 긴 데이터 또는 많은 내용을 담고 있는 자료형에서 요소의 삽입과 삭제가 매우 중요한 작업을 해야 한다면, 그리고 특정 요소로 접근할 필요가 없이 데이터를 저장하기만 한다면 연결 리스트가 유용할 것이다.
<br></br>

### Starter Code and Push Intro

```JSX
// piece of data: val
// reference to next node: next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Hi-there-how-are-you를 순차적으로 추가한 연결 리스트이다.
var first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")
```

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {

    }
}

// 끝 부분에 요소 계속 추가하는 연결 리스트
var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
```

연결 리스트는 항상 끝 요소에 대한 정보를 갖고 있기 때문에 데이터의 길이나 크기에 상관없이 끝에 추가하는 작업은 쉽게 가능하다. 추가 후 기존 Tail 노드에서 포인터만 만들어주고 Tail 정보만 수정하면 된다.

- Push 수도 코드

```
- 값을 받는 함수여야 한다.
- 함수의 인자로 새로운 노드를 생성해야 한다.
- Head가 없다면 만들어주고 그 다음 새로운 노드가 Tail이 된다.
- Head가 있다면 Tail에 새로운 노드를 만들어주고 연결 리스트의 Tail 정보를 수정한다.
- Length를 1 증가시킨다.
```

...
