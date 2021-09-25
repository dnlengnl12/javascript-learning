enum StarbuksGrade {
    WELCOME,
    GREEN,
    GOLD

    /*
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = "GOLD"
    */
}

function getDicound(v: StarbuksGrade): number {
    switch(v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}

console.log(getDicound(StarbuksGrade.GREEN));
console.log(StarbuksGrade["GOLD"]);