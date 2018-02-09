
// 화살표 표기법

// ES6에서 새로 만든 화살표 표기법(arrow notaion)도 환영 받는 문법이다.
// 화살표 표기법은 간단히 말해 
// function이라는 단어와 중괄호 숫자를 줄이려고 고안된 단축 문법이다.
// 중요한 차이가 하나 있는데, 곧 설명 하겠다.

// 화살표 함수에는 세 가지 단축 문법이 있다.
    // function을 생략해도 된다.
    // 함수에 매개변수가 다 하나뿐이라면 괄호()도 생략할 수 있다.
    // 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있다.

// 화살표 함수는 언제나 익명이다.
// 화살표 함수도 변수에 할당할 수 있지만,
// function 키워드처럼 이름 붙은 함수를 만들 수는 없다.

// 다음 예제를 보자
// 이들 표현식은 모두 동등한 한 쌍이다.

const f1 = function () { return "hello!"; }
// 또는
const f1 = () => "hello!";

const f2 = function (name) { return `hello, ${name}`; }
// 또는
const f2 = name => `hello, ${name};`;

const f3 = function (a, b) { return a + b; }
// 또는
const f3 = (a, b) => a + b;

// 이들 예제는 다분히 인위적이다. 
// 이름 붙은 함수가 필요하다면 그냥 일반적인 함수 선언을 사용하면 된다.
// 화살표 함수는 익명 함수를 만들어 다른 곳에 전달하려 할 때 가장 유용하며,
// 이에 대해서 8장에서 살펴보겠다.

// 화살표 함수에는 일반적인 함수와 중요한 차이가 있다.
// this가 다른 변수와 마찬가지로, 정적(lexically)으로 묶인다는 것이다.
// 이 장에서 만들었던 greetBackwards 예제를 고쳐 써 보자.
// 화살표 함수를 사용하면 내부 함수 안에서 this를 사용할 수 있다.
const o = {
    name: "Julie",
    greetBackwards: function () {
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

o.greetBackwards();

// 화살표 함수에는 일반적인 함수와 다른 점이 두 가지 더 있다.
// 화살표 함수는 (9장에서 설명할) 객체 생성자로 사용할 수 없고,
// arguments 변수도 사용할 수 없다.
// 하지만 ES6에서 확산 연산자가 생겼으니 arguments 변수는 대체할 수 있다.
