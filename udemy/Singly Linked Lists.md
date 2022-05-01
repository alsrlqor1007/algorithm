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

### Starter Code and Push

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

연결 리스트는 항상 끝 요소에 대한 정보를 갖고 있기 때문에 데이터의 길이나 크기에 상관없이 끝에 추가하는 작업은 쉽게 가능하다. 추가 후 기존 Tail 노드에서 포인터만 만들어주고 Tail 정보만 수정하면 된다.

- Push 작업 수도 코드

```ㅊㅋ
- 값을 받는 함수여야 한다.
- 함수의 인자로 새로운 노드를 생성해야 한다.
- Head가 없다면 만들어주고 그 다음 새로운 노드가 Tail이 된다.
- Head가 있다면 Tail에 새로운 노드를 만들어주고 연결 리스트의 Tail 정보를 수정한다.
- Length를 1 증가시킨다.
- 최종 연결 리스트를 반환한다.
```

- Push 작업 실제 코드

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) { // 비어있을 때만 작동한다.
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

// 끝 부분에 요소 계속 추가하는 연결 리스트
var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
```

<br></br>

### Pop

Removing a node from the end of the Linked List.

연결 리스트의 꼬리 노드 하나를 삭제한다. 항상 Tail 정보를 갖고 있기 때문에 삭제해주는 것은 간단하지만, 삭제한 후 새로운 Tail 노드를 지정해주어야 하기 때문에 처음부터 Tail 노드 작전 노드까지 거슬러 올라가야 한다. Tail에서 노드 하나 앞으로 조회하는 법은 없기 때문이다.

예를 들어, 아래와 같은 방식(traverse)으로 Head부터 이동하기 시작해 노드를 찾는다고 할 수 있다.

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

list.traverse()
// HELLO
// GOODBYE
// !
// undefined
```

- Pop 작업 수도 코드

```
- 리스트에 노드가 존재하지 않는다면 undefined를 반환한다.
- Tail에 닿을 때까지 리스트를 순회한다.
- 뒤에서 두 번째 노드의 다음 속성을 null로 지정한다.
- 뒤에서 두 번째 노드를 Tail로 지정한다.
- Length를 1 차감한다.
- 삭제된 노드 값을 반환한다.
```

- Pop 작업 실제 코드

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(val) {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        console.log(current.val);
        console.log(newTail.val);

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");

list.pop();
// pop 메서드 내 console.log 출력 값
console.log(current.val); // !
console.log(newTail.val); // GOODBYE
```

<br></br>

### Shifting

Removing a new node from the beginning of the Linked List.

연결 리스트의 가장 앞에 있는 요소를 삭제하는 작업이다. 최종적으로 삭제한 요소를 빈환할 예정이기 때문에 변수에 저장해두고, 삭제 후 두 번째에 위치해 있던 요소를 Head로 지정해준다.

- Shifting 작업 수도 코드

```
- 연결 리스트에 아무 요소도 존재하지 않는다면 undefined를 반환한다.
- 삭제 전 Head 요소를 변수에 할당한다.
- Head 요소 다음의 요소를 Head로 지정한다.
- Length 1 차감한다.
- 삭제한 요소를 반환한다.
```

- Shifting 작업 실제 코드

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
}
```

<br></br>

### Unshifting

Adding a new node to the beginning of the Linked List.

push와 다른 것은 리스트의 앞 부분에 삽입한다는 것이다. 우리는 이미 Head 정보를 갖고 있기 때문에 새로운 Head를 선언해주고 기존 Head를 가르키도록 포인터를 추가해주면 된다.

- Unshifting 작업 수도 코드

```
- 값을 인자로 받는다.
- 인자롭 받은 값으로 새로운 노드를 생성한다.
- 리스트에 Head가 없는 경우라면 Head로 지정하고 새로 생성된 노드를 Tail로 지정한다.
- 그렇지 않다면 새로 생성된 노드의 다음 노드를 기존 Head 노드로 지정한다.
- 새로 생성된 노드를 새 Head로 지정한다.
- Length를 1 증가시킨다.
- 연결 리스트를 반환한다.
```

- Unshifting 작업 실제 코드

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
```

<br></br>

### Get

Retrieving a node by it's position in the Linked List.

특정 인덱스 번호를 받으면 해당 위치의 요소를 조회하는 것이다. 0을 받으면 Head를 반환하고, 4를 받으면 5번째 요소 값을 반환한다. 하지만 여기서 중요한 것은, 받은 수만큼 리스트를 거쳐서 가야 한다는 것이다. 각 요소가 인덱스 값을 갖고 있지 않기 때문에 처음(0)부터 세면서 찾고자 하는 위치를 찾아야 한다.

- Get 작업 수도 코드

```
- 값을 인자로 받는다.
- 찾고자 하는 인덱스 번호가 0 이하거나, 또는 리스트의 길이와 같거나 더 크다면 null을 반환한다.
- 찾고자 하는 인덱스 번호까지 리스트를 순회하고 해당 인덱스 번호의 노드를 반환한다.
```

- Get 작업 실제 코드

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
}
```
