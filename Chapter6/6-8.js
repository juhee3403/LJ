
// call과 apply, bind

// this를 사용하는 일반적인 방법은 알아 보았다.
// 다른 객체지향 언어에서도 this를 이런식으로 사용한다.
// js에서는 일반적인 방법 외에도,
// 함수를 어디서, 어떻게 호출 했느냐와 관계없이 this가 무엇인지 지정할 수 있다.
// 먼저 call 메서드부터 시작한다.
// call 메서드는 모든 함수에서 사용할 수 있으며,
// this를 특정 값으로 지정할 수 있다.

const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

// 이 함수를 어떤 객체에도 연결되지 않았지만 this를 사용한다.
function greet() {
    return `Hello, I'm ${this.name}!`;
}

greet();                // "Hello, I'm undefined!" - this는 어디에도 묶이지 않았다.
greet.call(bruce);      // "Hello, I'm Bruce!" - this는 bruce.
greet.call(madeline);   // "Hello, I'm Madeline!" - this는 madeline.

// 함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 
// 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다.
// call의 첫 번째 매개변수는 this로 사용할 값이고,
// 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달된다.

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
    // bruce는 이제 { name: "Bruce", birthYear: 1949, occupation: "singer" }
update.call(madeline, 1942, 'actress');
    // madeline은 이제 { name: "Madeline", birthYear: 1942, occupation: "actress" }


// apply는 함수 매개별수를 처리하는 방법을 제외하면 call과 완전히 같다.
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만,
// apply는 매개변수를 배열로 받는다.

update.apply(bruce, [1949, 'singer']);
    // bruce는 이제 { name: "Bruce", birthYear: 1949, occupation: "singer" }
update.apply(madeline, [1942, 'actress']);
    // madeline은 이제 { name: "Madeline", birthYear: 1942, occupation: "actress" }

// apply는 배열 요소를 함수 매개변수로 사용해야 할 때 유용하다.
// apply를 설명할 때 흔히 사용하는 예제는 배열의 최솟값과 최댓값을 구하는 것이다.
// js의 내장 함수인 Math.min과 Math.max는 매개변수를 받아 그중 최솟값과 최댓값을 각각 반환한다.
// apply를 사용하면 기존 배열을 이들 함수에 바로 넘길 수 있다.

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr);      // -5
Math.max.apply(null, arr);      // 15

// this의 값에 null을 쓴 이유는 Math.min과 Math.max가
// this와 관계없이 동작하기 때문이다.
// 즉, 무엇을 넘기든 상관없다.

// ES6의 확산 연산자(...)를 사용해도 apply와 같은 결과를 얻을 수 있다.
// update메서드는 this값이 중요하므로 call을 사용해야 하지만,
// Math.min과 Math.max는 this값이 무엇이든 관계없으므로 확산 연산자를 그대로 사용할 수 있다.

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);    // apply(bruce, newBruce)와 같다.
Math.min(...arr);                   // -5
Math.max(...arr);                   // 15

// this의 값을 바꿀 수 있는 마지막 함수는 bind.
// bind를 사용하면 함수의 this 값을 영구히 바꿀 수 있다.
// update 메서드를 이리저리 옮기면서 호출할 떄 this값은 항상 bruce가 되게끔,
// call이나 apply, 다른 bind와 함께 호출하더라도 
// this값이 bruce가 되도록 하려면 bind를 사용한다.

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
    // bruce는 이제 { name: "Bruce", birthYear: 1904, occupation: "actor" }
updateBruce(madeline, 1274, "king");
    // bruce는 이제 { name: "Bruce", birthYear: 1274, occupation: "king" }
    // madeline은 영향을 주지 못했다.

// bind는 함수의 동작을 영구적으로 바꾸므로 찾기 어려운 버그의 원인이 될 수 있다.
// bind를 사용한 함수는 call이나, apply, 다른 bind와 함께 사용할 수 없는 거나 마찬가지다.
// 함수를 여기저기서 call이나 apply로 호출해야 하는데,
// this 값이 그에 맞춰 바뀌어야 하는 경우를 상상해 보자.
// 이럴 때는 bind를 사용하면 문제가 생긴다.
// bind를 쓰지 말라고 권하는 것이 아니다.
// bind는 매우 유용하지만, 함수의 this가 어디에 묶이는지 정확히 파악하고 사용해야 한다.

// bind에 매개변수를 넘기면 
// 항상 그 매개변수를 받으면서 호출되는 새 함수를 만드는 효과가 있다.
// 예를 들어 bruce가 태어난 해를 항상 1949로 고정하지만,
// 직업은 자유롭게 바꿀 수 있는 업데이트 함수를 만들고 싶다면 다음과 같이 하면 된다.

const updateBruce1949 = update.bind(bruce, 1949);   // update(1949, ??)으로 고정하는것과 같다.
updateBruce1949("singer, songwriter");
    // bruce는 이제 { name: "Bruce", birthYear: 1949, occupation: "singer, songwriter" }


