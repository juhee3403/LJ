
// 유용한 제어문 패턴


// continue 문을 사용하여 조건 중첩 줄이기

// 특정 조건이 맞을 때만 루프 바디를 실행해야 할 때가 많다.
// 다시말해 반복문안에 조건문을 써야 하는 경우다.
while (funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if (totalBet === 13) {
        console.log("Unlucky! Skip this round....");
    } else {
        // 플레이...
    }
}
// 이런 경우 '제어문 중첩(nested control flow)'이라 부른다.
// while 루프의 바디에서 할 일은 대부분 else 절에 들어 있고,
// if 절이 하는 일은 console.log를 호출하는 것뿐이다.
// continue 문을 써서 이 구조를 간결하게 만들 수 있다.
while (funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if (totalBet === 13) {
        console.log("Unlucky! Skip this round....");
        continue;
    }
    // 플레이...
}
// 이 단순한 예제는 대체 뭐가 좋아졌다는 건지 실감이 잘 안 나겠지만,
// 루프 바디가 20행쯤 된다고 생각해보자.
// 중첩을 제거하면 코드를 읽고 이해하기 쉬워진다.


// break나 return 문을 써서 불필요한 연산 줄이기

// 뭔가를 찾기 위해 루프를 실행했다면, 
// 찾으려는 것을 이미 찾은 후에는 루프 바디를 계속 실행할 필요가 없다.
// 예로, 어떤 숫자가 소수(prime)인지 판단한는 작업은 CPU 부하가 비교적 높은 일 중 하나다.
// 숫자 수천 개의 리스트에서 가장 앞에 있는 소수를 찾는다고 했을 때, 
// 다음 코드는 일단 원하는 작업을 하기는 한다.
 let firstPrime = null;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n) && firstPrime === null) firstPrime = n;
}
// bigArrayOfNumbers에 들어 있는 숫자가 백만 개쯤 되고,
// 소수는 그 리스트의 마지막 쯤에 있다면 이 방법을 써도 상관은 없다.
// 하지만, 첫 번째 숫자가 소수였다면?
// 아니면, 다섯 번째나 열다섯 번째쯤 있었다면 어떨까?
// 쓸모없는 작업을 백만 번이나 한 셈이다.
// 이때, break 문을 쓰면 원하는 것을 찾는 즉시 루프에서 빠져나갈 수 있다.
let firstPrime = null;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n)){
        firstPrime = n;
        break;
    }
}
// 이 루프가 함수 안에 있었다면 break 대신 return 문을 써도 된다.


// 루프를 완료한 뒤 인덱스 값 사용하기

// break 문을 써서 루프를 일찍 종료했을 때 인덱스 변수의 값이 필요할 때가 있다.
// for 루프가 끝나도 인덱스 변수의 값은 그대로 유지된다는 점을 활용할 수 있다.
// 이 패턴은 break 문을 써서 루프를 끝내도록 해야만 사용할 수 있다.
// 예를 들어 이 패턴을 써서 배열에 들어 있는 첫 번째 소수의 인덱스를 찾을 수 있다.

let i = 0;
for (; i < bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNumbers.length) console.log("No prime");
else console.log(`First prime number found at position ${i}`);


// 배열을 수정할 때 감소하는 인덱스 사용하기

// 배열에 루프를 실행하면서 루프 바디에서 배열을 수정하는 건 위험할 수 있다.
// 왜냐하면, 뜻하지 않게 종료 조건을 바꿀 수도 있어서다.
// 운이 좋다면 원하지 않는 결과가 나오는 정도겠지만,
// 운이 나쁘면 무한 루프가 발생할 것이다.
// 이런 경우 널리 쓰이는 패턴은 '감소하는 인덱스'를 써서,
// 배열 마지막 요소에서 루프를 시작하는 방법이다.
// 이렇게 하면 배열의 요소를 추가하거나 제거해도 종료 조건이 바뀌는 일은 없다.

// 예를 들어 bigArrayOfNumbers에서 찾은 모든 소수를 제거하고 싶다고 하자.
// 다음 코드의 splice 메서드는 배열 요소를 추가하거나 제거할 떄 사용한다.
// 이 예제는 예상대로 동작하지 않는다.
for (let i = 0; i < bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}

// 인덱스는 점점 커지는데 우리는 요소를 제거하고 있으므로,
// 소수가 연달아 존재한다면 그중 일부를 제거하지 않고 넘어갈 가능성이 있다.
    // [1,3,5,7,11,13]같은 배열이 있다면, 계속 삭제되어 배열의 길이가 계속 줄어 들게 된다.
    // 배열[0]번째 1을 삭제하면 배열갯수가 6개에서 5개로 된다.
    // 이렇게 되어버리면 배열.length가 5로 바뀌고 배열이 [3,5,7,11,13]이 된다.
    // 그다음, 1번째는 삭제되는 숫자는 5가 되어버린다. 배열[1]이기 때문에 스킵이 되어 버린다... 망할.
// 감소하는 인덱스를 쓰면 이 문제는 간단히 해결된다.
for (let i = bigArrayOfNumbers.length - 1; i >= 0; i--) {   // 여기서 감소로 바뀌었다.
    if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
// 초기조건과 종료조건을 보자
// 배열의 인덱스는 0에서 시작하므로, 배열 길이보다 1 작은 값으로 초기 값을 줘야 한다.
// 그리고, 루프의 종료 조건을 i가 0보다 크거나 같을 때로 정했다.
// 그렇지 않다면 이 루프는 배열의 첫 번째 요소에서 실행되지 않으므로,
// 첫 번째 요소가 소수라면 문제가 생길 것이다.
    // [1,3,5,7] 이라는 배열이 있을때를 생각
    // i = 3 , 배열[3] = 7 제거
    // i = 2 , 배열[2] = 5 제거
    // i = 1 , 배열[1] = 3 제거
    // i = 0 , 배열[0] = 1 제거
    // i 는 0부터 시작하는 수여야 하므로, i >= 0


