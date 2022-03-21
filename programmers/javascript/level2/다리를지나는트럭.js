/*
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.
*/

function solution(bridge_length, weight, truck_weights) {
  let sec = 0; // 소요 시간(초)
  let tmpwei = 0; // 현재 다리 위에 있는 트럭들의 총 무게
  let bridge = new Array(bridge_length).fill(0); // 최대 길이 bridge_length dummy data

  // 첫 번째 트럭 진입하고 아래 반복문 시작
  let tmptruck = truck_weights.shift(); // 트럭 하나 대기
  bridge.shift(); // 다리에 서두 dummy 요소 하나 나감
  bridge.push(tmptruck); // 대기 트럭 진입
  tmpwei = tmpwei + tmptruck; // 다리 위 트럭 무게 정보 갱신
  sec = 1; // 시간 흐름 1초

  while (tmpwei) { // 트럭들이 다 지날 때까지. 현재 다리 위에 있는 트럭들의 총 무게가 0이 될 때까지
    tmptruck = truck_weights.shift(); // 다음 트럭
    tmpwei = tmpwei - bridge.shift(); // 다리 위에 가장 앞 트럭 나감

    if (tmpwei + tmptruck <= weight) { // 다음 트럭이 들어왔을 때 제한 무게 이하라면
      bridge.push(tmptruck); // 다리로 진입
      tmpwei = tmpwei + tmptruck; // 다리 위 트럭 무게 정보 갱신
      sec++; // 시간 흐름
    }
    else { // 다리로 진입할 수 없다면
      bridge.push(0); // 다음 루프 정상 작동을 위해 dummy data 채워주기. 다리 위 요소 한칸씩 이동
      truck_weights.unshift(tmptruck); // 다시 대기 트럭으로 들어감. 다음 루프 때 다시 시도
      sec++; // 시간 흐름
    }
  }
  return sec; // 트럭 다 지나간 후 흐른 시간 리턴
}