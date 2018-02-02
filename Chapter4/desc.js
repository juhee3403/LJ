
// 블록문(block statement)

// 불록문 엄밀히 말해 제어문이 아니지만 제어문과 함께 쓰인다.
// (복합문 compound statement 라고도 한다)
// 블록문은 문(statement) 여러 개를 중괄로로 묶은 것이며
// js에서는 이들을 하나의 단위로 취급한다.
// 제어문 없이 블록문만 써도 되지만 별 의미는 없다.
// 다음을 보자

{   // 블록문 시작
    console.log("statement1");
    console.log("statement2");
}   // 블록문 끝
console.log("statement3");
// 처음 두 console.log는 블록 안에 있다.
// 유효한 문법이지만, 무의미하다.

// 블록문이 유용해지는 것은 제어문과 함께 쓸 때다.
// 예를 들어 while문에서 실행하는 루프는 
// 블록문 전체를 실행한 후 조건을 다시 테스트한다.