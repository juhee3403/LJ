
// null과 undefined

// null과 undefined는 js의 특별한 타입.
// null이 가질 수 있는 값은 null 하나뿐이며, 
// undefined가 가질 수 있는 값도 undefined 하나뿐이다.

// null과 undefined는 모두 '존재하지 않는 것'을 나타낸다.
// 이 둘을 서로 다른 데이터 타입으로 분리한 것은 끝없는 혼란을 낳았고,
// 특히 초보자들이 고생하고 있다.

// 일반적인 규칙으로는,
// null은 프로그래머에게 허용된 데이터 타입이고,
// undefined는 js자체에서 사용한다고 생각하자.
// 이 규칙이 강제는 아니라,
// 프로그래머도 undefined를 사용할 수 있지만, 꼭 필요할 때만 사용하도록 주의하자.

// 어떨수 없이 변수에 undefined를 할당하는 경우는
// 아직 값이 주어지지 않은 변수의 동작을
// 고의로 흉내 내야 할 때뿐이다.

// 변수의 값을 아직 모르거나 적용할 수 없는 경우에는
// 대부분 null이 더 나은 선택이다.

// 변수를 선언하기만 하고 명시적으로 값을 할당하지 않으면,
// 그 변수에는 기본적으로 undefined가 할당된다.

let currentTemp;            // 암시적으로 undefined가 할당
const targetTemp = null;    // 대상 온도는 null, 즉 '아직 모르는' 값이다
currentTemp = 19.5;         // 이제 값이 있다
currentTemp = undefined;    // currentTemp는 초기화되지 않은 듯하다. 권장하지 않는다.