// 1. 같은 장르끼리 묶어야해요.
// 2. 묶인 노래들을 재생 순으로 정렬을 해야해요.
// 3. 노래를 2개까지 자르는 작업을 해야해요.
// 핵심 키워드는 "묶는 것", "정렬"
let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
function solution(genres, plays) {
    const genreMap = new Map();

    genres
        .map((genre,index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const data = genreMap.get(genre) || { total: 0, songs: [] };
            genreMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, { play, index }]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
        })
    return [...genreMap.entries()]
        .sort((a, b) => b[1].total - a[1].total)
        .flatMap(item => item[1].songs)
        .map(song => song.index)
}

console.log(solution(genres, plays));


const graph = Array.from(
    Array(5),
    () => []
);
graph[0].push(1); // 0 -> 1
graph[0].push(3); // 0 -> 3
graph[1].push(2); // 1 -> 2
graph[2].push(0); // 2 -> 0
graph[2].push(4); // 2 -> 4
graph[3].push(2); // 3 -> 2
graph[4].push(0); // 4 -> 0