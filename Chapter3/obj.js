
// 객체

// 원시 타입은 단 하나의 값만 나타낼 수 있고 불변이지만,
// 객체는 여러가지 값이나 복잡한 값을 나타낼 수 있으며, 변할 수도 있다.

// 객체의 본질은 '컨테이너'이다.
    // 컨테이너란 '담는 장소'
// 컨테이너의 내용물은 시간이 지나면서 바뀔 수 있지만,
// 내용물이 바뀐다고, 컨테이너가 바뀌진 않는다.
// 즉, 여전히 같은 객체다

// 객체에서도 중괄호{}를 사용하는 리터럴 문법이 있다.
// 중괄호는 한쌍이므로 객체가 어디에서 시작하고 어디에서 끝나는지 나타낼 수 있다.

const obj = {};
// 객체 이름은 아무거나 써도 되지만, 
// 일반적으로 user나 shoppingCart처럼
// 의미를 알 수 있는 이름을 써야 한다.

// 객체의 콘텐츠는 프로퍼티(property)또는 멤버(member)라고 불린다.
// 프로퍼티는 이름(키)과 값으로 구성된다.
// 프로퍼티 이름은 반드시 문자열 또는 심볼이어야 하며,
// 값은 어떤 타입이든 상관없고, 다른 객체여도 상관없다.

obj.color = "yellow";

// 프로퍼티 이름에 유효한 식별자를 써야 
// "." 멤버 접근 연산자(member access operator)를 사용할 수 있다.
// 프로퍼티 이름에 유요한 식별자가 아닌 이름을 쓴다면
// "[]" 계산된 멤버 접근 연산자(computed member access operator)를 써야 한다.
// 만약 프로퍼티 이름이 유효한 식별자여도 대괄호로 접근할 수 있다.

obj["not an identifier"] = 3;
obj["not an identifier"];       // 3
obj["color"];                   // "yellow"

// 심볼 프로퍼티에 접근할 때도 대괄호를 사용한다.
const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];                      // 8

// 이제 obj에는 "color"(유효한 식별자 문자열),
// "not an identifier"(유효한 식별자 문자열x),
// SIZE(심볼) 세 가지 프로퍼티가 있다.

// 원시 값과 객체의 차이
let good = true;
let obj = {};
// 원시값을 변경할 때마다 다른값을 가지게 된다.
good = false;
good = 4;
// 객체를 수정할 때는 계속 같은 객체를 가리키고, 객체의 프로퍼티만 변경된다.
obj.color = "red";
obj.color = "blue";

// obj는 빈 객체로 만들었지만, 
// 객체 리터럴 문법에서는 객체를 만드는 동시에 프로퍼티를 만들 수 있다.
// 중괄호 안에서 각 프로퍼티를 쉼표로 구분하고, 
// 프로퍼티 이름과 값은 콜론으로 구분한다.
const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age: 4};    // 한 줄로 선언

const sam3 = {
    name: 'Sam',
    classification: {                   // 프로퍼티 값도 객체가 될 수 있다.
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia'
    }
};
// sam1과 sam2의 프로퍼티는 같지만, 둘은 서로 다른 객체다.
    // 원시 데이터는 할당된 값이 같으면, 같은 원시 값이다.
    let good = false;
    let bad = false;                    // 변수 good과 bad의 같은 원시 값을 가지고 있다.

// sam3의 classification 프로퍼티는 그 자체가 객체
// sam3의 kingdom에 접근하는 방법은 여러가지다.
sam3.classification.kingdom;            // "Anamalia"
sam3["classification"].kingdom;         // "Anamalia"
sam3.classification["kingdom"];         // "Anamalia"
sam3["classification"]["family"];       // "Anamalia"
// 큰따옴표 말고 작은따옴표나 백틱을 써도 된다.

// 객체에 함수를 담을 수도 있다.
sam3.speak = function () {
    return "Meow!";
};

// 함수뒤에 괄호()를 붙여 함수를 호출할 수 있다.
sam3.speak();                           // "Meow!"

// 객체에서 프로퍼티를 제거할 때는 delete 연산자를 사용한다.
delete sam3.classification;             // 실행되고 true를 리턴
delete sam3.speak;                      // 실행되고 true를 리턴
