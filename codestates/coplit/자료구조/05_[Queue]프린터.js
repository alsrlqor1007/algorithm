function queuePrinter(bufferSize, capacities, documents) {
  let queue = new Array(bufferSize).fill(0); // 순차적으로 실행되기 때문에 dummy data 채우기

  queue.push(documents.shift()); // 출력 대기열에 들어간 문서가 없을 경우 로직이 끝날 예정이기 때문에 첫 번째 문서 넣고 시작
  let current = queue.reduce((acc, cur) => acc + cur); // 현재 대기열 총 capacity
  queue.shift(); // dummy 하나 출력
  let sec = 1; // 첫 번째 문서 들어간 1초부터 시작

  while (current) { // 출력 대기열에 들어가 있는 문서가 없을 떄까지 while 실행
    current -= queue.shift(); // 대기열 가장 앞 문서 출력 완료
    let tmp = documents.shift(); // 대기열로 들어갈 documents 서두 문서 하나

    if (current + tmp <= capacities) { // capacities 조건 통과할 경우
      queue.push(tmp); // 대기열 진입
      current += tmp; // 대기열 용량
    } else { // capacities 초과할 경우
      documents.unshift(tmp); // 다시 documents로 롤백
      queue.push(0); // 용량 0 dummy 추가
    }
    sec++; // 매번 시간 증가
  }

  return sec; // 최종 시간 반환
}


// reference
function queuePrinter(bufferSize, capacities, documents) {
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    // queue에 bufferSize만큼 0을 삽입합니다. (queue에 들어갈 요소의 고정 갯수를 만들어 주는 과정입니다.)
    for(let i = 0; i < bufferSize; i++){
        queue.push(0);
    }
    
    // ~23번째 줄까지의 코드는 프린터를 처음 실행했을 때를 다룹니다.
    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
    let currentDocument = documents.shift();
    
    // queue의 제일 앞에 currnetDocument를 삽입하고, 제일 마지막 요소를 없앱니다.
    queue.unshift(currentDocument);
    queue.pop();
    
    // totalBufferVolume(총 용량)에 currnetDocument의 크기를 합칩니다.
    totalBufferVolume = totalBufferVolume + currentDocument;

    // 1 초가 지났다는 것을 count를 증가하며 나타냅니다.
    count++;
    
    // totalBufferVolume(총 용량)가 0이 될 때까지 반복합니다.
    while(totalBufferVolume){
        
        // totalBufferVolume(총 용량)에 queue에 있는 마지막 요소의 용량을 제거합니다.
        totalBufferVolume = totalBufferVolume - queue.pop();
        
        // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
        currentDocument = documents.shift();
        
        // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
        if(currentDocument + totalBufferVolume <= capacities){

            // queue에 currentDocument를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가합니다.
            queue.unshift(currentDocument);
            totalBufferVolume = totalBufferVolume + currentDocument;

            // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
        }else{

            // 다시 documents에 currentDocument를 집어넣고 queue에는 0을 삽입합니다.
            documents.unshift(currentDocument);
            queue.unshift(0);
        }

        // 한 번 반복할 때마다 count(초)를 올립니다.
        count++;
    }
    
    // count를 반환합니다.
    return count;
}