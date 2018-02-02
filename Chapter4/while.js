// m 이상 n 이하의 무작위 정수를 반환한다.
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// 크라운 앤 앵커 게임의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 반환
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)]
}


let funds = 50; // 시작 조건
let round = 0;

while (funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);

    // 돈을 건다
    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        diamond: 0
    };
    let totalBet = rand(1, funds);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // 판돈 분배
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining = bet;
        } while (remaining > 0)
        // do...while 루프는 루프 바디를 최소한 한 번은 실행하려 할 때 사용.
        // while 루프의 조건이 마지막으로 실행되므로, 위의 do 문은 시행되지만, 
        // while 조건이 거짓 같은 값이면 루프 바디는 한 번도 실행 되지 않는다.
    }

    funds = funds - totalBet;
    console.log('\tbets: ' +
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(',') +
        `(total: ${totalBet} pence)`);

    // 주사위 굴리기
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(',')}`);

    // 딴 돈 가져오기
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);