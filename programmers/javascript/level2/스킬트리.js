/*
선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.
예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.
위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.
선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
스킬 순서와 스킬트리는 문자열로 표기합니다.
예를 들어, C → B → D 라면 "CBD"로 표기합니다
선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
skill_trees는 길이 1 이상 20 이하인 배열입니다.
skill_trees의 원소는 스킬을 나타내는 문자열입니다.
skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
*/

function solution(skill, skill_trees) {
    if (skill.length === 1) return skill_trees.length;
    
    let count = 0;
    
    for (let i = 0; i < skill_trees.length; i++) {
        let tree = skill_trees[i]; // 각 스킬셋
    
        let order = [];
        // 각 스킬셋마다 skill에 해당하는 알파벳의 인덱스 번호 추출
        for (let j = 0; j < skill.length; j++) {
            order.push(tree.indexOf(skill[j]));
        }
    
        if (order.every(el => el === -1)) count++; // 모두 다 skill에 해당하지 않으면 가능한 케이스 +1
        else if (order[0] === -1) continue; // 가장 첫 번째 skill은 반드시 있어야 다음 skill도 가능
        else if (order[order.length - 1] !== -1 && order.slice(0, -1).includes(-1)) {
            // 가장 마지막 skill은 있는데 그전에 하나라도 선행 스킬이 없는 경우 pass
            continue;
        }
        else {
            for (let z = 0; z < order.length; z++) {
                if (order[z + 1] !== -1 && order[z] > order[z + 1]) break; // 선행 스킬보다 먼저 배울 경우 pass
                if (order[z] !== -1 && order.slice(0, z).includes(-1)) break; // 선행 스킬이 없을 경우 pass
                if (z === order.length - 2) {
                    if (order[z] < order[z + 1] || order[z + 1] === -1) count++; // 스킬트리의 마지막까지 모두 가능한 경우 & 마지막 스킬만 배우지 않을 경우(숫자 -1에 대한 처리)
                }
            }
        }
    }
    return count;
}


// 다른 사람 풀이 1
function solution(skill, skill_trees) {
    var answer = 0;
    for (const tree of skill_trees) {
        let check = Array.from(tree).filter(x => skill.includes(x)).map(x => skill.indexOf(x));
        if (checkOrder(check)) answer += 1;
    }
    return answer;
}

function checkOrder(checkArr) {
    for (let i = 0; i < checkArr.length; i++) if (checkArr[i] !== i) return false;
    return true;
}


// 다른 사람 풀이 2
function solution(skill, skill_trees) {
    function isCorrect(n) {
        // const test = '[' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(v => !skill.includes(v)).join('') + ']*';
        let test = skill.split('');
        for (var i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        }
        return true;
    }    

    return skill_trees.filter(isCorrect).length;
}


// 다른 사람 풀이 3
function solution(skill, skill_trees) {
    const skills = skill.split('');
    return skill_trees.filter(tree => skill.indexOf(tree.split('').filter(s => skills.includes(s)).join('')) === 0).length;
}