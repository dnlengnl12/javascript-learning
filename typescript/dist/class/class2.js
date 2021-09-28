class KoreanProgrammer {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
    writeCod(requirement) {
        console.log(requirement);
        return requirement + '....';
    }
}
const jay = new KoreanProgrammer('jay');
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(msg) {
        console.log(msg);
    }
}
class KoreanProgrammer2 extends Korean {
    constructor(name, jumin) {
        super(name);
        this.name = name;
        this.jumin = jumin;
    }
    say(message) {
        console.log(message);
    }
    writeCod(requirement) {
        console.log(requirement);
        return requirement + '....';
    }
    loveKimchi() {
    }
}
const jay2 = new KoreanProgrammer2('jay', 1234);
//# sourceMappingURL=class2.js.map