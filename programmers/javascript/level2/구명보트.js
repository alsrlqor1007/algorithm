/*
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면
2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
*/

// Timeout
function solution(people, limit) {
  people.sort((a, b) => b - a); // 내림차순 정렬
  let largest = people.shift();
  let boat = [largest]; // 처음에 가장 무거운 사람 보트에 넣어주고 시작
  let weight = largest;
  let count = 1; 
  
  while (people.length) { // people 배열의 길이가 존재할 때 (0이상)
    let que = people[0];
    let lastque = people[people.length-1]; // 그때마다 가장 가벼운 사람

    if (limit >= weight + lastque && boat.length === 1) { // limit도 넘지 않고, 보트 자리가 있다면
      boat.push(lastque); // 보트 채워주고
      weight += lastque; // 무게도 갱신
      people.pop(); // people에서 제거
    }
    else if (limit < weight + lastque || boat.length === 2) { // limit을 넘거나, 이미 보트가 2개로 찼다면
      boat = [que]; // 남아 있던 people 중 가장 큰 무게를 새롭게 보트에 넣어준다. 리셋 개념
      weight = que; // 무게 리셋
      count += 1; // 보트 하나 추가
      people.shift(); // people에서 boat로 추가해준것 제거
    }
  }
  
  return count;
}

// Timeout 해결 풀이
function solution(people, limit) {
  let twoPeople = 0; // 한번에 2명이 타는 보트 갯수
  let sortedPeople = people.sort((a, b) => a - b); // 오름차순 정렬
  let leftIdx = 0; // 가장 가벼운 사람 idx
  let rightIdx = sortedPeople.length - 1; // 가장 무거운 사람 idx
  
  while (leftIdx < rightIdx) {
      if (sortedPeople[leftIdx] + sortedPeople[rightIdx] <= limit) { // limit 제한 아래
        leftIdx++;
        rightIdx--;
        twoPeople++;
      } else { // 아니라면 무거운 사람 한명만 이동
        rightIdx--;
      }
  }

  return people.length - twoPeople; // 전체 보트에서 2명 탄 보트 수 차감
}


// 다른 사람 풀이
function solution(people, limit) {
    people.sort((a, b) => a - b);
    for (var i = 0, j = people.length - 1; i < j; j--) { // i를 var로 선언할 것
        if (people[i] + people[j] <= limit) i++;
    }    
    return people.length - i;
}
// for문에서 한번에 i, j 할당 가능