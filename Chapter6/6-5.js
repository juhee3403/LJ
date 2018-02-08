
// this 키워드

// 함수 바디 안에는 특별한 읽기 전용 값인 this가 있다.
// this는 일반적으로 객체지향 프로그래밍 개념에 밀접한 연관이 있다.
// 객체지향 프로그래밍에 대해서는 9장에서 더 설명한다.
// js에서는 객체지향 프로그래밍 말고도 this를 사용하는 여러 가지 방법이 있다.

// 일반적으로 this는 객체의 프로퍼티인 함수에서 의미가 있다.
// 메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 된다.

const o = {
    name: 'Wallace',
    speak() {return `My name is ${this.name}!`}
}

// o.speak()를 호출하면 this는 o에 묶인다.
o.speak();          // "My name is Wallace!"

// this는 함수를 어떻게 선언했느냐가 아니라 
// 어떻게 호출했느냐에 따라 달라진다는 것을 이해해야 한다.
// 즉, this가 o에 묶인 이유는 speak가 o의 프로퍼티여서가 아니라,
// o에서 speak를 호출했기 때문이다.
// 같은 함수를 변수에 할당하면 어떻게 되는지 보자.

const speak = o.speak;
speak === o.speak;  // true; 두 변수는 같은 함수를 가리킨다.
speak();            // "My name is undefined!"

// 함수를 이렇게 호출하면 자바스크립트는 이 함수가 어디에 속하는지 알 수 없으므로
// this는 undefined에 묶인다.

    // 앞의 예제에서 한 것처럼 함수의 this가 어디에 묶이는지 명확하게 알 수 없도록 호출했을때
    // this를 결정하는 방법은 매우 복잡하다.
    // 스트릭트 모드인지 아닌지에 따라 다르고,
    // 함수를 어디에서 호출했느냐에 따라서도 다르다.
    // 이런 상황은 피하는 것이 최선이므로 자세한 내용은 의도적으로 생략했다.
    // 더 알고 싶다면 코드 포매팅에 관한 MDN 문서를 봐라.
    
// 매서드라는 용어는 원래 객체지향 프로그래밍의 개념이지만,
// 이 책에서는 객체의 프로퍼티이며, 
// o.speak()처럼 객체 인스턴스에서 호출할 의도로 만든 함수라는 뜻으로 사용한다.
// 함수에서 this를 사용하지 않으면 어디에서 선언했든 관계없이 함수라고 부르겠다.

// 중첩된 함수 안에서 this를 사용하려다 보면 혼란스러울 때가 많다.
// 다음 예제를 보자. 이 예제 안에는 보조 함수가 있다.

const o = {
    name: 'Julie',
    greetBackwards: function () {
        function getReverseName() {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
o.greetBackwards();

// 이 방법은 널리 쓰이는 방법이며, this를 self나 that에 할당하는 코드를 많이 보게 될 것이다.
// 이 장 후반에 설명할 화살표 함수를 써도 이 문제를 해결할 수 있다.
