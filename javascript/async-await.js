// Promise 객체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때

p(1000).then(ms => {
    console.log(`${ms} ms 후에 실행`);
});

// Promise 객체를 리턴하는 함수를 await로 호출하는 방법

/* const ms = await p(1000);
console.log(`${ms} ms 후에 실행`); // error: await is only valid in async function
 */
// await를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.

function p2(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main() {
    const ms2 = await p2(1000);
    console.log(`${ms2} ms 후에 실행`);
})();

/*
    Promise 객체가 rejected 된 경우의 처리를 위해
    try-catch를 이용한다.
*/

function p3(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        }, ms);
    });
}

(async function main() {
    try {
        const ms3 = await p3(1000);
    } catch(error) {
        console.log(error)
    }
})();

/*
    async function에서 return되는 값은
    Promise.resolve 함수로 감싸서 리턴된다.
*/

function p4(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

async function asyncP() {
    const ms = await p4(1000);
    return 'Mark' + ms;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch(error) {
        console.log(error);
    }
})();

/*
    Promise와 async-await 비교
*/
function p5(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// 1. Promise
p(1000)
    .then(() => p(1000))
    .then(() => p(1000))
    .then(() => {
        console.log('3000 ms 후에 실행');
    });

// 2. async-await
(async function main() {
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000 ms 후에 실행');
})();

/*
    Promise.all, Promise.race
*/
function p6(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise.all
(async function main() {
    const results = await Promise.all([p(1000), p(2000), p(3000)]);
    console.log(results);
})();

// Promise.race
(async function main() {
    const results = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(results);
})();
