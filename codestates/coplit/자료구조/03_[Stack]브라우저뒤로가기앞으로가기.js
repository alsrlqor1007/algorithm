function browserStack(actions, start) {
    let prev = [];
    let next = [];
    let now = start;

    // start 매개변수에 string이 아닌 자료형이 들어갔을 때 false 리턴
    if (typeof(start) !== 'string') return false;

    // 순회하면서 조건에 따른 작업 수행
    for (let i = 0; i < actions.length; i++) {
        if (actions[i] === 1 && !!next.length) { // 앞으로 가기
            prev.push(now);
            now = next.pop();
        } else if (actions[i] === -1 && !!prev.length) { // 뒤로 가기
            next.push(now);
            now = prev.pop();
        } else if (typeof(actions[i]) === 'string') { // 새로운 페이지
            prev.push(now);
            next = [];
            now = actions[i];
        } 
    }

    return [prev, now, next];
}