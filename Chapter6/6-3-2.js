
// 매개변수 해체

// 5장에서 해체 할당에 관해 배웠듯, 매개변수도 해체할 수 있다.
// (매개변수는 여러 면에서 변수와 거의 비슷하다.)
// 객체를 변수로 해체하는 예제를 보자

function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};

getSentence(o);     // "I love JavaScript"

// 해체 할당과 마찬가지로 프로퍼티 이름은 반드시 유효한 식별자여야 하고,
// 들어오는 객체에 해당 프로퍼티가 없는 변수는 undefined를 할당 받는다.

// 배열 역시 해체할 수 있다.

function getSentence([ subject, verb, object ]) {
    return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];
getSentence(arr);   // "I love JavaScript"


// 확산 연산자(...)를 써서 남는 매개변수를 이용할 수 있다.
function addPrefix(prefix, ...words) {
    // 나중에 더 좋은 방법을 배운다.

    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}
addPrefix("con", "verse", "vex");   // ["converse", "convex"]
// 함수를 선언할 때 확산 연산자는 반드시 마지막 매개변수여야 한다.
// 확산 연산자 뒤에 다른 매개변수가 있으면 js는 전달된 값 중 어디까지를 
// 확산 매개변수에 할당해야 하는지 판단할 수 없어서 에러를 일으킨다.

// ES5에서는 함수 바디 안에서만 존재하는 
// 특별한 변수 arguments를 사용해서 확산과 비슷한 일을 할 수 있다.
// arguments는 실제 배열이 아니라 배열 비슷한 객체이므로 
// 특별 취급하거나 일반적인 객체로 변환해야 했다.
// ES6에서는 확산 매개변수를 사용해 이런 약점을 해결했으므로 
// arguments 보다 확산 매개변수를 쓰는게 좋다.