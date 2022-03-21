/*
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

genres[i]는 고유번호가 i인 노래의 장르입니다.
plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
장르 종류는 100개 미만입니다.
장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
모든 장르는 재생된 횟수가 다릅니다.
*/

function solution(genres, plays) {
    let obj = {};
    for (let i = 0; i < genres.length; i++) { // 장르별 plays 합산해서 반환
        if (obj[genres[i]] === undefined) obj[genres[i]] = plays[i];
        else obj[genres[i]] += plays[i];
    }
    obj = Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a)); // 특정 키 기준 정렬
    let genresOrder = Object.keys(obj); // plays 가장 많은 순 genre 반환
    
    let album = []; // genre에 따른 분류로 새롭게 객체로 정리
    for (let i = 0; i < genres.length; i++) {
        let song = {};
        song['idx'] = i;
        song['genre'] = genres[i];
        song['play'] = plays[i];
        album.push(song);
    }
    
    let rearrAlbum = []; // plays 많은 순으로 Album 객체 정리
    for (let i = 0; i < genresOrder.length; i++) {
        rearrAlbum[genresOrder[i]] = [];
        for (let j = 0; j < album.length; j++) {
        if (genresOrder[i] === album[j]['genre']) {
            let eachSong = {};
            eachSong['idx'] = album[j]['idx'];
            eachSong['play'] = album[j]['play'];
            rearrAlbum[genresOrder[i]].push(eachSong);
            rearrAlbum[genresOrder[i]] = rearrAlbum[genresOrder[i]].sort((a, b) => b.play - a.play);
        }
        }
    }
    
    let answer = [];
    for (let i in rearrAlbum) { // 장르별 2개까지만 idx 번호 순서대로 반환
        if (rearrAlbum[i].length < 2) answer.push(rearrAlbum[i][0]['idx']);
        else {
        for (let j = 0; j < 2; j++) answer.push(rearrAlbum[i][j]['idx']);
        }
    }
    return answer;
}

// Object.FromEntries()

// 5~14번 테스트케이스 통과 안되는 경우 고려해줘야 할 케이스
solution(["classic", "pop", "classic", "classic", "classic", "classic"], [500, 1000, 400, 300, 200, 100])


// 다른 사람 풀이
function solution(genres, plays) {
    var dic = {};
    genres.forEach((t,i)=> {
        dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];        
    });

    var dupDic = {};
    return genres          
          .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
          .sort((a,b)=>{               
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               if(a.count !== b.count) return b.count - a.count;
               return a.index - b.index;
           })
           .filter(t=>  {
               if(dupDic[t.genre] >= 2) return false;
               dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
               return true;
            })
           .map(t=> t.index);    
}

function solution(genres, plays) {
    const count = {};
    let answer = [];
    const acc = genres.reduce((a, c, i) => {
        debugger;
        count[c] ? count[c].push([i, plays[i]]) : count[c] = [[i, plays[i]]];
        return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
    }, new Map());

    [...acc].sort((a, b) => b[1] - a[1]).map(v => {
            answer = answer.concat(count[v[0]].sort((c, d)=>d[1]-c[1]).slice(0,2));
    });
    return answer.map(v=>v[0]);
}