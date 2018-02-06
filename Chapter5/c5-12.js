
// 템플릿 문자열과 표현식

// 3장에서 템플릿 문자열을 설명하면서 
// 어떤 표현식이든 그 값을 문자열에 넣을 수 있다고 언급했다.
// 3장에서 예제로 사용한 템플릿 문자열은 현재 온도를 표시하는 문자열이었다.
// 온도가 얼마나 변했는지 표시하거나, 섭씨 대신 화씨온도를 표시하고 싶다면
// 어떻게 해야 할까? 템플릿 문자열 안에 표현식을 사용하면 된다.

const rommTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temperature is ` + 
`${currentTempC-rommTempC}\u00b0C different than room temperature.`;

const farenheit = 
`The current temperature is ${currentTempC * 9/5 + 32}\u00b0F`;

// 표현식은 값이므로 값이 들어갈 수 있는 곳에는 어디든 표현식을 쓸 수 있다.
