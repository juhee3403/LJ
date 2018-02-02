
// 정규표현식(regular expression)

// 정규표현식은 js의 부속언어에 가깝다.
// 정규표현식은 여러 가지 프로그래밍 언어에서 일종의 확장으로 제공하며, 
// 문자열에서 필요한 복잡한 검색과 교체 작업을 비교적 단순하게 만든다.

// js의 정규표현식은 RegExp 객체를 사용한다.
// 슬래시 한 쌍(/.../) 사이에 심볼을 넣는 리터럴 문법도 있다.

// 극히 간단한 이메일 정규표현식
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

// 미국 전화번호 정규표현식
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?\d{4})/;