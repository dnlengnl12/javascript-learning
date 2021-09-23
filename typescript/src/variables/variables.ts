var score1 = 0;
let score2 = 200;
const defulatScore = 0;

function outer() {
    let score: number;
    score = 30;

    for(let i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }
}

outer();