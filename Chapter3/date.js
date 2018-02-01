//  날짜

// js에서 날짜와 시간은 내장된 Date 객체에서 담당한다.
// Date 객체는 js에서 불만족스러운 부분중 하나다.
// Date 객체는 원래 Java에서 가져온 것이다.

// Date 객체는 사용하기 어려운 편이고,
// 특히 타임존이 다른 날짜를 다룰 때는 매우 어렵다.

// 현재 날짜와 시간을 나타내는 객체를 만들 때는 new Date()를 사용한다.
const now = new Date();
now;                        // Thu Feb 01 2018 16:09:52 GMT+0900 (JST)

// 특정 날짜에 해당하는 객체를 만들 때는 다음과 같이 한다.
const halloween = new Date(2016, 9, 31);    // 월은 0에서 시작한다. 즉, 9는 10월 이다.

// 특정 날짜와 시간에 해당하는 객체를 만들 때는 다음과 같다.
const halloweenParty = new Date(2016, 9, 31, 19, 0);    // 19:00 == 07:00 pm

// 날짜 객체를 만들면 다음과 같이 각 부분을 가져올 수 있다.
halloweenParty.getFullYear();       // 2016
halloweenParty.getMonth();          // 9
halloweenParty.getDate();           // 31
halloweenParty.getDay();            // 1 (월요일, 0은 일요일)
halloweenParty.getHours();          // 19
halloweenParty.getMinutes();        // 0
halloweenParty.getSeconds();        // 0
halloweenParty.getMilliseconds();   // 0
