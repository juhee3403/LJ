
// for 루프의 다른 패턴
    // 쉼표 연산자를 쓰면 초기화와 마지막 표현식에 여러 문을 결합할 수 있다.
    // 예를 들어 다음 for 루프는 피보나치 수열의 숫자 중 처음 여덟 개를 출력한다.
        // 피보나치 수열 == 앞의 두개의 숫자의 합이 자신이 수열. ex) 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
        // 윗 수열의 초기값은 0, 1 이다.

for(let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i +temp)
    console.log(j);
// 초기화를 할때 변수 temp, i, j를 동시에 선언했다.
// 마지막 표현식에서 세 변수를 동시에 조작했다.

// for 루프의 제어부에 아무것도 쓰지 않으면 무한 루프가 만들어진다.
for(;;) console.log("I will repeat forever");
// for 루프에서 조건을 생략하면 항상 true로 평가되므로 루프를 빠져나갈 수 없다.

// for 루프는 보통 정수 인덱스를 늘리거나 줄이면서 반복하지만, 
// 꼭 그래야 하는건 아니다.
// 어떤 표현식이든 쓸 수 있다.
let s = '3';                        // 숫자가 들어있는 '문자열'                
for( ; s.length<10; s = '' + s);    // 문자열의 길이를 조건으로 썼다.
                                    // 여기서 사용한 for 루프의 마지막에 세미콜론;이 없으면 오류가 일어난다.

for(let x=0.2; x<3.0; x += 0.2)     // 제어 변수가 정수가 아니어도 괜찮다.
    console.log(x);

for(; !player.isBroke;)             // 조건에 객체 프로퍼티를 사용.
    console.log("Still playing");

// for 루프는 모두 while 루프로 고쳐 쓸수 있다.
// 예를 들어 다음 코드를 보자
for ([initialization]; [condition]; [final-expression])
    statement
// 위 코드는 밑 코드와 똑같이 동작한다.
[initialization]
while ([condition]) {
    statement
    [final-expression]
}
// for 루프를 while 루프로 바꿀 수 있다는 것뿐이지, 그렇게 해야 한다는 것은 아니다.
// for 루프의 장점은 루프의 제어부가 첫 번째 행에 모여 있어서 일목요연하게 파악할 수 있다는 것이다.
// 또한, for 루프에서 let으로 초기화한 변수가 for 루프 안에서만 유효하다는 장점도 있다.
// 이런 for 문을 while 문으로 바꾸면, 컨트롤 변수는 루프 바깥에서도 볼 수 있게 된다.


// switch 문
// if...else 문은 두 가지 중 하나를 선택하지만, switch 문은 조건 하나로 여러 가지 중 하나를 선택할 수 있다.
// 따라서 참/거짓 같은 값보다는 다양하게 나뉘는 조건을 사용한다.
// switch 문의 조건은 값으로 평가할 수 있는 표현식이다.

switch (expression) {
    case value1:
        // expression을 평가한 결과가 value1일 때 실행.
        [break;]
    case value2:
        // expression을 평가한 결과가 value2일 때 실행.
        [break;]
        ...
    case valueN:
        // expression을 평가한 결과가 valueN일 때 실행.
        [break;]
    default:
        // expression을 평가한 결과에 맞는 것이 없을 때 실행.
        [break;]
}
// js는 expression을 평가하고 그에 일치하는 첫 번째 case를 찾아서
// break, return, continue, throw를 만나거나
// switch 문이 끝날 때까지 문을 실행한다.

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 11:
        totalBet = 0;
        break;
    case 13:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}

// 11, 13 일때 똑같은 행동을 하니,
// 이런 경우에는 break 없는 case절(fall-through execution)을 활용할 수 있다.
// 만약 11에 걸리면 break가 없어 밑의 case 13이 바로 실행된다.
switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 11:        // break 없는 case 절 사용 -> 밑 케이스 실행.
    case 13:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}

//만약 13이 11보다 불길한 숫자라고 하면, 돈을 안걸고 1 기부까지 한다고 하면?
switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:        // break 없는 case 절 사용 -> 밑 케이스 실행.
        totalBet = funds - 1;   // 표현식에 break가 없으니 밑 케이스도 실행.
    case 11:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}
// 13이면 1기부 하고, break가 없으니 다음 case(11)로 넘어간다.
// 이 코드는 유효한 js이며, 원하는 일을 정확히 수행한다.
// 그러나, 약점으로 정확한데도 불구하고
// break를 빼먹은 실수처럼 보인다.
// 그러니 이 기능을 활용하고 싶다면
// 항상 '주석'을 남겨서 의도적으로 break 문을 생략했다는 것을 명확히 하자.

// default 절는 일치하는 case 절이 없을 때 실행
// 필수는 아니지만, 보통 맨 마지막에 기입.
switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:        // break 없는 case 절 사용 -> 밑 케이스 실행.
        totalBet = funds - 1;   // 표현식에 break가 없으니 밑 케이스도 실행.
    case 11:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
    default:
        console.log("No here");
        break;
}
// default 뒤에는 case가 없으니 break 문이 없어도 되지만, 
// 항상 break 문을 사용하는 게 좋은 습관이다.
// 언제든 break 문을 주석 처리할 수 있으므로, 
// 설령 break 없는 case 절을 사용하더라도
// 항상 break 문을 쓰는 습관을 들여야 한다.
// break 문이 필요한데도 쓰지 않았다면 매우 찾기 어려운 버그가 생길 수 있다.

// 위 규칙의 예외는 switch 문을 함수안에서 쓸 때뿐이다.
// return 문은 즉시 함수를 빠져나가므로 break 문 대신 쓸 수 있다.
function adjustBet(totalBet, funds) {
    switch (totalBet) {
        case 7:
            return funds;   // 함수 안에서 break가 아닌 return을 썼다.
        case 13:
            return 0;
        default:
            return totalBet;
    }
}

// js는 공백이 몇 칸이든 신경 쓰지 않으니 break나 return 문을 
// 실행할 문과 같은 행에 넣으면 switch 문을 더 간결하게 만들 수 있다.
switch (totalBet) {
    case 7: totalBet = funds;   break;
    case 11: totalBet = 0;      break; 
    case 13: totalBet = 0;      break;
    case 21: totalBet = 21;     break;
}
// 11과 13일 때 같은 일을 하지만, 여기서는 break없는 case절을 쓰지 않았다.
// 그 이유는 이렇게 줄바꿈 없이 switch 문을 쓸 때는 case마다 실행문이 하나씩 있고,
// break없는 case절을 쓰지 않아야 의도가 명확하게 드러나기 때문이다.

// switch 문은 여러가지 옵션중에서 하나를 선택해야 할 때 아주 유용하다.
// 그렇긴 하지만, 동적 디스패치(dynamic dispatch)에 대해 배우고 나면
// switch 문을 그리 많이 쓰지는 않게 될 것이다.