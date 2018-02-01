
// 문자열은 텍스트 데이터.
// string이라는 단어는 string of characters에서 나왔다.
// 이 표현은 1800년대 후반 식자공들이 일정한 순서로 배열한 심볼을 가리킬 때 썼던 표현이며, 나중에는 수학자도 사용하게 된다.

// js 문자열은 유니코드(Unicode)텍스트.
// 유니코드는 텍스트 데이터에 관한 표준이며,
// 사람이 사용하는 언어 대부분의 글자와 심볼에 해당하는 코드 포인트(code point)를 포함하고 있다.
// (여기서 말하는 '언어'에는 놀랍게도 이모티콘 까지 포함된다)
// 유니코드 자체는 모든 언어의 텍스트를 나타낼 수 있지만, 
// 유니코드를 사용하는 소프트웨어가 모든 코드 포인트를 정확히 렌더링한다고 보장하지는 않는다.
// 널리 쓰이지 않는 글자나 언어를 사용해야 한다면,
// 유니코드에서 코드 포인트를 어떻게 렌더링하는지 따로 조사해야 한다.

// js의 문자열 리터럴에는 작은따옴표, 큰따옴표, 백틱(backtick/grave accent mark)을 사용합니다.
// 백틱은 ES6에서 도입한 것이며 템플릿 문자열(template string)에서 사용한다.

// 텍스트로 만들어진 프로그램에서 텍스트 데이터를 사용할 때는 
// 항상 텍트스 데이터와 프로그램 자체를 구별할 방법이 필요하다.
// 이때! 문자열을 따옴표안에 쓰는 방법이 있다.
// 하지만! 문자열안에 따옴표를 써야 한다면 어떻게 해야 할까?
// 이 문제를 해결하려면 따옴표를 '이스케이프'해서 문자열 주위에 쓰는 부호가 아님을 나타내야 한다.

const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!";
// dialog는 작은따옴표로 감싸여 있으므로, 문자열 안에 큰 따옴표를 걱정없이 사용할 수 있다.
// imperative는 큰따옴표로 감싸여 있으므로 문자열 안에 아포스트로피를 걱정없이 사용할 수 있다.
// 하지만, 두가지 따옴표를 모두 써야 한다면??

const dialog = "Sam looked up, and said "Don't do that!" to Max.";
// 에러 발생.

// dialog 문자열에는 어떤 따옴표를 쓰더라도 에러가 생긴다.
// 이때 역슬래시(\)를 써서 따옴표를 '이스케이프'하면 문자열이 끝나지 않았다고 js에 알릴 수 있다.
// 앞 예제를 다음과 같이 고쳐써 보자
const dialog1 = "Sam looked up, and said \"Don't do that!\" to Max.";
const dialog2 = 'Sam looked up, and said "Don\'t do that!" to Max.';

// 문자열에서 역슬래쉬 문자를 써야 할 때는
const s = "In JavaScript, use \\ as an escape character in strings.";

// 큰따옴표를 쓸지, 작은따옴표를 쓸지는 스스로 정하면 된다.
// 사용자에게 표시될 텍스트에는 보통 큰따옴표를 쓰는 경향이 있다.
// 따옴표보다 don't등의 아포스트로피를 더 많이 쓸수 있으므로, 큰따옴표를 쓰는편이 좋을 수 있다.
// 자바스크립트 문자열 안에 HTML을 쓸 때는 반대로 작은따옴표를 쓰는데,
// HTML문자열을 작은 따옴표로 감싸면 속성값에 큰 따옴표를 쓸 수 있기 때문이다.
let str1 = "hi";
let str2 = '<a href="http://good.com">' + str1 + '</a>';
console.log(str2);

