let funds = 50;      // 시작 조건

while (funds > 1 && funds < 100) {
    // 돈 걸기

    // 주사위 굴리기

    // 맞추면 돈 가져오기


}

function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)]
}

