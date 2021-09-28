class LocalDB {
    constructor(localStroageKey) {
        this.localStroageKey = localStroageKey;
    }
    add(v) {
        localStorage.setItem(this.localStroageKey, v.serialize());
    }
    get() {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const cart1 = {
    getItem() {
        return { v: '' };
    }
};
//# sourceMappingURL=generic2.js.map