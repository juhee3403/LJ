// 변수(variable) == 이름이 붙은 값
// 언제나 바뀔수 있는 값 == 변수

let currentTempC = 22;
// let을 사용
// 변수를 생성하고 초기값 22를 할당

currentTempC = 22.5;
// 이번에는 let을 사용하지 않았다
// 변수의 할당값을 새롭게 지정

let currentTempC;
// 변수를 선언할때 꼭 변수의 초기값이 있어야 하는것은 아니다.
// 지정하지 않으면 암시적으로 undefined가 할당된다.

let currentTempC; // let currentTempC = undefined 와 같다.

let targetTempC, room1 = "conference_room_a", room2 = "robby";
// let문 하나에서 변수 여러개를 선언할 수 있다.
// targetTempC는 값을 할당하지 않았으므로, undefined
// room1은 "conference_room_a"
// room2는 "robby"

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
// 상수는 ES6 에서 새롭게 생겼다.
// const 를 사용하면 상수를 선언할 수 있다.
// 절대적인 규칙은 아니지만 상수이름에는 보통 대문자와 밑줄만 사용한다.
// 이러한 규칙을 따르면, 코드에서 상수를 찾기쉽고, 상수의 값을 바꾸려 하지도 않게 된다.

