/*
생성자를 통해서 프로미스 객체를 만드는 순간 pending 상태
*/

    
/*
executor 함수 인자 중 하나인 resolve 함수를 실행하면 fulfilled 상태
*/

const p1 = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfilled */
    }, 1000);
});

p1.then(() => { // callback
    console.log('1000ms 후에 fulfilled 됨');
});

/*
    then을 설정하는 시점을 정확히하고,
    함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작되도록 하기 위해,
    프로미스 객체를 생성하면서 리턴하는 함수 (p)를 만들어 함수 (p) 실행과 동시에
    then을 설정
*/

function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p2().then(() => {
    console.log('1000ms 후에 fulfilled 됨');
});

/*
    프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행
*/

function p3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, 1000);
    });
}

p3()
.then(() => {
    console.log('1000ms 후에 fulfilled 됨');
})
.catch(() => {
    console.log('1000ms 후에 rejected 됨');
});

/*
    executor의 resolve 함수를 실행할 때 인자를 넣어 실행하면,
    then의 callback 함수의 인자로 받을 수 있다.
    resolve('hello');
    then((message) => {...})
*/

function p4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 1000);
    });
}

p4()
.then((message) => {
    console.log('1000ms 후에 fulfilled 됨', message);
})
.catch(() => {
    console.log('1000ms 후에 rejected 됨');
});

/*
    reject함수를 실행하며 rejected 되는 이유를 넘기는데,
    표준 내장 객체인 Error의 생성자를 이용하여 Error객체를 만들어 넘긴다
*/

function p5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error);
        }, 1000);
    });
}

p5()
.then((message) => {
    console.log('1000ms 후에 fulfilled 됨', message);
})
.catch((reason) => {
    console.log('1000ms 후에 rejected 됨', reason);
});


/*
    fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면,
    .finally()를 설정하고, 함수를 인자로 넣는다.
*/

function p6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error);
        }, 1000);
    });
}

p6()
.then((message) => {
    console.log('1000ms 후에 fulfilled 됨', message);
})
.catch((reason) => {
    console.log('1000ms 후에 rejected 됨', reason);
})
.finally(() => {
    console.log('end');
});

/*
    then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면,
    비동기 작업을 순차적으로 아래로 표현할 수 있다.
    then에 함수를 넣는 여러 방법을 확인해보자
*/

function p7() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p7().then(() => {
    return p7();
})
.then(() => p7())
.then(p7)
.then(() => {
    console.log('4000ms 후에 fulfiiled 됨');
});

/*
    value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메소드를 실행한다.
    value가 프로미스 객체면, resolve된 then 메소드를 실행한다.
    value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메소드를 실행한다.
*/

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
})).then((data) => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아서 then이 실행 됨', data)
})

Promise.resolve('bar').then(data => {
    console.log('then 메소드가 없는 경우, fulfilled 됨.', data);
});

/*
    Promise.reject를 사용하면, catch로 연결된 rejected 상태로 변경 됨
*/

Promise.reject(new Error('reason')).then(error => {}).catch(error => {
    console.log(error);
})

/*
    프로미스 객체 여러개를 생성하여,
    배열로 만들어 인자로 넣고 Promise.all을 실행하면,
    배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then의 함수가 실행 됨.
    then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려 줌
*/

function p8(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

Promise.all([p8(1000), p8(2000), p8(3000)]).then((messages) => {
    console.log('모두 fulfilled 된 이후에 실행 됨', messages);
});

/*
    프로미스 객체 여러개를 생성하여,
    배열로 만들어 인자로 넣고 Promise.race를 실행하면,
    배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then의함수가  실행 됨
    then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의
    resolve 인자값을 돌려 줌.
*/

function p9(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

Promise.race([p9(1000), p9(2000), p9(3000)]).then((messages) => {
    console.log('가장 빠른 하나가 fulfilled 된 이후에 실행 됨', messages);
});