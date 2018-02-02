
// for...in 루프

// for...in 루프는 객체의 프로퍼티에 루프를 실행하도록 설계된 루프.
for (variable in object)
    statement

const player = { name: 'Thomas', rank: 'Midshipman', age: 25};
for (let prop in player) {
    if (player.hasOwnProperty(prop)) continue;
        console.log(prop + ': ' + player[prop]);
}
// 나중에 배우니 혼란스러워 마라.
// 여기서 player.hasOwnProperty를 호출할 필요는 없지만, 
// 이 메서드를 생략하면 에러가 생길때가 많다.



// for...of 루프

// for...of 문은 ES6에서 새로 생긴 반복문이며, 컬렉션의 요소에 루프를 실행하는 다른 방법이다.
for (variable of object) 
    statement

// for...of 루프는 배열은 물론 이터러블(iterable)객체에 모두 사용할 수 있는 범용적인 루프다.
// 다음 예제에서는 배열에 루프를 실행했다.
const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
    console.log(`You rolled...${face}`);

    // for...of는 배열에 루프를 실행해야 하지만
// 각 요소의 인덱스를 알 필요는 없을 때 알앚다.
// 인덱스를 알아야 한다면 일반적인 for 루프를 사용하자.

const hand = [randFace(), randFace(), randFace()];
for (let i = 0; i < hand.length; i++) {
    console.log(`Roll ${i+1}: ${hand[i]}`); 
}

