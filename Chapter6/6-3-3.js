
// 매개변수 기본값

// ES6에서는 매개변수 기본값(default value)을 지정하는 기능도 추가되었다.
// 일반적으로 매개변수에 값을 제공하지 않으면 undefined가 값으로 할당된다.
// ES6에서는 기본값을 지정할 수 있다.

function f(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}

f(5, 6, 7);     // "5 - 6 - 7"
f(5, 6);        // "5 - 6 - 3"
f(5);           // "5 - default - 3"
f();            // "undefined - default - 3"

