
// 문자열 병합

// js에서 + 연산자는 덧셈과 문자열 병합에 모두 사용된다.
// (이렇게 하는 언어가 매우 많다. 펄과 PHP는 문자열 병합할 때 + 연산자를 쓰지 않는 몇 안되는 언어다)

// js는 피연산자의 타입을 보고 덧셈을 할지 문자열 병합을 할지 판단한다.
// 덧셈과 문자열 병합은 모두 왼쪽에서 오른쪽으로 평가한다.
// js는 두 피연산자를 왼쪽에서 오른쪽으로 평가한 후, 
// 피연산자 중 하나라도 문자열이면 문자열 병합을 수행한다.
// 두 값이 모두 숫자형이면 덧셈을 한다.
3 + 5 + "8"     // 문자열 "88"이 된다.
"3" + 5 + 8     // 문자열 "358"이 된다.
