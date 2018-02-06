
// 연산자 그룹

// 이미 언급했듯 그룹 연산자(괄호)에는 아무 효과도 없지만
// 연산자 우선순위를 높이거나 명확히 표현하는 데 쓸 수 있다.
// 따라서 그룹 연산자는 연산 순서만 바꿀 뿐, 
// 다른 부작용은 전혀 없는 안전한 연산자입니다.


// 비트 연산자
// 비트 연산자는 숫자의 비트를 직접 조작합니다.
// C 같은 주수준 언어를 다뤄 본 경험이 없거나,
// 컴퓨터가 내부적으로 숫자를 어떻게 저장하는지 배운 적이 없다면
// 비트 연산자를 이해하기가 힘들 것이다.

// 그래서 훑어 보고 넘어간다~

// typeof 연산자

// typeof 연산자는 피연산자의 타입을 나타내는 문자열을 반환한다.
// 불행하기도, 이 연산자는 js의 일곱 가지 데이터 타입(undefined, null, 불리언, 숫자 문자열, 심볼, 객체)을
// 정확히 나타내지 못하며 끝없는 혼란을 초래했고 계속 비판을 받았다.

// typeof 연산자는 typeof null을 "object"라고 판단하는데,
// 이런 행동은 버그라고 해도 할 말이 없다.
// null은 당연히 객체가 아니라 원시 값이다.
// typeof null이 "object"를 반환하는 이유가 있긴 하지만,
// 너무 오래되었고 여기서 설명할 만큼 흥미로운 이유도 아니다.
// 이 현상을 수정해야 한다는 주장은 아주 많았지만, 
// 이미 typeof null이 "object"를 반환한다는 사실을 
// 이용하는 코드가 너무 많이 생겨서 이제는 돌이킬 수 없게 됐고,
// 명세에 수록됐으므로 바꿀 수 도 없다.

// typeof는 배열과 배열 아닌 객체도 정확히 구분하지 못한다.
// 함수(객체의 특별한 타입)은 정확히 식별하지만,
// typeof []는 "object"를 반환한다.

// typeof는 연산자이므로 괄호는 필요없다.
// 즉, 변수 x의 타입을 알아볼 떄는 typeof(x)가 아니라
// typeof x를 사용한다.
// typeof(x)도 문법적으로 유효하지만, 괄호 때문에 불필요한 표현식이 끼어들 뿐이다.


// void 연산자

// void 연산자가 하는 일은 하나뿐이다.
// 이 연산자는 피연산자를 평가한 후 undefined를 반환한다.
// 쓸모없는 것 같다고?  YES! 쓸모 없다.
// 표현식을 평가해야 하긴 하지만 반환값이 undefined여야 하는 상황이 있다면
// void 연산자를 쓸 수도 있겠지만,
// 필자는 실무에서 그런 경험을 한 적이 한 번도 없다.
// 필자가 void 연산자를 책에 포함한 이유는 가끔 HTML에서 <a> 태그의 URL에 사용하기 때문이다.
// 밑과 같이 하면 브라우저에서 다른 페이지로 이동하는 일을 막을 수 있다.
<a href="javascript:void 0">Do nothing.</a>
// 권장하는 방법은 아니지만 가끔 보이기는 할 것이다.


// 할당 연산자

// 할당 연산자는 변수에 값을 할당한다.
// 등호의 왼쪽에 있는 것은(l-value라 부르기도 한다)
// 반드시 변수나 프로퍼티, 배열 요소 중 하나여야 한다.
// (상수에 값을 할당하는 것은 엄밀히 말해 선언의 일부이며 할당 연산자가 아니다)
// 즉, 표현식의 좌변에 있는 것은 반드시 값을 저장할 수 있는 것이여야 한다.

// 이 장 초반에서 할당 자체도 표현식이며 값을 반환하므로
// 다시 할당할 수 있다고 설명했다.
// 이런 성질을 이용해 할당을 체인으로 연결할 수 있다.
let v, v0;
v = v0 = 9.8;   // 먼저 v0가 9.8이 되고, 그다음 v가 9.8이 된다.

// while 문의 조건에 있는 할당을 보자.
// 먼저 n이 num[i]의 값을 받고,
// 다음에는 표현식 전체가 그 값으로 평가되므로 숫자로 비교할 수 있다.
const nums = [3, 5, 15, 7, 5];
let n, i = 0;
while ((n = nums[i]) < 10 && i++ < nums.length) {
    console.log(`Number less than 10: ${n}.`);
}
console.log(`Number greater than 10 found: ${n}.`);
console.log(`${nums.length - i - 1} numbers remain.`);
// 위 예제 에서는 할당 연산자의 우선순위가 비교 연산자보다 낮으므로 괄호를 사용했다.
// 일반적인 할당 연산자 외에 연산과 할당을 한꺼번에 수행하는 간편한 할당 연산자도 있다.
// 이들 간편 연산자도 일반적인 할당 연산자와 마찬가지로 전체 표현식의 값은 
// 마지막에 이루어진 할당의 값으로 평가된다.

// 간편 할당 연산자 모음
    // x += y   => x = x + y (와 같음)
    // x -= y
    // x *= y
    // x /= y
    // x %= y
    // x <<= y
    // x >>= y
    // x >>>= y
    // x &= y
    // x |= y
    // x ^= y