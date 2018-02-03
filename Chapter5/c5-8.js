
// AND, OR, NOT

// js가 지원하는 논리 연산자는 
// AND(&&), OR(||), NOT(!) 세 가지다.

// 수학을 공부했다면,
// AND는 교집합(conjunction),
// OR은 합집합(disjunction),
// NOT은 부정(negation)
// 으로 이해할 수 있을것이다.

// AND 연산은 피연산자가 모두 true일때 true이고,
// OR 연산은 피연산자가 모두 false일때 false다.
// NOT은 단순히 피연산자를 반대로 바꾼다.

// 피연산자가 모두 true이면 결과도 true이기 때문에 
// OR연산자는 가끔 포괄적inclusive OR이라 불리기도 한다.
// 배타적exclusive OR, 또는 XOR이라 불리는 OR도 있는데,
// 이 연산자는 피연산자가 모두 true일때 false를 반환한다.
// js에는 XOR에 해당하는 논리 연산자가 없지만, 비트 XOR은 있다.
    // 변수 x와 y의 XOR 연산이 필요하다면 동등한 표현식 (x || y) && x !== y 를 사용하면 된다.


// 단축 평가

// 만약 몇가지 값을 평가한다고 가정할때,
// AND 연산에서 무엇 하나라도 false이면, 모두 false라서
// 첫번째 값이 false로 평가가 되면, 그 다음 평가들은 무시되고 false가 된다.
// 이러한 동작을 '단축 평가(short-circuit evaluation)'라고 한다.

// 단축 평가가 중요한 이유는
// 두번째의 피연산자가 부수 효과(side effect);{부작용??}가 있다 하더라도
// 단축 평가를 거치면 무시되기 때문이다.
// 부수 효과는 보통 부정적인 의미로 쓰이지만 항상 그런 건 아니다.
// 결과가 의도적이고 명확하다면 나쁘게 평가할 이유는 없다.
const skipIt = true;
let x = 0;
const result = skipIt || x++;
// 예제의 3 번째 행의 결과는 result에 저장된다.
// 첫 번째 피연산자가 true라서 단축 평가가 일어나 result는 true로 된다.
// 두 번째 피연산자인 x++의 증가 연산은 실행되지 않고 x값은 그대로 0이다.
// skipIt를 false로 바꾸면, 논리 연산자의 두번째 피연산자를 모두 평가하며, x는 증가하게 된다.
// 여기서는 증가 연산이 부수 효과이다.

// AND도 마찬가지로 같은 일이 일어날 수 있다.
const doIt = false;
let x = 0;
const result = doIt && x++;
// AND의 첫 번째 피연산자가 false이므로 두 번째 피연산자를 평가하지 않는다.
// 따라서 result는 false이고, x는 늘어나지 않는다.
// 여기서, doIt을 true로 바꾸면 두 번째 피연산자를 평가해야 하므로 증가 연산이 일어나고,
// result는 0이 된다.
// ???????? 왜????? result가 false가 아니고 0???
// 이 의문의 답은 다음 섹션의 내용이다.
