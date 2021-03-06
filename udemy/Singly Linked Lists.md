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

<br></br>

### Set

Changing the value of a node based on it's position in the Linked List.

Set은 두 가지 인자를 받는다. 위치나 인덱스 번호와 해당 위치에 변경할 새로운 값이다.

- Set 작업 수도 코드

```
- 값과 인덱스 번호를 인자로 받는다.
- get 함수를 이용해서 인덱스 번호에 해당하는 노드를 찾는다.
- 찾고자 하는 노드가 존재하지 않을 경우, false를 반환한다.
- 존재할 경우, 해당 노드의 값을 인자로 받은 값으로 대체하고 true를 반환한다.
```

- Set 작업 실제 코드

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
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}
```

<br></br>

### Insert

Adding a node to the Linked List at a specific position.

이미 존재하는 기존의 노드의 정보를 갱신하는 것이 아니라 위치가 어디든 연결 리스트에 새로운 노드를 삽입하는 것이다.

- Insert 작업 수도 코드

```
- 인덱스 번호가 0보다 작거나 연결 리스트의 전체 길이보다 크다면 false를 반환한다.
- 인덱스 번호가 전체 길이와 같다면 가장 끝에 새로운 노드를 추가한다.
- 인덱스 번호가 0이라면 가장 앞에 새로운 노드를 추가한다.(Unshift)
- 위 경우에 모두 해당되지 않는다면 get 로직을 활용해 -1번째 인덱스의 노드에 접근한다.
- 새로운 노드를 접근한 노드의 다음 노드로 지정한다.
- Length 증가시킨다.
- true를 반환한다.
```

- Insert 작업 실제 코드

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
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}
```

<br></br>

### Remove

Removing a node from the Linked List at a specific position.

인덱스 번호를 받아 해당 인덱스의 요소 값을 삭제하고 채우는 함수이다. 첫 부분을 삭제한다면 가장 앞 요소를 삭제하고, 가장 마지막 부문을 삭제한다면 가장 마지막 요소를 삭제한다. 중간에 어느 값을 삭제하고자 한다면 이보다는 조금 더 복잡하다.

- Remove 작업 수도 코드

```
- 인덱스 값이 0보다 작거나 전체 길이보다 크다면 undefined를 반환한다.
- 인덱스 값이 '전체 길이 - 1'과 같다면 pop을 수행한다.
- 인덱스 값이 0이라면 shift를 수행한다.
- 위에 모두 해당되지 않으면 get으로 '인덱스 값 - 1'의 위치에 접근한다.
- 해당 노드의 다음 노드를 다다음 노드로 지정한다.
- 전체 길이를 줄인다.
- 삭제한 노드의 값을 반환한다.
```

- Remove 작업 실제 코드

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
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;

        return removed;
    }
}
```

<br></br>

### Reverse

Reversing the Linked List in place.

연결 리스트를 뒤집는 것이다.

- Reverse 작업 수도 코드

```
- Head와 Tail을 바꾼다.
- next와 prev라는 변수를 선언한다.
- node라는 변수를 선언하고 Head 요소를 초기에 할당한다.
- 리스트를 순회한다.
- next 변수에 다음 속성을 할당한다.
- node 변수에 다음 속성을 할당한다.
- prev 변수에 node 변수 값을 할당한다.
- node 변수에 next 변수 값을 할당한다.
```

- Reverse 작업 실제 코드

```JSX
class SinglyLinkedList {
    contructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for (var = i; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    // 배열 형태로 연결 리스트 요소들을 console.log로 출력한다.
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
```

<br></br>

### Big O Notation of Singly Linked List

- Insertion: O(1)
- Removal: O(1) or O(N)
- Searching: O(N)
- Access: O(N)

삽입 작업은 O(1)의 시간 복잡도를 가진다. 가장 마지막에 새로운 노드를 추가해주고 Tail을 새롭게 지정해주었다. 서두에 삽입한다면 새로운 노드를 생성한 후 Head로 지정했다. 어느 위치더라도 새로운 노드 삽입 작업은 동일하게 소요된다. 하지만 배열일 경우 그렇지 않다. 삽입 후 모든 요소의 인덱스 번호를 변경해줘야 하기 때문에 더 많은 작업이 필요하다. 따라서 삽입하는 데에 있어서는 연결 리스트가 더 빠르다고 할 수 있다.
삭제 작업은 삭제할 노드의 위치에 따라 시간 복잡도가 다르다. 서두에 위치한 노드를 삭제한다면 O(1)으로 간단하다. Head 노드 다음에 위치한 노드를 새로운 Head로 지정한다. 하지만 마지막에 위치한 노드를 삭제할 때는 조금 더 복잡하다. 마지막 Tail 노드의 직전 노드를 찾아야 하기 때문에 연결 리스트 전체를 순회해야 하기 때문이다.
탐색은 특정 노드를 찾는 작업이다. 따라서 연결 리스트의 크기 또는 찾고자 하는 노드의 위치에 따라 복잡도는 증가한다. 배열과 비교하면 배열은 인덱스 번호가 존재하기 때문에 인덱스 번호에 해당하는 요소를 바로 찾을 수 있어 배열이 더 빠르다.
정리하자면 삽입과 서두 요소 삭제 작업이 주로 필요한 자료에서는 배열보다 연결 리스트가 더 유용하지만, 특정 요소를 탐색하거나 접근할 때는 내장된 인덱스 번호가 존재하는 배열이 더 효율적이다.
