// 제어문은 '조건문'과 '반복문' 두가지 범주로 나뉜다

// 제어문의 일반적인 실행 방식을 바꾸는 네가지 문이 있다.(일종의 조커라고 생각하자)
// break        루프 중간에 빠져나간다.
// continue     루프에서 다음 단계로 바로 건너뛴다.
// return       제어문을 무시하고 현재 함수를 즉시 빠져나간다.
// throw        예외 핸들러에서 반드시 처리해야 할 예외를 일으킨다. 예외 핸들러는 현재 제어문 바깥에 있어도 상관없다.

if (a) {

} else if (b) {

} else {

}

// 위와 아래는 같은 조건문이다.
// else 뒤에 if를 붙이는 것으로 다시 조건을 부여할수 있다.

if (a) {

} else {
    if (b) {

    } else {

    }
}

// 메타 문법(metasyntax)
// 메타 문법은 다른 문법을 설명하는 문법이다.

// 메타 문법을 써 js 제어문의 문법을 간결하게 표기한다.
// 필자가 사용할 메타 문법은 단순하고 비공식적이다.
// 사실 중요한 건 이 문법이 모질라 개발자 네트워크의 js문서에서 사용하는 문법이다.
// js를 공부하다 MDN을 찾아볼 일이 많을테니, 여기 익숙해지면 도움이 될 것이다.

// 이 메타 문법에서 기억할 것은 두가지.
// 대괄호([])로 감싼 것은 옵션이고, 생략 부호(...)는 '여기 들어갈 내용이 더 있다'는 뜻이다.
// 단어는 플레이스홀더로 사용하며 그 의미는 문맥에서 알 수 있다.
// 예를 들어 statement1과 statement2는 두 개의 서로 다른 문이고 
// expression은 어떤 값이 되는 것이며,
// condition은 참 같은 값 또는 거짓 같은 값으로 취급할 표현식이다.

// 몇가지 제어문의 메타 문법

// while 문
    while(condition)
        statement
    // condition이 참 같은 값이면 statement를 실행한다.

// if...else 문
    if (condition) 
        statement1
    [else
        statement2]
    // condition이 참 같은 값이면 statement1을 실행하고, 
    // 그렇지 않고 else 부분이 있다면 statement2를 실행한다.

// do...while 문 
    do
        statement
    while(condition);
    // statement는 최소한 한 번 실행하고,
    // condition이 참 같은 값인 동안 반복해서 실행한다.

// for 문
    for([initialization]; [condition]; [final-expression])
        statement
    // 루프에 들어가기 전에 initialization을 실행한다.
    // condition이 true인 동안
    // statement를 실행하고,
    // final-expression을 실행한 다음 condition을 다시 체크한다.

    // ①초기화 ②조건 ③증감 ④구문 이 있다면 순서로,
    // ①초기화 ②조건 ④구문 
    // ③증감 ②조건 ④구문 -> 조건이 false가 될때까지 반복!!

    