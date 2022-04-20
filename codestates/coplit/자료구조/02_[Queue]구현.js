class Queue {
    // 가장 앞에 있는 요소를 front,
    // 가장 뒤에 있는 요소를 rear 라고 했을 때
    // queue constructor 생성
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    // queue의 사이즈를 구합니다.
    // queue는 추가될 때, rear의 값이 커지고 삭제 될 때, front가 변경이 때문에 각 값을 알아야 size를 구할 수 있습니다.
    size() {
        return this.rear - this.front;
    }

    // queue에 element를 추가합니다.
    // 새롭게 추가될 요소의 인덱스를 나타내는 this.rear를 키로, 요소를 값으로 하여 storage에 할당합니다. this.rear은 다음 인덱스를 가리키게 하여 새로운 요소에 대비합니다.
    enqueue(element) {
        this.storage[this.rear] = element;
        this.rear += 1;
    }
    
    // queue에서 element를 제거 한 뒤 해당 element를 반환합니다.
    // 만약 size가 0이라면 아무 일도 일어나지 않습니다.
    // this.front+1로 가장 앞에 있는 요소를 다시 설정한 후 변수에 저장하고, 큐에서 삭제합니다.
    dequeue() {
        if (this.size() === 0) {
        return;
        }
        const result = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
        return result;
    }
}