function rockPaperScissors (rounds) {
    let choices = ['rock', 'paper', 'scissors'];

    // 재귀로 중복순열 구하기
    const permutation = (arr, n) => {
        let result = [];
        if (n === 1) return arr.map(el => [el]);

        arr.forEach((fixed, idx, origin) => {
            let rest  = origin;
            let recur = permutation(rest, n - 1);
            let comb = recur.map(el => [fixed, ...el]);
            result.push(...comb);
        })

        return result;
    }

    return permutation(choices, rounds || 3);
};
