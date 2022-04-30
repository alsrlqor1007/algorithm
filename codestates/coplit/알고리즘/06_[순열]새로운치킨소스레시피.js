function newChickenRecipe(stuffArr, choiceNum) {
    // 0이 3개 이상인 항목은 제외
    let stuffAvail = stuffArr.filter(el => {
        let count = 0;
        for (let i = 0; i < String(el).split('').length; i++) {
            if (String(el).split('')[i] === '0') count++;
        };
        return count < 3;
    });

/*
정규표현식으로 0이 3개 이상인 요소 골라내기
    for (let i = 0; i < stuffArr.length; i++) {
        if (String(stuffArr[i]).match(/0{3,}/) !== null) stuffArr.splice(i, 1);
    }
*/

    // 순열 구하는 함수
    const permutation = (arr, n) => {
        let result = [];
        if (n === 1) return arr.map(el => [el]);

        arr.forEach((fixed, idx, origin) => {
            let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
            let recur = permutation(rest, n - 1);
            let comb = recur.map(el => [fixed, ...el]);
            result.push(...comb);
        })

        return result;
    }

    return permutation(stuffAvail, choiceNum);
}



// reference
function newChickenRecipe(stuffArr, choiceNum) {
    // stuffArr에서 0이 3개 이상이라면 전부 필터로 거르기.
    let freshArr = [];

    for (let i = 0; i < stuffArr.length; i++) {
        const element = String(stuffArr[i])
            .split('')
            .filter((e) => e === '0');
        if (element.length <= 2) {
            freshArr.push(stuffArr[i]);
        }
    }

    // 정렬
    freshArr.sort((a, b) => a - b);

    // 엣지 케이스 처리
    if (freshArr.length === 0 || freshArr.length < choiceNum) return [];

    // 레시피 초기화
    let result = [];

    // freshArr를 상대로 순열 구하기
    const permutation = (arr, bucket, n) => {
        if (n === 0) {
            result.push(bucket);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            // 하나를 초이스함
            const choice = arr[i];
            // 배열을 슬라이스함
            const sliceArr = arr.slice();
            // 초이스만 뺀다
            sliceArr.splice(i, 1);
            // 재귀
            permutation(sliceArr, bucket.concat(choice), n - 1);
        }
    };

    // 실행
    permutation(freshArr, [], choiceNum);
    
    // 순열의 길이 반환
    return result;
}