
// 원시 데이터 타입인 숫자, 문자열, 불리언에는
// 각각 대응하는 객체 타입 Number, String, Boolean이 있다.

// 이 객체들은 두가지 목적이 있는데,
// 하나는 Number.INFINITY 같은 특별한 값을 저장하는 것이고,
// 다른 하나는 함수 형태로 기능을 제공하는 것이다.

const s = "hello";
s.toUpperCase();        // "HELLO"
// 상수 s는 마치 객체처럼
// 함수 프로퍼티를 가진 것처럼 보인다.
// 하지만 우리는 s가 분명히 원시 문자열 타입임을 알고 있다.

// js는 '일시적인' String 객체를 만든 것이다.
// 이 임시 객체에 toUpperCase 함수가 들어있다.
// js는 함수를 호출하는 즉시 임시 객체를 파괴한다.
// 객체가 임시로 만들어진다는 사실은 다음과 같이 문자열에 프로퍼티를 할당해 보면 알 수 있다.

const p = "hello";
p.rating = 3;           // 에러가 없다. 성공인가?  // 이 구문 후에 바로 파괴!
p.rating;               // undefined
// 마치 문자열 p에 프로퍼티를 할당하는 것처럼 보인다.
// 사실은 일시적인 String 객체에 프로퍼티를 할당한 것이다.
// 임시 객체는 즉시 파괴되므로 s.rating은 undefined가 된다. 
