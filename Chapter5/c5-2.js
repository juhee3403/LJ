
// 연산자

// 연산자를 표현식의 '명사(noun)'에 대한 '동사(verb)'라고 생각해도 좋다.
// 표현식이 값이 되는 것이라면 
// 연산자는 값을 만드는 행동 이라는 뜻이다.
// 연산자에 대한 설명은 산술 연산자로 시작한다.
// 산술 연산자에 대한 경험이 없는 사람은 거의 없으니
// 직관적으로 이해하기 쉬울것이다.
    // 연산자는 하나의 이상의 피연산자가 있어야 결과를 낼 수 있다.
    // 예를 들어 1+2 라는 표현식에서 1과 2는 피연산자이고 +는 연산자다.
    // 엄격히 말하면 피연산자가 맞는 말이지만 피연산자를 매개변수(argument)라 부르는 경우도 많이 있다.

// 산술 연산자
    +  덧셈(문자열 병합에도)        
    -  뺄셈                      
    /  나눗셈
    *  곱셈
    %  나머지 3%2      // 1
    -  단항 부정   -x   // x의 부호를 바꿈
    +  단항 플러스  +x   // x가 숫자가 아니면 숫자로 변환을 시도
    ++ 전위 증가   ++x  // x에 1을 더한 다음 평가
    ++ 후위 증가   x++  // x를 평가한 다음 1 더함
    -- 전위 감소   --x
    -- 후위 감소   x++                   

// js의 숫자는 모두 더블 형식이므로
// 3/2처럼 정수를 연산한 결과도 더블 형식

// 뺄셈과 단항 부정은 모두 - 기호를 사용
// 그럼, js는 둘을 어떻게 구분할까?
// 답은 매우 복잡하기 때문에 다룰 만한 내용이 아니다.
// 알아야 할 것은 단항 부정이 먼저 이루어지고 그 다음에 뺄셈을 한다는 것이다.
const x = 5;
const y = 3 - -x    // y는 8.

// 같은 규칙이 단항 플러스에도 적용된다.
// 단항 플러스 연산자는 자주 사용하는 연산자는 아니다.
// 보통 이 연산자를 사용한다면 문자열을 숫자로 강제 변환하는 경우이며,
// 드물게는 세로로 줄을 맞추고 싶을 때 사용한다.
const s = "5";
const y = 3 + +s;   // y는 8. 단항 플러스를 사용하지 않았다면
                    // 문자열 병합이 일어나서 결과는 문자열 "35"가 된다.

// 여기서는 굳이 단항 플러스가 필요하지 않지만 줄을 잘 맞출 수 있다.
const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1;
const p2 = +x2*2;   // 단항 플러스를 쓰든 안쓰든 숫자
const p3 = +x3*3;   // 단항 플러스를 쓰든 안쓰든 숫자
const p4 = -x4*4;
// 이 예제에서 단항 부정과 단항 플러스를 변수에만 사용한 이유는,
// 숫자형 리터럴 앞에 있는 -기호는 실제 숫자형 리터럴의 일부로 해석되므로
// 연산자가 아니기 때문이다.

// 나머지(remainder) 연산자는 나눗셈을 한 나머지를 반환한다.
// 표현식 x % y의 결과는 피제수devidend(x)를 제수divisor(y)로 나눈 나머지.
// 예를 들어 10 % 3은 1이다.
// 음수에 적용하면 결과는 제수가 아니라 피제수의 부호를 따라가므로 이 연산자를 진정한 나머지 연산자라 할 수는 없다.
// 나머지 연산자는 보통 정수 피연산자에만 사용하지만,
// js에에서는 피연산자에 소수점이 있어도 잘 동작한다.
// 예를 들어 10 % 3.6은 2.8이다.
// 참고 https://ko.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic

// 증가 연산자 ++는 할당 연산자와 덧셈 연산자를 하나로 합친 거나 다름없다.
// 마찬가지로 감소 연산자는 할당 연산자와 뺄셈 연산자를 하나로 합친거나 다름없다.
// 이들은 간결하고 쓰기 쉽지만 주의해야 한다.
// 이 연산자가 표현식 깊숙히 뭍혀 있다면,
// 연산자의 부작용을 파악하기 어렵게 될 수 있다.

// 전위(prefix)와 후위(postfix)의 차이도 이해해야 한다.
// 전위 연산자는 먼저 변수의 값을 바꾼 다음에 평가한다.
// 후위 연산자는 값을 바꾸기 전에 평가한다.
// 다음 코드을 읽어보고 맞혀 보자
// 힌트로, 증가와 감소 연산자는 덧셈보다 먼저 실행되며, 이 예제의 표현식은 모두 왼쪽에서 오른쪽으로 진행한다.
let x = 2;
const r1 = x++ + x++;   
const r2 = ++x + ++x;   
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;
// 콘솔에 돌려 값을 확인해보자.
// 어렵게 느껴진다면 종이에 적고, 괄호를 써서 계산 순서를 표시에 보자.
