function paveBox(boxes) {
  let queue = [];
  let wait = 0;
  let counts = [];
  
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] <= queue[0]) {
      queue.push(boxes[i]); // 포장 중인 박스보다 숫자가 작으면 큐 대기열에 포함
      wait++; // 대기 수 증가
    } else {
      queue = [boxes[i]]; // 포장 중인 박스보다 숫자가 크면 대기열 리셋
      wait = 1; // 대기 수 리셋
    }
    counts.push(wait); // 매 순회차마다 대기 수 기록
  }

  return Math.max(...counts); // 가장 많이 대기하는 수 반환
}


// reference
function paveBox(boxes) {
    let answer = [];
    
    // boxes 배열이 0보다 클 때까지 반복합니다.
    while (boxes.length > 0) {
        let finishIndex = boxes.findIndex(fn => boxes[0] < fn); // boxes[0]보다 큰 수의 인덱스 번호를 찾는다. 찾으면 아래 else문에서 그만큼 자른다.
        
        if (finishIndex === -1) {
            // 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제합니다.
            answer.push(boxes.length);
            boxes.splice(0, boxes.length);

        } else {
            // 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외합니다.
            answer.push(finishIndex);
            boxes.splice(0, finishIndex);
        }
    }

    // 결과물을 반환합니다.
    return Math.max(...answer);
}