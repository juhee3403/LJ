let currentTempC = 22;
// 위의 22가 숫자형 리터럴이다.

let targetTempC, room1 = "conference_room_a", room2 = "robby";
// 마찬가지로, room1를 초기화 할때 문자열 리터럴인 "conference_room_a"를 사용했다.

// 리터럴 이란 단어는 값을 프로그램 안에서 직접 지정한다는 의미이다.
// 즉, 리터럴은 값을 만드는 방법이다.
// js는 당신이 제공한 리터럴 값을 받아 데이터를 만든다.

// 리터럴과 식별자의 차이
let room1 = "conference_room_a";
// room1은 변수를 가리키는 식별자.
// "conference_room_a"은 문자열 리터럴인 동시에 room1의 값.
// js는 따옴표를 통해 리터럴과 식별자를 구별한다.
let 1room = "conference_room_a"; // 에러가 일어난다.
// 식별자는 숫자로 시작할수 없으니, 숫자는 따옴표가 필요없다.

let room1 = "conference_room_a";    // "conference_room_a"(따옴표 안)은 리터럴이다.

let currentRoom = room1;    // currentRoom의 값은 
                            // room1의 값("conference_room_a")과 같다.

currentRoom = current_room_a;   // 에러가 발생한다.
                                // current_room_a란 식별자는 존재하지 않기 때문이다.