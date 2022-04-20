class Stack {
    // stack constructor 생성
    constructor() {
        this.storage = {}; // 데이터 저장공간
        this.top = 0; // 스택 가장 상단 포인터 변수 초기화
    }

    // stack의 사이즈를 구합니다.
    // this.top은 스택이 쌓일 때마다 하나씩 증가하기 때문에 top으로 size를 구할 수 있습니다.
    // this.top은 스택에 새롭게 추가될 요소의 인덱스를 나타냅니다. 0부터 1씩 증감하며 표현하기 때문에 전체 요소의 개수를 나타낼 수 있습니다
    size() {
        return this.top;
    }

    // stack에 element를 추가합니다.
    // 새롭게 추가될 요소의 인덱스를 나타내는 this.top을 키로, 요소를 값으로 하여 storage에 할당합니다. this.top은 다음 인덱스를 가리키게 하여 새로운 요소에 대비합니다.
    push(element) {
        this.storage[this.top] = element; // 포인터변수 추가되기 전의 포인터변수를 키로 push 데이터 추가
        this.top += 1; // 포인터 변수 갱신
    }

    // stack에서 element를 제거한 뒤 해당 element를 반환합니다.
    // 만약 size가 0이라면 아무 일도 일어나지 않습니다.
    // top-1로 최상단을 설정한 후 변수에 저장하고, 스택에서 삭제합니다.
    // 하나를 제거했으니 top도 감소합니다.
    pop() {
        if (this.size() <= 0) {
        // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
        // 빈스택 this.top이 0 또는 top 초기값 -1도 가능(주의사항)
            return;
        }
        const result = this.storage[this.top - 1]; // 아래 delete하면 리턴할 삭제 데이터가 사라지니 미리 저장
        delete this.storage[this.top - 1]; // pop 처리
        this.top -= 1;
        return result;
    }
}