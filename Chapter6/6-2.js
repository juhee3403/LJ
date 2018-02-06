
// 호출과 참조

// js에서는 함수도 객체다.
// 따라서 다른 객체와 마찬가지로 넘기거나 할당할 수 있다.
// 함수 호출과 참조의 차이를 이해하는 것이 중요하다.
// 함수 식별자 뒤에 괄호를 쓰면 js는 함수를 호출하려 한다고 이해하고, 함수 바디를 실행한다.
// 그리고 함수를 호출한 표현식은 반환 값이 된다.
// 괄호를 쓰지 않으면 다른 값과 마찬가지로 함수를 참조하는 것이며, 그 함수는 실행되지 않는다.
// js 콘솔에서 다음을 직접 실행해 보자

function getGreeting() {
    return "Hello world!";
}
getGreeting();          // "Hello world!"
getGreeting;            // function getGreeting()

// 함수를 호출하지 않고 다른 값과 마찬가지로 참조하기만 할 수 있다는 특징은 
// js를 매우 유연한 언어로 만든다.
// 예를 들어 함수를 변수에 할당하면 
// 다름 이름으로 함수를 호출 할 수 있다.

const f = getGreeting;
f();                    // "Hello world!"

// 함수를 객체 프로퍼티에 할당할 수도 있다.

const o = {};
o.f = getGreeting;
o.f();                  // "Hello world!"

// 배열 요소로 할당할 수도 있다.

const arr = [1, 2, 3];
arr[1] = getGreeting;   // arr은 이제 [1, function getGreeting(), 3]
arr [1]();
// 마지막 예제를 보면 js에서 괄호가 하는 일을 명확히 알 수 있을 것이다.
// 값 뒤에 괄호를 붙이면 js는 그 값을 함수로 간주하고 호출한다.
// 이전 예제에서 arr[1]은 값이 되는 표현식이다.
// 값 뒤에 괄호를 썼으므로 js는 이 값이 함수로 간주하고 호출한다.

// 함수가 아닌 값 뒤에 괄호를 붙이며 에러가 일어난다.
// 예로 "abc"()는 TypeError: "abc" is not a function 에러를 일으킨다.